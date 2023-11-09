const bookingModel=require("../models/bookingModel");
const userModel=require("../models/userModel");
const {v4: uuidv4}=require('uuid');
const {sendMailForServiceStatus}=require("./mailController");

exports.getBooking=async (req, res) =>
{
    try {
        const bookingData = await bookingModel.find({bookingId: req.params.id})

        res.status(200).json({
            status: "Success",
            data: bookingData
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "Failed 😥",
            error: error
        });
    }
}

exports.getUserBookings=async (req, res) =>
{
    try {
        const bookingsData = await bookingModel.find({userId: req.params.id})

        res.status(200).json({
            status: `Get all bookings by user ${req.params.id} done`,
            data: bookingsData
        })
    }
    catch(error) {
        console.log(error)
        res.status(402).json({
            status: "Error",
            error: {error}
        });
    }
}

exports.getAllBookings=async (req, res) =>
{
    try {
        var bookings=await bookingModel.find({}).sort()

        res.status(200).json({
            status: "Get all bookings done",
            data: bookings
        })
    }
    catch(error) {
        console.log(error)
        res.status(402).json({
            status: "Error",
            error: {error}
        });
    }
}

exports.bookService=async (req, res) =>
{
    const data=req.body
    try {
        data.bookingId=uuidv4()
        data.bookingStatus='service booked'
        data.dateOfBooking=new Date()
        const newBooking=new bookingModel(data);
        await newBooking.save()

        const user=await userModel.find({userId: data.userId})

        sendMailForServiceStatus(data.userEmail, 'Service booking in Johns Garage 🏍', `Service booked\n\nYou have booked a service for ${data.bikeModel} with number ${data.bikeNumber} is Successfully Booked  `)
        console.log("email sent")
        res.status(200).json({
            message: "Booking added successfully 😌",
            data: data
        })
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}

exports.updateSericeStatus=async (req, res) =>
{
    const data=req.body
    try {

        await bookingModel.updateOne({bookingId: req.params.id}, data, {upsert: true})

        const user=await userModel.find({userId: data.userId})

        // sendMailForServiceStatus(user.mailId, 'Service booking in Johns Garage 🏍', data.bookingStatus)

        res.status(200).json({
            message: "Booking data updated successfully 😌",
            data: data
        })
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}