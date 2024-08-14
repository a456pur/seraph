onmessage = function (o) {
    importScripts("classes_server.js");
    eaglercraftServerOpts = o.data;
    main();
};
