const express = require("express");
const userRoute=require("./auth.routes.js")
const authRoute=require("./auth.routes.js")
const teacherRoute=require('./teacher.routes');
const classRoute=require('./class.routes');
const parentRoute=require('./parent.routes');
const messageRoute=require('./message.routes');
const router=express.Router()

router.use('/api/authentication',authRoute)
router.use('/api/users',userRoute)
router.use('/api/teachers',teacherRoute)
router.use('/api/classes',classRoute)
router.use('/api/parents',parentRoute)
router.use('/api/messages',messageRoute)

module.exports =router