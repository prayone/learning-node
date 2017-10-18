var fs=require('fs');
fs.readFile('./01.js','utf8',(err,data)=>{
	if(err)
		throw err;
	console.log(data)
})