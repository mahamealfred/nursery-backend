const { model } = require("mongoose");
const User=require("../models/User");

class userController{
    static async signIn(req, res) {
       res.send("Hello from User ")
    }

}
module.exports =userController