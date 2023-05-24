var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/port',(req,res)=>{
  res.render('port');
})

router.post('/port',(req,res)=>{
  // 创建form表单对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions:true,
    
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);
    // console.log(files);
    // res.json({ fields, files });

    // /images/00ee3ef054d1a954bb2c09700.png
    // 服务器保存该图片的访问url
    let url = '/images/' + files.port.newFilename


    res.send(url)
  });
})

module.exports = router;
