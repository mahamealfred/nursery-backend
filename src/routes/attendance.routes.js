const express = require("express");
const attendanceController=require("../controllers/attendanceController");
const verifyToken = require("../middlewares/verifyToken");
const router=express.Router()
router.post('/',attendanceController.addAttendance)
router.get('/',verifyToken,attendanceController.getAttendanceList)
module.exports =router