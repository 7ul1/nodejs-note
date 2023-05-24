
module.exports = function(success,error){

    if (typeof error !== 'function') {
        error = () => {
            console.log('失败了');
        }
    }
    const mongoose = require('mongoose')
    //导入配置文件
    const {DBHOST,DBPORT,DBNAME} = require('../config/config.js')

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    mongoose.connection.once('open',()=>{
        success()
    })

    mongoose.connection.on('error',() => {
        error()
    })

    mongoose.connection.on('close',()=>{
        console.log('连接关闭');
    })
}