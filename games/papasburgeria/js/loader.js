const supportDecoderApi = ('DecompressionStream' in self);
const isSWC = (head) => (head[0] === 0x43 && head[1] === 0x57 && head[2] === 0x53);
const outputSize = (head) => new DataView(head.buffer).getUint32(4, true);

function Decoder(size, offset = 8) {
	if(!supportDecoderApi) {
		throw 'Your browser not support DecompressionStream =(';
	}

	const decoder = new self.DecompressionStream('deflate');
	const decoderW = decoder.writable.getWriter();
	const decoderR = decoder.readable.getReader();
	const buffer = new Uint8Array(size);

	let isRunned = false;
	let isDone = false;

	let donableCallback;

	function run() {
		decoderR.read().then(function next(state) {
			const done = state.done;
			const value = state.value;

			if (value) {
				buffer.set(value, offset);
				//console.debug("[Loader] Decoded chunk:", offset);

				offset += value.length;
			}

			if (done || offset >= size) {
				isDone = true;

				if(donableCallback) {
					donableCallback();
				}

				console.debug("[Loader] Decoder closed:", offset);
				return;
			}

			return decoderR.read().then(next);
		});
	}

	return {
		get buffer() {
			return buffer;
		},
		
		write(buffer) {
			decoderW.ready.then(()=>{
				decoderW.write(buffer);

				if(!isRunned) {
					isRunned = true;
					run();
				}
			});
		},

		readAll() {
			if(isDone) {
				return Promise.resolve(buffer);
			}

			return new Promise((res)=>{
				donableCallback = () => {
					res(buffer);
				}
			})
		}
	}
}

function Fetcher(url = '', progress = f => f) {
	let total = 0;
	let reader;
	let chunks = [];

	progress && progress(0);

	return fetch(url)
		.then((request) => {
			total = +request.headers.get('Content-Length');
			reader = request.body.getReader();

			return reader.read();
		})
		.then( (data) => {
			const firstChunk = data.value; 

			console.debug("[Loader] Header:", String.fromCharCode.apply(null,firstChunk.slice(0, 3).reverse()));

			let loaded = 0;
			let decoder;

			if (supportDecoderApi && isSWC(firstChunk)) {
				const totalDecodedSize = outputSize(firstChunk);
				const swcHeader = firstChunk.slice(0, 8);

				swcHeader[0] = 70; // SWC => SWF

				console.debug("[Loader] SWC size:", outputSize(firstChunk));

				decoder = Decoder(totalDecodedSize, 8);
				decoder.buffer.set(swcHeader);

				// push witout header
				decoder.write(firstChunk.slice(8));

			} else {
				chunks.push(firstChunk);
			}

			loaded += firstChunk.length;
	
			progress && progress( Math.min(1, loaded / total));

			// update all other chunks reqursive while !done
			return reader.read().then( function moveNext(state) {

				if (state.done) {
					if(!decoder) {
						let buffer = new Uint8Array(loaded);
						let offset = 0;
						
						chunks.forEach((e) => {
							buffer.set(e, offset);
							offset += e.length;
						});

						return buffer;
					}else {
						return decoder.readAll();
					}
				}

				const value = state.value;

				loaded += value.length;
				progress && progress( Math.min(1, loaded / total));

				if (!decoder) {
					chunks.push(value);
				} else {
					decoder.write(value);
				}

				return reader.read().then(moveNext);
			});
		})
}

