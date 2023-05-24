//导入 express
const express = require('express')
const fs = require('fs')
const path = require('path')

//创建应用对象
const app = express();

// 声明中间件函数
function rmw(request,response,next){
    let {url,ip} = request;
    fs.appendFileSync(path.resolve(__dirname,'./access.log'),`时间:${new Date()}\r\n路径:${url} ip:${ip}\r\n`);
    // 执行后续路由回调
    next();   
}

// 使用中间件函数
app.use(rmw);

//创建路由
app.get('/login',(request,response)=>{
    response.send('<h1>登录页面</h1>')
})

app.get('/admin',(request,response)=>{
    response.send('<h1>后台页面</h1>')
})

app.all('*',(request,response)=>{
    response.statusCode = 404;
    response.send('<h1>404 Not Found</h1>')
})

// 监听端口
app.listen(9000,()=>{
    console.log('Server is listening..');
    console.log('URL:http://127.0.0.1:9000');
})