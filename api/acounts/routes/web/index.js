var express = require('express');
var router = express.Router();

/* // 导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync( __dirname +'/../data/db.json')
// 获取 db 对象
const db = low(adapter)
// 导入shortid
const shortid = require('shortid'); */

// 导入moment
const moment = require('moment')
const AccountModel = require('../../models/AccountModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h1>主页</h1>');
});

router.get('/list', function(req, res, next) {
  // 获取所有账单信息
  // let accounts = db.get('accounts').value();
  // 读取集合信息
  AccountModel.find().sort({time:-1}).exec((err,data)=>{
    if (err) {
      res.status(500).send('读取失败')
      return;
    }else{
      // console.log(data);
      res.render('list',{accounts: data,moment});
    }
  })
});

// 添加记录
router.get('/list/create', function(req, res, next) {
  // res.send('<h1>添加记录</h1>');
  res.render('create');
});

// 新增记录
router.post('/list',(req,res)=>{
  // 插入数据库
  AccountModel.create({
    ...req.body,
    // 修改time属性的值
    time:moment(req.body.time).toDate()
  },(err,data)=>{
    if (err) {
      res.status(500).send('插入失败')
      return;
    }
    // 成功提醒
    res.render('success',{msg:'添加成功',url:'/list'})
  })

})

// 删除记录
router.get('/list/:id',(req,res)=>{
  // 获取params的id参数
  let id = req.params.id;
  // 删除
  AccountModel.deleteOne({
    _id:id,
  },(err,data)=>{
    if (err) {
      res.status(500).send('删除失败')
      return;
    }else{
      res.render('success',{msg:'删除成功',url:'/list'})
    }
  })
})

router.all('*', function(req, res, next) {
  res.status = 404;
  res.send('<h1>404 NOT FOUND</h1>')  
});

module.exports = router;