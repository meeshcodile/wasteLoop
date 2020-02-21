// this page covers the user registrations

const express = require('express')
const router = express.Router()
const User = require('../models/register')


router.route('/register').get((req, res)=>{
    res.render('pages/register')
}).post(async(req, res)=>{
    const {fullname, email, phoneNo, address, psw, cpsw} = req.body
    const reg = new User ({fullname, email, phoneNo, address, psw, cpsw})
    console.log(reg)
})

module.exports = router