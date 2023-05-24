const express = require('express');
const {singers} = require('./singers.json')
// console.log(singers);

const app = express();

app.get('/singer/:id.html',(req,res)=>{
    let {id} = req.params;
    // 在数组中寻找对应id的数据
    let result = singers.find(item => {
        if (item.id === Number(id)) {
            return true;
        }
    })

    // if (!result) {
    //     res.statusCode = 404;
    //     res.end(`<h1>404 Not Found</h1>`);
    //     return;
    // }
    // console.log(result);
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>姓名：${result.singer_name}</h1>
        <h2>其他名字：${result.other_name}</h2>
        个人照片👇<br><br>
        <img src="${result.singer_pic}">
    </body>
    </html>
    `)
})

app.all('*',(req,res)=>{
    res.statusCode = 404;
    res.end(`<h1>404 Not Found</h1>`)
})

app.listen(9000,()=>{
    console.log('server is ok');
    console.log('url: http://127.0.0.1:9000');
})