const express = require("express");
const parentController=require("../controllers/parentController");
const router=express.Router()
router.post('/',parentController.addParent)

module.exports =router