const express = require('express')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')

const app = express();
// 1. 设置模板引擎
app.set('view engine','ejs');

// 2. 设置模板文件的存放位置
// 模板文件是具备模板语法的文件
app.set('views',path.resolve(__dirname,'./views'));

app.get('/home',(req,res)=>{
    let title = '尚硅谷-让天下没有难学的技术'
    res.render('home',{title});
})

app.listen(9000,()=>{
    console.log('Server is Running..');
    console.log('URL:http://127.0.0.1:9000');
})