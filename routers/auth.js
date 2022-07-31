const express = require('express')
const router= express.Router()
const {register,error} = require('../controllers/auth')

router.get('/', (req,res,next)=>{
    res.send("auth home page")
})

router.post('/register', register)
router.get("/error",error)

module.exports = router
