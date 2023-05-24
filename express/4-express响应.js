// 1. 导入 express
const express = require('express')

// 2. 创建应用对象
const app = express();

// 3. 创建路由
app.get('/no',(request,response)=>{

    // 重定向
    // response.redirect('http://www.baidu.com')
    // 下载响应
    // response.download( __dirname +'/package.json' )
    // json响应
    // response.json({
    //     name:'Tom',
    //     age:19
    // })
    // 响应文件内容
    response.sendFile(__dirname + '/demo.html')
})

app.listen(9000,()=>{
    console.log('OK');
})