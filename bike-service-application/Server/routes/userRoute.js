const express=require("express");
const router=express.Router();

const {login, signup}=require("../controllers/authController");
const {getUser}=require("../controllers/userController");

router.post("/login", login);   
router.post("/signup", signup);
router.get("/:id", getUser);

module.exports=router;