// this page covers the user's report

const express = require('express')
const router = express.Router()
const User = require('../models/report')


router.route('/report').get((req, res)=>{
    res.render('pages/report')
})

module.exports = router