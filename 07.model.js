
'use strict';
const	args=process.argv.slice(2);
if(args.length!==3){
	console.log("参数不合法！")
	throw new Error("参数不合法！")
}

let para1=args[0];
let operator=args[1];
let para2=args[2];

// let result=eval(`${para1} ${operator} ${para2}`);
// console.log(result)
//模块化的使用
const calc=require('./module/calculator.js')


let result;
switch(operator){
	case '+':
		result=calc.add(para1,para2);
		break;
	case '-':
		result=calc.subtract(para1,para2);
		break; 
	case '*':
	case '×':
		result=calc.mutiply(para1,para2);
		break;
	case '/':
	case '÷':
		result=calc.divide(para1,para2);
		break;
	default:
		throw new Error("不被支持的操作符"+operator)

}
console.log(result)