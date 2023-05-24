// 导入db
const db = require('./db/db')

// 导入mongoose
const mongoose = require('mongoose')

// 导入BookModel
const BookModel = require('./models/BookModel')

db(()=>{
// 新增
    BookModel.create({
        name:'夏明',
        author:'TOM',
        price:10
    },(err,data)=>{
        if (err) {
            console.log(err);
            return;
        }else{
            console.log(data);
        }
        // 关闭数据库连接(项目运行过程中，不会添加该代码)
        mongoose.disconnect();
    })
});


