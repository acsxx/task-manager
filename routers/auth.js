const express = require('express')
const router= express.Router()
const {register} = require('../controllers/auth')

router.get('/', (req,res,next)=>{
    res.send("auth home page")
})

router.post('/register', register)


module.exports = router
