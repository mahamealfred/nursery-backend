const express = require("express");
const messageController=require("../controllers/messageController");
const router=express.Router()
router.post('/',messageController.addMessage)

module.exports =router