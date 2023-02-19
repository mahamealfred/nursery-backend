const express = require("express");
const userRoute=require("./auth.routes.js")
const authRoute=require("./auth.routes.js")
const router=express.Router()

router.use('/api/authentication',authRoute)
router.use('/api/users',userRoute)

module.exports =router