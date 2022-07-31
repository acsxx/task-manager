const express = require('express')
const router= express.Router()
const {getAllQuestions} = require('../controllers/question')

router.get('/', getAllQuestions)

router.get('/delete', (req,res)=>{
    res.send("Question delete page")
})


module.exports = router
