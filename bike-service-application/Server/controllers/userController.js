const userModel=require("../models/userModel");
const {v4: uuidv4}=require('uuid');

exports.getUser=async (req, res) =>
{
    try {
        var userData=await userModel.findOne({userId: req.params.id});
        res.status(200).json({
            status: "Success",
            data: userData
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