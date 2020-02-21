// this page covers the user registrations

const express = require('express')
const router = express.Router()
const User = require('../models/register')


router.route('/register').get((req, res)=>{
    res.render('pages/register')
})

module.exports = router