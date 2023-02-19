const { model } = require("mongoose");
const User=require("../models/User");

class userController{
    static async createUser(req, res) {
       res.send("Hello wolrd")
    }

}
module.exports =userController