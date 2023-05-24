// 导入 express
const express = require('express')

// 创建应用对象
const app = express();

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));

// 创建路由
app.get('/home',(request,response)=>{
    response.end('Home');
})
 
// 监听端口 服务启动
app.listen(9000,()=>{
    console.log('OK');
    console.log('URL:http://127.0.0.1:9000');
})