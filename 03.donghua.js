var frames = [];          //定义数组，赋值4个文字图片
frames[frames.length] = `
╭~~~╮
(o^.^o)
`;
frames[frames.length] = `
╭~~~╮
(o~.~o)
`;
frames[frames.length] = `
╭~~~╮
(o@.@o)
`;
frames[frames.length] = `
╭ ﹌╮
(o'.'o)
`;
var fps = 10;
// 当前显示哪一帧
var current = 0;
var render = () => {
  // 将当前控制台清空
  process.stdout.write('\033[2J');
  process.stdout.write('\033[0f');

  // 输出新的内容
  if (current === frames.length) { current = 0; } //current=4重置
  process.stdout.write(frames[current++]);
};
setInterval(render, 1000 / fps);
