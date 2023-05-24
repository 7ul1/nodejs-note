const ejs = require('ejs');
const fs = require('fs');
const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];

// let str = '<ul>'
// xiyou.forEach(i => {
//     str += `<li>${i}</li>`
// })
// str += '</ul>'
// console.log(str);

// ejs列表渲染实现
let html = fs.readFileSync('./02_xiyou.html').toString();

let result = ejs.render(html,{xiyou});

console.log(result);