const express = require('express')
const router= express.Router()
const {register,getUser} = require('../controllers/auth')
const checkAccess = require('../middlewares/authorization/auth')

router.get('/', (req,res,next)=>{
    res.send("auth home page")
})

router.post('/register', register)
router.get("/profile",checkAccess,getUser)

module.exports = router
