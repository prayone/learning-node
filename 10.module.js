console.log(module);
const module10=require('./module/module.duixiang.js')
if(module10.parent){
	console.log("当前这个文件是被别的文件加载的！")
} else {
	console.log("当前文件是入口文件！")
}