var Loader = (function () {
	function loadBinary(file, progressEvent = f => f) {
		const isScript = file.path.indexOf(".js") > -1;

		if (!isScript && supportDecoderApi ) {
			return Fetcher(file.path, progressEvent)
				.then((buffer)=>({
					meta: file.meta || {},
					name: file.name,
					path: file.path,
					resourceType: file.resourceType,
					data: buffer.buffer,
					type: "swf",
				}));
		}

		const req = new XMLHttpRequest();

		req.addEventListener("progress", e => {
			const gzip = req.getAllResponseHeaders('content-encoding') === 'gzip';

			// get from progress, then from request, and if not valid - from file
			const total = e.total || (+req.getAllResponseHeaders('content-length')) || (file.size * (gzip ? 0.25 : 1));

			if(!total) {
				progressEvent(1);
				return;
			}

			progressEvent(Math.min(1, e.loaded / total) );
		});

		req.open("GET", file.path, true);
		req.responseType = isScript ? "text" : "arraybuffer";

		return new Promise((res, rej) => {
			req.addEventListener("error", rej);
			req.addEventListener("load", () => {
				progressEvent(1);

				if (isScript) {
					// unsafe
					//eval(req.response);

					const b = new Blob([req.response], { type: "text/javascript" });
					// use blob
					loadScript(URL.createObjectURL(b)).then(() => res(undefined));

					return;
				}
				res({
					meta: file.meta || {},
					name: file.name,
					path: file.path,
					resourceType: file.resourceType,
					data: req.response,
					type: isScript ? "js" : "swf",
				});
			});

			req.send();
		});
	}

	function loadScript(file, progress) {
		const head = document.querySelector("head");
		const script = document.createElement("script");

		return new Promise((res, rej) => {
			Object.assign(script, {
				type: "text/javascript",
				async: true,
				src: file.path || file,
				onload: () => {
					progress && progress(1);
					res(script);
				},
				onerror: rej,
				onreadystatechange: s => {
					if (script.readyState == "complete") { }
				},
			});

			head.appendChild(script);
		});
	}

	function createReporter(callback, childs, weight) {
		const reporter = {
			callback: callback,
			childs: childs ? childs.slice() : undefined,
			value: 0,
			weight: weight || 1,

			get report() {
				return function (v) {
					if (!this.childs) {
						this.value = v * this.weight;
					} else {
						let summ = 0;
						let v = 0;

						this.childs.forEach((e) => {
							summ += e.weight || 1;
							v += (e.value || 0);
						});

						this.value = v / summ;
					}

					this.callback && this.callback(this.value);
				}.bind(this);
			},
		};

		if (childs) {
			childs.forEach(e => {
				e.callback = reporter.report;
			});
		}

		return reporter;
	}

	function runLoadingProcess(jsFiles, binaryFiles, progressEvent = f => f, _debugScripts) {
		const jsCount = jsFiles.length;
		const binCount = binaryFiles.length;

		const all = jsFiles.concat(binaryFiles);

		const reporters = Array.from({ length: jsCount + binCount }, () => createReporter());
		createReporter(progressEvent, reporters);

		let pendings;

		if (!_debugScripts) {
			pendings = all.map((e, i) => loadBinary(e, reporters[i].report));
		} else {
			pendings = binaryFiles.map((e, i) => loadBinary(e, reporters[i].report))
			pendings = pendings.concat(jsFiles.map((e, i) => loadScript(e, reporters[i + binCount].report)))
		}

		return Promise.all(pendings).then(data => {
			return data.filter(e => e && e.type === 'swf');
		});
	}

	let fillLine = undefined;
	let __config = undefined;
	let __splash = undefined;
	let __pr__root = undefined;
	let handleResize = undefined;

	window["setStageDimensions"]=function(x, y, w, h){
		__config.x=x;
		__config.y=y;
		__config.w=w;
		__config.h=h;
		if(window["AVMPlayerPoki"]){
			window["AVMPlayerPoki"].setStageDimensions(x, y, w, h);
		}
		if(handleResize){
			handleResize();
		}
	}

	function runGame(progressEvent = f => f, completeEvent = f => f) {

		if (!__config) {
			init();
		}

		let jss = Array.isArray(__config.runtime) ? jss : [__config.runtime];
			jss = jss.map(e => ({ path: e.path || e, size: e.size || 0 }));
				
		const bins = __config.binary;

		const loadReporter = createReporter(null, null, 4);
		const avmReporter = createReporter((f) => {
			console.log('AVM Load', f);
		}, null, __config.progressParserWeigth ? __config.progressParserWeigth : 0.001);

		createReporter(function (fill) {
			fillLine(fill);
			// rereport
			progressEvent(fill);
		}, [loadReporter, avmReporter])

		const complete = f => {
			// rereport			
			completeEvent(f);

			if (__config.start) {

				//	start image exists. 
				//	hide progressbar, show startimage and wait for user-input to start the game

				Object.assign(__pr__root.style, {
					visibility: "hidden",
					opacity: 0,
				});
				Object.assign(__splash.style, {
					backgroundImage: `url(${__config.start})`,
				});				
				let onCLick = (e) => {
					window.removeEventListener("click", onCLick);
					Object.assign(__splash.style, {
						visibility: "hidden",
						opacity: 0,
					});
					if (!f)
						throw ("PokiPlayer did not send a callback for starting game");
					f();					
					window.setTimeout(()=>{					
						window.removeEventListener("resize", handleResize);
						handleResize=null;
					}, 500)
				};
				window.addEventListener("click", onCLick);
			}
			else {
				// 	no start image. 
				//	game will be started automatically
				Object.assign(__splash.style, {
					visibility: "hidden",
					opacity: 0,
				});
				// use Timeout, so css transition can complete first
				window.setTimeout(()=>{					
					window.removeEventListener("resize", handleResize);
					handleResize=null;
				}, 500)
			}
		};

		runLoadingProcess(jss, bins, loadReporter.report, __config.debug).then(data => {
			const runner = window["startPokiGame"];
			if (!runner) {
				throw "Could not find a 'startPokiGame' method";
			}

			__config.files = data;

			runner(__config);
			
			// now poki player is available at window["AVMPlayerPoki"]
			// can be used to update the stageDimensions:  
			// window["AVMPlayerPoki"].setStageDimensions(x, y, w, h);
			// values can be 
			//		numbers (absolute pixel values) 
			//		strings (percentage of window.innerHeight/innerWidth in 0-100)
		});

		// make functions avilailable on window, so the loaded js-code can access and execute them
		Object.assign(window, {
			updatePokiProgressBar: avmReporter.report,
			pokiGameParseComplete: complete,
		});
	}

	function init(config) {
		if (!config) {
			throw new Error("Config is required");
		}

		__config = config;

		const splash = document.querySelector("#splash__image");
		const pr__root = document.querySelector("#progress__root");
		const pr__line = document.querySelector("#progress__line");

		__splash = splash;
		__pr__root = pr__root;

		const pr_conf = config.progress;
		pr_conf.rect = pr_conf.rect || [0, 0.9, 1, 0.2];

		Object.assign(splash.style, {
			backgroundImage: `url(${config.splash})`,
			visibility: "visible",
		});

		Object.assign(pr__root.style, {
			background: pr_conf.back,
			left: `${100 * pr_conf.rect[0]}%`,
			top: `${100 * pr_conf.rect[1]}%`,
			width: `${100 * pr_conf.rect[2]}%`,
			height: `${100 * pr_conf.rect[3]}%`,
		});

		Object.assign(pr__line.style, {
			background: pr_conf.line,
		});

		fillLine = fill => {
			switch (pr_conf.direction) {
				case "tb": {
					Object.assign(pr__line.style, {
						height: `${fill * 100}%`,
						width: "100%",
					});
					break;
				}
				case "lr":
				default: {
					Object.assign(pr__line.style, {
						height: "100%",
						width: `${fill * 100}%`,
					});
				}
			}
		};

		handleResize = () => {
			let x=(typeof config.x==="string")?parseFloat(config.x.replace("%", ""))/100*window.innerWidth:config.x;
			let y=(typeof config.y==="string")?parseFloat(config.y.replace("%", ""))/100*window.innerHeight:config.y;
			let w=(typeof config.w==="string")?parseFloat(config.w.replace("%", ""))/100*window.innerWidth:config.w;
			let h=(typeof config.h==="string")?parseFloat(config.h.replace("%", ""))/100*window.innerHeight:config.h;

			if(!x) x=0;
			if(!y) y=0;
			if(!w) w=window.innerWidth;
			if(!h) h=window.innerHeight;

			const minMax = Math.min(h / config.height, w / config.width);
			const rw = Math.ceil(config.width * minMax);
			const rh = Math.ceil(config.height * minMax);
			const rx = x+(w - rw) / 2;
			const ry = y+(h - rh) / 2;

			Object.assign(splash.style, {
				width: `${rw}px`,
				height: `${rh}px`,
				left: `${rx}px`,
				top: `${ry}px`,
			});
		};

		window.addEventListener("resize", handleResize);
		handleResize();
	}

	return {
		init,
		runGame,
	};
})();
