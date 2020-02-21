const express = require('express')
const router = express.Router()

router.route('/').get((req, res)=>{
    res.render('pages/index')
})
router.route('/about').get((req, res)=>{
    res.render('pages/about')
})
router.route('/adminDash').get((req,res)=>{
    res.render('pages/adminDash')
})
router.route('/contact').get((req,res)=>{
    res.render('pages/contact')
})
router.route('/login').get((req, res)=>(
    res.render('pages/login')
))
router.route('/register').get((req, res)=>{
    res.render('pages/register')
})
router.route('/report').get((req, res)=>{
    res.render('pages/report')
})
router.route('/users').get((req, res)=>{
    res.render('pages/users')
})



module.exports = router
