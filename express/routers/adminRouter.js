const express = require('express')


const router = express.Router();

router.get('/admin', (request,response)=>{
    response.send('<h1>后台页面</h1>')
})

module.exports = router;