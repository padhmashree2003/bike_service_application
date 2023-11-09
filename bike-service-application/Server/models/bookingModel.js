const {default: mongoose}=require("mongoose");

const bookingSchema=mongoose.Schema({
    bookingId: {type: String, require},
    userId: {type: String, require},
    serviceId: {type: String, require},
    bookingStatus: {type: String, require},
    bikeNumber: {type: String, require},
    bikeModel: {type: String, require},
    dateOfBooking: {type: String, require},
    dateOfDelivery: {type: String},
    serviceCharge: {type: Number},
    serviceManName: {type: String}
}, {
    timestamps: true,
})

module.exports=mongoose.model("bookings", bookingSchema);
