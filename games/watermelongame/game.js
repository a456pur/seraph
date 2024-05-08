
     var enablePWA = false;
     if(enablePWA) {
         // SERVICE WORKER
         if('serviceWorker' in navigator) {
             navigator.serviceWorker.register('./js/sw.js');
         };
         // NOTIFICATIONS TEMPLATE
         Notification.requestPermission().then(function(result) {
             if(result === 'granted') {
                 exampleNotification();
             }
         });
         function exampleNotification() {
             var notifTitle = 'MERGE FRUIT';
             var notifBody =  'Created by the Francis Davidson Paul.';
             //var notifImg = 'img/icons/icon-512.png';
             var options = {
                 body: notifBody,
                 icon: notifImg
             }
             var notif = new Notification(notifTitle, options);
             setTimeout(exampleNotification, 30000);
         }
     }
     

let game;

// global game options
let gameOptions = { 

    // falling player fruit range, 0 to 4
    playerFruitsRange: 4,

    // localStorage string name
    localStorageName: "samegame"
}
window.onload = function() {

    // object containing configuration options
    let gameConfig = {
        type: Phaser.AUTO,
        backgroundColor:0xFFE5EC,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "thegame",
            width: 750,
            height: 1334
        },

        // physics settings
        physics: {
            default: "matter",
            matter: {
                gravity: {
                    y: 1
                },
                debug: false
            }
        },
        
        scene: playGame
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
}
class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    preload(){

        //preload bitmap font
        this.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.fnt");

        //preload bitmap images, spritesheet and sounds  
        var resources = {
        'image': [
            ["tittle", "assets/sprites/tittle.png"],
            ["borderLine", "assets/sprites/borderLine.png"],
            ["x", "assets/sprites/x.png"],
            ["best", "assets/sprites/best.png"],
            ["best", "assets/sprites/best.png"]
           
        ],
        'spritesheet': [
            ["particle", "assets/sprites/particle.png", {frameWidth: 20,frameHeight: 20}],
            ["furits", "assets/sprites/furits.png", {frameWidth: 200,frameHeight: 200}]
        ],
        'audio': [           
            ['boom', ['assets/audio/boom.mp3','assets/audio/boom.ogg']],
            ['knock', ['assets/audio/knock.mp3','assets/audio/knock.ogg']],
            ['water', ['assets/audio/water.mp3','assets/audio/water.ogg']],
            ['alert', ['assets/audio/alert.mp3','assets/audio/alert.ogg']],
            ['newLevel', ['assets/audio/newLevel.mp3','assets/audio/newLevel.ogg']],
            ['gameOver', ['assets/audio/gameOver.mp3','assets/audio/gameOver.ogg']]     
        ]
        
    }
    
