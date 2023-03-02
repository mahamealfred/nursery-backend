const express = require("express");
const studentController=require("../controllers/studentController");
const router=express.Router()
router.post('/',studentController.addStudent)
router.get('/',studentController.getStudents)

module.exports =router