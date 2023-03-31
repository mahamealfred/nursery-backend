const express = require("express");
const subjectController=require("../controllers/subjectController");
const router=express.Router()
router.post('/',subjectController.addSubject);
router.get('/',subjectController.getSubjects);
module.exports =router