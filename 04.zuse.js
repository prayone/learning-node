1.执行的顺序变了
console.time("main")
setTimeout(()=>{
	for(var i=0;i<100000000;i++){  };
		console.log("循环完了")
},0)
console.timeEnd("main")
console.log("结束")
2.callback约定将错误信息作为回掉函数的第一个参数
