function route(handle,pathname) {
	// body...
	console.log("About to route a request for-----"+pathname);
	if(typeof handle[pathname]==="function"){
		handle[pathname]();
	} else{
		console.log("NO request handler found for"+pathname);
	}
}
exports.route=route;