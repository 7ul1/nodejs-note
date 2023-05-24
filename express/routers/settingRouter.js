const express = require('express')


const router = express.Router();
 
router.get('/setting', (request,response)=>{
    response.send('<h1>设置页面</h1>')
})

module.exports = router;