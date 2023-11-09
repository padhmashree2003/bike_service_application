const {default: mongoose}=require("mongoose");

const userSchema=mongoose.Schema({
    userId: {type: String, require},
    userName: {type: String, require},
    passWord: {type: String, require},
    mailId: {type: String, require},
    mobileNo: {type: String, require},
    isAdmin: {type: Boolean, require, default: false}
}, {
    timestamps: true,
})

module.exports=mongoose.model("Users", userSchema);
