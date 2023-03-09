const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")


router.post("/signUp",userController.signUp)

// router.get("/logIn",userController.logIn)


router.all("/*", function (req, res) {
    res.status(404).send({status: false,message: "Path Not Found"})
})

module.exports=router