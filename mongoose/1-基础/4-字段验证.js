const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open',()=>{
    // 创建文档的结构对象
    let BookSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        author:{
            type:String,
            // default:'匿名'
            
        },
        price:Number
    })

    // 创建模型对象 
    let BookModel = mongoose.model('books',BookSchema);

    // 新增
    BookModel.create({
        name:'夏明',
        author:'TOM',
        price:10
    },(err,data)=>{
        if (err) {
            // console.log(err);
            console.log('插入失败');
            return;
        }else{
            console.log(data);
        }
        // 关闭数据库连接(项目运行过程中，不会添加该代码)
        mongoose.disconnect();
    })
})

mongoose.connection.on('error',() => {
    console.log('连接失败');
})

mongoose.connection.on('close',()=>{
    console.log('连接关闭');
})