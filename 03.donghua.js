//数据里面每个成员就是帧
var arr=[];
arr[arr.length]=` ╭%╮ 
 (@^o^@) (⌒:⌒) 
 (~):(~) (~)v(~) `;
 arr[arr.length]=` ╭%╮ ╭╮ 
 
 (~):(~) (~)v(~) `;
 arr[arr.length]=` ╭╮ ╭'''╮ 
 (@^o^@) (⌒:⌒) 
  `;
 
//当前显示那一阵
var current=0;

var render=()=>{
	process.stdout.write('\033[2J')
	process.stdout.write('\033[0f')
	if(current===arr.length){current=0;}
	process.stdout.write(arr[current++]);
	console.log(current)	
}
setInterval(render,100);

