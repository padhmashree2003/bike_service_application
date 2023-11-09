const express=require("express");
const router=express.Router();

const {getAllServices, addBikeService}=require("../controllers/serviceController")

router.get("/", getAllServices);
router.post("/", addBikeService);

module.exports=router;