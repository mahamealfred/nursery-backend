const express = require("express");
const classController=require("../controllers/classController");
const router=express.Router()
router.post('/',classController.addClass)
module.exports =router