// 导入 express
const express = require('express')

// 创建应用对象
const app = express();

app.use((req,res,next)=>{
    // 获取 referer
    let referer = req.get('referer');

    if (referer) {
        let url = new URL(referer)
        let hostname = url.hostname;
        // console.log(hostname);
        if (hostname !== '127.0.0.1') {
            res.status(404).send('<h1>404 NOT FOUND</h1>')
            return;
        }
    }
    next();


})

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