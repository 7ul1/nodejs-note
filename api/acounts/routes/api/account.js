var express = require('express');
var router = express.Router();

// 导入moment
const moment = require('moment')
const AccountModel = require('../../models/AccountModel')

// 主页
router.get('/', function(req, res, next) {
  res.send('<h1>主页</h1>');
});

// 渲染列表
router.get('/list', function(req, res, next) {
  // 获取所有账单信息
  // let accounts = db.get('accounts').value();
  // 读取集合信息
  AccountModel.find().sort({time:-1}).exec((err,data)=>{
    if (err) {
      // res.status(500).send('读取失败')
      return res.json({
        code:'1001',
        msg:'读取失败',
        data:null
      })
    }else{
      // res.render('list',{accounts: data,moment});
      res.json({
        // 响应的编号
        // 0 表示成功 非0 表示失败
        code: '0000',
        // code: '20000',

        // 响应字符串
        mas: '读取成功',

        // 响应的数据
        data: data
      })
    }
  })
});

// // 添加记录
// router.get('/list/create', function(req, res, next) {
//   // res.send('<h1>添加记录</h1>');
//   res.render('create');
// });

// 新增记录
router.post('/list',(req,res)=>{
  // 插入数据库
  AccountModel.create({
    ...req.body,
    // 修改time属性的值
    time:moment(req.body.time).toDate()
  },(err,data)=>{
    if (err) {
      // res.status(500).send('插入失败')
      return res.json({
        code:'1002',
        msg:'插入失败',
        data:null
      })
    }
    // 成功提醒
    // res.render('success',{msg:'添加成功',url:'/list'})
    res.json({
      code:'0000',
      msg:'插入成功',
      data:data
    })
  })

})

// 删除记录
router.delete('/list/:id',(req,res)=>{
  // 获取params的id参数
  let id = req.params.id;
  // 删除
  AccountModel.deleteOne({
    _id:id,
  },(err,data)=>{
    if (err) {
      // res.status(500).send('删除失败')
      return res.json({
        code:'1003',
        msg:'删除成功',
        data:null
      })
    }else{
      // res.render('success',{msg:'删除成功',url:'/list'})
      res.json({
        code:'0000',
        msg:'删除成功',
        data:null
      })
    }
  })
})

// 获取单个账单
router.get('/list/:id',(req,res)=>{
  let { id } = req.params;
  AccountModel.findById(id,(err,data)=>{
    if (err) {
      return res.json({
        code:'1004',
        msg:'获取单个失败',
        data:null
      })
    }else{
      res.json({
        code:'0000',
        msg:'获取单个成功',
        data:data
      })
    }
  })
})

// 更新单个账单信息
router.patch('/list/:id',(req,res)=>{
  let { id } = req.params;
  AccountModel.updateOne({_id:id},req.body,(err,data)=>{
    if (err) {
      return res.json({
        code:'1005',
        msg:'更新失败',
        data:null
      })
    }else{
      AccountModel.findById(id,(err,data)=>{
        if (err) {
          return res.json({
            code:'1004',
            msg:'读取失败',
            data:null
          })
        }else{
          res.json({
            code:'0000',
            msg:'更新成功',
            data:data
          })
        }
      })
    }
  })
})

// 其余404
router.all('*', function(req, res, next) {
  res.status = 404;
  res.send('<h1>404 NOT FOUND</h1>')  
});

module.exports = router;