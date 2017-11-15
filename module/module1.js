//获取当前脚本所在路径
console.log(__dirname)
//所在文件件的位置
console.log(__filename)


const fs=require('fs');
//所有文件操作都必须是绝对路径
fs.readFile(__dirname+'/./bar.js','utf8',(error,content)=>{
	if(error){
		throw error
	}
	console.log(content)
})