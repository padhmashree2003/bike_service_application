const userModel=require("../models/userModel");
const {v4: uuidv4}=require('uuid');

exports.signup = async (req, res) =>
{
    const data=req.body;
    try {
        if(req.body.isAdmin) {
            return res.status(401).json({
                status: "error",
                message: "You cannot create a admin account."
            })
        }
        if(data.userName&&data.passWord&&data.mailId&&data.mobileNo) {
            data.userId=uuidv4()
            const newUser=new userModel(data);
            await newUser.save()
            res.status(200).json({
                message: "SignUp done successfully 😌",
                data: data,
            })
        } else {
            res.status(400).json({
                status: "Error",
                error: "Invalid user credentials"
            })
        }
    } catch(error) {
        console.log(error);
        res.status(400).json({
            status: "failed",
            message: error
        });
    }
}

exports.login=async (req, res) =>
{
    const {mailId, passWord}=req.body;
    try {
        if(!mailId||!passWord) {
            res.status(400).json({
                status: "Login Failed !",
                message: "Provide both Mail Id & Password"
            });
        }
        else {
            var userData=await userModel.findOne({mailId: mailId});
            if(userData&&userData.passWord===passWord) {
                res.status(200).json({
                    status: "Login Success",
                    data: userData
                })
            }
            else {
                res.status(400).json({
                    status: "Error",
                    error: "Invalid user credentials"
                });
            }

        }
    }
    catch(error) {
        console.log(error)
        res.status(402).json({
            status: "Error",
            error: {error}
        });
    }

}