    for(var method in resources) {
        resources[method].forEach(function(args) {
            var loader = this.load[method];
            loader && loader.apply(this.load, args);
        }, this);
    };
    }
    create(){
       
        //sounds decleration
        this.boom = this.sound.add('boom');
        this.knock = this.sound.add('knock');
        this.water = this.sound.add('water');
        this.alert = this.sound.add('alert');
        this.newLevel = this.sound.add('newLevel');
        this.gameOver = this.sound.add('gameOver');

        // creation of the physics world which will contain all fruits
		this.matter.world.update60Hz();
        // seting bounds physics world
		this.matter.world.setBounds();
        // listener for collision between fruits in physics world
        this.matter.world.on("collisionstart", this.handleCollisionStart, this);
          
        
        // adding the game tittle sprite "FRUITRIS';
        this.tittle = this.add.sprite(game.config.width / 2, game.config.height/2, "tittle");
		
         // group with all active fruits.
		this.furitGroup = this.add.group(); 

	    // adding the player fruit spritesheet; 
        this.playerFruit = this.add.sprite(game.config.width / 2, game.config.height - 1220, "furits");

        this.nextFruitNum = Phaser.Math.Between(0, gameOptions.playerFruitsRange);
		
        // setup player fruit
        this.setFurit();

		// listener for input, calls "launchFurit" method
		this.input.on("pointerdown", this.launchFurit, this);          
		
        // score stats at zero
        this.score = 0;

        // text object to display the score
		this.scoreText = this.add.bitmapText(10, 15, "font", "ccc", 60);
		this.scoreText.setTint(0xff00ff, 0xffff00, 0x00ff00, 0xff0000);

        // updateScore will add current score and display it
        this.updateScore();

        // waterMelon stats at zero
        //this.waterMelon = 0;

        // text object to display the waterMelon count;
        //this.waterMelonText = this.add.bitmapText(640, 15, "font", "ccc", 60).setLeftAlign();
		//this.waterMelonText.setTint(0xff00ff, 0xffff00, 0x00ff00, 0xff0000);

        // updateWarterMelon method will add current watermelon count and display it
        //this.updateWateMelon();
      
        // adding the fruit spritesheet and setting frame to 11/scale 0.25; 
		this.nextFruit = this.add.sprite(game.config.width - 35, 35, "furits");
		this.nextFruit.setFrame(Phaser.Math.Between(0, gameOptions.playerFruitsRange));
        this.nextFruit.setScale(0.30);

        this.nextFruitNum = this.nextFruit.frame.name;

        // adding the borderline sprite and set visible "false";
		this.borderLine = this.add.sprite(game.config.width / 2, game.config.height - 1134, "borderLine");
		this.borderLine.setVisible(false);

        // adding the final score sprite and set visible "false";
        this.scoreFinal = this.add.sprite(game.config.width / 2, game.config.height/2, "score");
        this.scoreFinal.setVisible(false);
		
        // adding the best score sprite and set alpha "0";
        this.best = this.add.sprite((game.config.width/2) + 5 , 350, "best");
        this.best.setAlpha(0);

        //getting saved score from local storge and display it;
        this.savedData = localStorage.getItem(gameOptions.localStorageName) == null ? {
            score: 0
        } : JSON.parse(localStorage.getItem(gameOptions.localStorageName));
        if(this.savedData.score != 0){
            this.best.setAlpha(1);
            this.bestScoreText = this.add.bitmapText(game.config.width/2, 400, "font", "Best : " + this.savedData.score.toString(), 60).setCenterAlign().setOrigin(0.5, 0);
            this.bestScoreText.y = this.bestScoreText.y + 50;
            this.bestScoreText.setTint(0xff00ff, 0xffff00, 0x00ff00, 0xff0000);
            this.tweens.add({targets: this.bestScoreText, y: this.bestScoreText.y - 50, duration: 275, ease: 'Back.easeOut'});
        }

    //---------------------------particle emitter-------------------------------\\
        this.emitter = this.add.particles("particle").createEmitter({
            frame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            scale: { start: 4, end: 0 },
            speed: { min: 50, max: 200 },
            active: false,
            lifespan: 300,        
            quantity: 200,
            alpha: { min: 30, max: 100 }
            
        });
       this.emitter.setPosition(game.config.width / 2, game.config.height/2)
       this.emitter.active = true;         
       this.emitter.setEmitZone({         
               type: 'random',
               quantity: 200,
               source: new Phaser.Geom.Circle(0, 0, 250)
           });       
       this.emitter.explode();
    //-------------------------------------------------------------------------------\\
       
    }
	
	 // method to add score to current score and display it
	updateScore(){
        this.scoreText.text = this.score;              
    }

    // method to add watermelon count
    //updateWateMelon(){
        //this.waterMelonText.text = 'fbjdsfj'+this.waterMelon;
    //}

    // method to setup player fruit
    setFurit(){
		// player fruit is ready to drop
        this.playerFruitReady = true;
        // player fruit visible is true
        this.playerFruit.setVisible(true);

       // player fruit 'fruits' sprite sheet frame(random 0 to 4);
        this.playerFruit.setFrame(this.nextFruitNum);  
          
        // setting player fruit width and hight
        this.playerFruit.displayWidth = this.playerFruit.displayHeight = 50 + (this.playerFruit.frame.name  * (this.playerFruit.frame.name + 21));
		
        let tween = this.tweens.add({
            targets: this.playerFruit,
            scale:  { start: 0, to: this.playerFruit.scale},
            ease: 'Back.easeOut',     
            duration: 100            
            }); 
		// plays knock sound
		this.knock.play();
    }

    setNextFurit(){
        this.nextFruitNum = Phaser.Math.Between(0, gameOptions.playerFruitsRange);
        this.nextFruit.setFrame(this.nextFruitNum); 

    }

    // method to hide tittle, best score and call "dropFruit" 
    // called when the pointer is pressed
	launchFurit(event){
        // hide tittle
		this.tittle.setVisible(false);
        // hide best score if its there
        if( this.bestScoreText){
            this.bestScoreText.setAlpha(0);
            this.best.setAlpha(0);
        }
        // player fruit is ready to drop
        if(this.playerFruitReady){
            // temporarily make the player fruit is not ready to fall
            // because its not added to the physic world
            this.playerFruitReady = false;
            // temporarily hide the player fruit and
            this.playerFruit.setVisible(false);            
			// now adding player fruit to physic world to fall
            // with parameters(pressed pointer x, y, fruits sprite sheet frame number) 
            this.dropFurit(event.x, this.playerFruit.y, this.playerFruit.frame.name)
            // again setup new player fruit by calling "setFruit" with delat of 5 sec
            this.time.addEvent({
                delay: 500,
                callbackScope: this,
                callback: this.setFurit
            });
            this.time.addEvent({
                delay: 600,
                callbackScope: this,
                callback: this.setNextFurit
            });
		}	
      
    }

    // method to drop the player fruit, called when the pointer is pressed
    dropFurit(posX, posY, frameNum){
        // adding the fruit to physic world (pointer x and y)
        let furit = this.matter.add.sprite(posX, posY, "furits");
        // setting 'fruits' sprite sheet frame number
        furit.setFrame(frameNum);
        // set restitution to player fruits
        furit.setBounce(0.4);
        // set circle size to 100%
        furit.setCircle(100);
        // set vertical velocity to player fruits
        furit.setVelocityY(30);
        // set width and height to player fruit
		furit.displayWidth = furit.displayHeight = 50 + (frameNum  * (frameNum + 21));
        // add player fruit to the fruit group
        this.furitGroup.add(furit);		
        
    }

    
	
    // setting collisions between all fruits in physic world
	handleCollisionStart(event, bodyA, bodyB){
	// check collisions between each pair in physic world(bodyA & bodyB)
	event.pairs.forEach(pair => {  
        
       const { bodyA, bodyB  } = pair;	
	   
       if(bodyA.gameObject && bodyB.gameObject){
		// check for game over if fruit reach the border line
        this.checkGameOver(bodyA.gameObject, bodyB.gameObject);
            // check both fruits that collide are same, call 'handleInclusion'
            if(bodyA.gameObject.frame.name == bodyB.gameObject.frame.name){	
               	// check both fruit speed to determine the x and y
                if(bodyA.speed < bodyB.speed){
                    this.handleInclusion(bodyA.gameObject, bodyB.gameObject);
                }
                else{
                    this.handleInclusion(bodyB.gameObject, bodyA.gameObject);
               }
            }
            else{
                // check both fruits that collide are not same, call 'handleBounce' 
                if(bodyA.speed < bodyB.speed){
                    this.handleBounce(bodyA.gameObject, bodyB.gameObject);
               }
                else{
                    this.handleBounce(bodyB.gameObject, bodyA.gameObject);
                }
            }
        }
	}); 
    }
   
    // method to add next fruit when the same fruit merge
    handleInclusion(bodyA, bodyB){
		// get x and y pos of the fruit
		let saveX = bodyA.x;
        let saveY = bodyA.y;
        // get frame number of the 'fruits' sprite sheet
		let frame = bodyA.frame.name + 1;     
            // remove two merged fruits
		    bodyA.destroy();
		    bodyB.destroy();
            // check for the last fruit to merge add big watermelon 
            if(frame === 11){
                // add watermelon
                this.addWaterMelon(game.config.width/2, game.config.height/2, frame, false);
            }else{
                // or add next fruit
		        this.addFurit(saveX, saveY, frame);
            }
        // update score + frame number(fruit number)and call 'updateScore'
		this.score += frame;
		this.updateScore();	

        // play spalsh sound effect
        this.boom.play();
        this.water.play();
      
    }

    // method to bounce back if both fruit are not same
    handleBounce(bodyA, bodyB){
        bodyB.mirrorMovement = bodyA;
    }

    // method to add the new fruit when same fruit got merged
	addFurit(posX, posY, frameNum){
        // adding the fruit to physic world (merged fruits x and y)
        let furit = this.matter.add.sprite(posX, posY, "furits");
        // setting 'fruits' sprite sheet frame number
        furit.setFrame(frameNum);
        // set restitution to player fruits
        furit.setBounce(0.4);
         // set circle size to 100%
        furit.setCircle(100);
        // set velocity to player fruits
        furit.setVelocity(furit.body.velocity.x / 2, furit.body.velocity.y / 2);
        // set width and height to player fruit
		furit.displayWidth = furit.displayHeight = 50 + (frameNum  * (frameNum + 21));
        // add player fruit to the fruit group        
        this.furitGroup.add(furit);

        // emitte when two same fruits merge
        //---------------------------particle emitter-------------------------------\\        
        this.emitter = this.add.particles("particle").createEmitter({
             frame: [frameNum, frameNum - 1],
             scale: { start: frameNum, end: 0 },
             speed: { min: 50, max: 200 },
             active: false,
             lifespan: 300,
             quantity: 50 + (frameNum  * frameNum ),
             alpha: { min: 30, max: 100 }             
         });
        this.emitter.setPosition(posX , posY)
        this.emitter.active = true;    
        this.emitter.setEmitZone({
                type: 'random',
                quantity: 30,
                source: new Phaser.Geom.Circle(0, 0, 25 + (frameNum  * (frameNum + 21)))
            });        
        this.emitter.explode();
        //-------------------------------------------------------------------------------\\        
        
        let tween = this.tweens.add({
		targets: furit,	
        delay: 100,		
		scale:  { start: 0, to: furit.scale},
		ease: 'Back.easeOut',  
		duration: 100
		}); 
       
    }

    //method to add watermelon(final big fruit) and update watermelon
    addWaterMelon(posX, posY, frameNum, isMoving){
         // play new level sound effect
        this.newLevel.play();
        let waterMelon = this.add.sprite(posX, posY, "furits");
		waterMelon.setFrame(11);
        waterMelon.displayWidth = waterMelon.displayHeight = 50 + (11  * (11 + 21));
        let tween = this.tweens.add({
            targets: waterMelon,
            delay: 3000,
            x: game.config.width - 35,
            y: 35,
            scale:  { start: waterMelon.scale, to: 0.25},
            ease: 'Linear',       
            duration: 1000                       
            }); 
        // this.waterMelon += 1;
        //this.updateWateMelon();      

    }

    // check if the fruits reached the finish line 
    checkGameOver(bodyA, bodyB){
        //condition to the finish line
        if(bodyA.y - bodyA.displayWidth <= 100 || bodyB.y - bodyB.displayWidth<= 100){
            // call game over function
            this.gameEnd();
            // play game over sound effect    
            this.gameOver.play();
        //condition to alert and show the finish line
        }else if(bodyA.y - bodyA.displayWidth <= 250 || bodyB.y - bodyB.displayWidth<= 250){
            // set finish line visible
            this.borderLine.setVisible(true);
            // play alert sound effect   
            this.alert.play();
        }
        
    }

    
   //method to remove all touch inputs and fruits 
   gameEnd(){
       // disable all touch inputs 
       this.input.enabled = false;
       // timer to remove all fruits one by one with a interval
        this.removeEvent = this.time.addEvent({
            delay: 250,
            callback: this.removeFruits,
            callbackScope: this,
            loop: true
        })

    }
    
    //method to remove all the fruits and restart the game
    removeFruits(){
        console.log('sdfsdf');
       //condition to check if any fruits remain before restart the game
        if(this.furitGroup.getChildren().length > 0){
            //get which fruit by its frame number
            var frameNumber = this.furitGroup.getFirstAlive().frame.name;
            
            
        // emitte on each fruits when game over
        //---------------------------particle emitter-------------------------------\\        
            this.emitter = this.add.particles("particle").createEmitter({
                frame: frameNumber,
                scale: { start: frameNumber, end: 0 },
                speed: { min: 50, max: 200 },
                active: false,
                lifespan: 300,
                quantity: 50 + (frameNumber  * frameNumber ),
                alpha: { min: 30, max: 100 },
                
            });
           this.emitter.setPosition(this.furitGroup.getFirstAlive().x , this.furitGroup.getFirstAlive().y)
           this.emitter.active = true;              
               
               this.emitter.setEmitZone({
                   type: 'random',
                   quantity: 30,
                   source: new Phaser.Geom.Circle(0, 0, 25 + (frameNumber * (frameNumber + 21))),
               });
           
        this.emitter.explode();

        //remove each from fruit from screen after emitte explode
        this.furitGroup.getFirstAlive().destroy();

        //----------------------------------------------------------------------------
        
        }
        //restarting the game
        else{
            //compare the score with the best score saved in local storage 
            //and update the best score to display
            let bestScore = Math.max(this.score, this.savedData.score);
            localStorage.setItem(gameOptions.localStorageName,JSON.stringify({
            score: bestScore
          	}));

            //removing the timer event
            this.removeEvent.remove();
             
            //restarting the game by stating the scene again
            this.scene.start("PlayGame");
        }
        
        
    }
   
//use any where inside a method to pause the game
//this.scene.pause("PlayGame");

//use any where inside a method to resume the game
//this.scene.resume("PlayGame");
    
}

