const ejs = require('ejs');
const fs = require('fs');

let china = 'China';
let weather = '今天天气不错'
// let str = `I Love You ${china}`
// let str = 'I Love You';

// let str = 'I Love You <%= china %>'
let str = fs.readFileSync('./01_html.html').toString();

// 使用ejs渲染
let result = ejs.render(str,{china: china,weather});

console.log(result);