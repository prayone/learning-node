1.process.argv:属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。
				第一个元素为process.execPath。如果需要获取argv[0]的值请参见 process.argv0。第二个元素为当前执行的JavaScript文件路径。
2.process.exit();终止程序进程
3.回调函数的设计：
  （1）对于一个函数，如果需要定义回调函数，回调函数一定作为最后一个参数出现：
      eg:function foo(number,agecallback){}
   (2)回调函数的第一个参数默认接受错误信息，第二个参数才是真正的回调函数数据
   	  eg：foo('债小黑',19,function(error,data){
   	  		if(error){
   	  			throw error;
   	  		}else{
   	  			console.log(data)
   	  		}
   	  })
4.node中所有会发生阻塞的操作都是异步的（文件和网络）