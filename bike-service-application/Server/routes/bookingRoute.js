const express=require("express");
const router=express.Router();

const {getBooking, getAllBookings, getUserBookings, bookService, updateSericeStatus}=require("../controllers/bookingController")

router.get("/", getAllBookings);
router.get("/:id", getBooking);
router.get("/user/:id", getUserBookings);
router.post("/", bookService);
router.patch("/:id", updateSericeStatus);

module.exports=router;