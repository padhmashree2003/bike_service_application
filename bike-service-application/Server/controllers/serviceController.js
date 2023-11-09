const serviceModel = require("../models/serviceModel");

exports.addBikeService = async (req, res) =>
{
    const data=req.body
    try {
        const newService=new serviceModel(data);
        await newService.save()

        res.status(200).json({
            message: "New service added successfully 😌",
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

exports.getAllServices=async (req, res) =>
{
    try {
        var servicesData=await serviceModel.find({})

        res.status(200).json({
            status: "Get all services done",
            data: servicesData
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