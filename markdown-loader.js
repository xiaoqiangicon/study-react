const marked = require('marked');

module.exports = source => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  // console.log(source)
  // 返回值就是最终被打包的内容,管道结束后的结果必须是一段标准的js代码字符串
  // return 'console.log("hello loader ~")';

  const html = marked(source);
  return html;
}