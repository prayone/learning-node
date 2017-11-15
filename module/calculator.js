//CMD规范

	//在node中使用的是common.js的规范
	function convert(input){
		return parseFloat(input);
	}


	function add(a,b){
		return convert(a)+convert(b);
	}
	function subtract(a,b){
		return convert(a)-convert(b);
	}
	function mutiply(a,b){
		return convert(a)*convert(b);
	}
	function divide(a,b){
		return convert(a)/convert(b);
	}
	//es6中的自定义语法
	module.exports={
		add,subtract,mutiply,divide
	}
