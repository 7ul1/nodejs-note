const db = require('./db/db')

const mongoose = require('mongoose')

const MovieModel = require('./models/MovieModel')

db(()=>{
    MovieModel.create({
        title:'张三李四王五',
        name:'小xiaoxiaoxiaoming'
    },(err,data)=>{
        if (err) {
            return console.log(err)
        }else{
            console.log(data);
        }
    })
})