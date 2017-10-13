function foo(name,age,callback){ 
	if(name&&age){
		callback("信息完整！")
	}else{
		if(name){
			console.log("没有填写年龄")
		}else{
			console.log("没有填写名字")
		}
	}
	
}

foo('dd',22,function(data){
   	  	console.log(data)
   	  })
//信息完整