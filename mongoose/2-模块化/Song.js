const db = require('./db/db')
const mongoose = require('mongoose')
const SongModel = require('./models/SongModel')

db(()=>{
    SongModel.create({
        title:'小明',
        name:'小子'
    },(err,data)=>{
        if (err) {
            console.log(err);
            return;
        }else{
            console.log(data);
        }
    })
})

