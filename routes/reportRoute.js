// this page covers the user's report

const express = require('express')
const router = express.Router()
const newReport = require('../models/report')


router.route('/report').get((req, res)=>{
    res.render('pages/report')
}).post(async(req, res)=>{
    const {reportFullName, reportPhoneNo, reportAddress, reportPickUpDay, reportPickUpTime, reportDetails} = req.body
    const rep = new newReport ({reportFullName, reportPhoneNo, reportAddress, reportPickUpDay, reportPickUpTime, reportDetails})
    console.log(rep)
})

module.exports = router