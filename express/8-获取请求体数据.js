const express = require('express')
const bodyParser = require('body-parser')

const app = express();

// 解析 JSON 格式的请求体的中间件
var jsonParser = bodyParser.json()

// 解析 querystring 格式请求体的中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/login',(req,res) => {
    // res.send('<h1>Home-get</h1>')
    res.sendFile(__dirname+'/8-express获取请求体.html')
    
})

app.post('/login', urlencodedParser, (req,res) => {
    console.log(req.body);
    res.send('<h1>Home-post</h1>')
})

app.listen(9000,() => {
    console.log('Server is Running..');
    console.log('URL:http://127.0.0.1:9000');
})