// process.stdout.write("hello")
// console.log("hello")

//  var log=(message)=>{
//  	process.stdout.write(message+'\n');
//  }
// log("helloww")
//模板字符串（可以随便的回车换行）：  ${}里面写变量值，而普通的字符串不用加单引号或者双引号
// var log=(message)=>{
//  	process.stdout.write(`${message}  \n`);
//  }
// log("helloww")

process.stdin.on('data',(data)=>{
	process.stdout.write(data);
})