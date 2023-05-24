// 1. 导入 express
const { response } = require('express');
const express = require('express')

// 2. 创建应用对象
const app = express();

// 3. 创建路由
app.get('/:id.html',(request,response)=>{
    // console.log(request.params.id);
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end('商品详情');
})

app.listen(9000,()=>{
    console.log('OK');
    console.log('url:http://127.0.0.1:9000');
})