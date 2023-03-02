const { model } = require("mongoose");
const Parent=require("../models/Parent");

class parentController{
    static async createUser(req, res) {
       res.send("Hello wolrd from")
    }

}
module.exports =parentController