//导入 express
const express = require('express')

// 引入router
const adminRouter = require('./routers/adminRouter.js')
const settingRouter = require('./routers/settingRouter.js')

//创建应用对象
const app = express();

app.use(adminRouter);
app.use(settingRouter);

//创建路由


app.all('*',(request,response)=>{
    response.statusCode = 404;
    response.send('<h1>404 Not Found</h1>')
})

// 监听端口
app.listen(9000,()=>{
    console.log('Server is listening..');
    console.log('URL:http://127.0.0.1:9000');
})