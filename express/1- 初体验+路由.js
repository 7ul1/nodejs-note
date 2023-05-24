// 1. 导入 express
const { response } = require('express');
const express = require('express')

// 2. 创建应用对象
const app = express();

// 3. 创建路由
app.get('/home',(request,response)=>{
    response.end('Home')
})

app.post('/reg',(request,response)=>{
    response.end('注册')
})

app.all('/home',(request,response)=>{
    response.end('Home')
})

app.all('*',(request,response)=>{
    response.end('Home')
})
 
app.listen(9000,()=>{
    console.log('OK');
})