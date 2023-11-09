const {default: mongoose}=require("mongoose");

const serviceSchema=mongoose.Schema({
    serviceId: {type: String, require},
    serviceName: {type: String, require},
    serviceCharge: {type: Number, require},
    serviceDescription: {type: String, require},
    serviceDuration: {type: Number, require},
    serviceOffers: {type: String, require}
}, {
    timestamps: true,
})

module.exports=mongoose.model("services", serviceSchema);
