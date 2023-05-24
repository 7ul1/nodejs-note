const mongoose = require('mongoose')

// 创建文档的结构对象
let BookSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number
})

// 创建模型对象 
let BookModel = mongoose.model('books',BookSchema);

module.exports = BookModel;