const fs = require('fs')
const ejs = require('ejs')

let isLogin = true;
let html = fs.readFileSync('./03_demo.html').toString();
let result = ejs.render(html,{isLogin});
console.log(result);