var server=require("./sever");
var router=require("./router")
var upload=require("./upload")
var requestHandlers=require("./requestHandlers");

var handle={}
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;


server.start(router.route,handle);
upload.upload();