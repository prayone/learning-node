// var argv=process.argv;
// console.log(argv)


// process.argv.forEach((val,index)=>{
// 	console.log(`${index}:${val}`);
// })

// var argvs=process.argv.slice(2);
// switch(argvs[0]){
// 	case 'init':
// 		console.log('init');
// 		break;
// 	case 'install':
// 		console.log('安装bootstrap')
// 		break;
// 	case 'uninstall':
// 		console.log('卸载bootstrap')
// 		break;

// }

var argv=process.env;
console.log(argv)