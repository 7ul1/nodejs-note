const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open',()=>{
    // 创建文档的结构对象
    let BookSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:Number,
        is_hot:Boolean,
        team:Array,
        time:Date,
        list:Buffer,
        Mixed:mongoose.Schema.Types.Mixed,
        ObjectId:mongoose.Schema.Types.ObjectId,
        Decimal128:mongoose.Schema.Types.Decimal128
    })

    // 创建模型对象 
    let BookModel = mongoose.model('books',BookSchema);

    // 新增
    BookModel.create({
        name:'骆驼祥子',
        author:'小明',
        price:114514,
        is_hot:true,
        team:['王梓','小米','开心麻花'],
        time:new Date(),
        Mixed:123,
        ObjectId:123,
        Decimal128:123
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
})

mongoose.connection.on('error',() => {
    console.log('连接失败');
})

mongoose.connection.on('close',()=>{
    console.log('连接关闭');
})