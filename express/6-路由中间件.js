//导入 express
const express = require('express')

//创建应用对象
const app = express();

let checkrmw = (request,response,next)=>{
    if (request.query.code === '521') {
        next();
    }else{
        response.send('你出错了，滚出去')
    }
}

//创建路由
app.get('/admin', checkrmw, (request,response)=>{
    response.send('<h1>后台页面</h1>')
})

app.get('/setting', checkrmw, (request,response)=>{
    response.send('<h1>设置页面</h1>')
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