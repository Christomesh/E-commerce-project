const User = require("../models/User")
const CustomError = require("../errors")
const {StatusCodes} = require("http-status-codes")
const {createTokenUser, attachCookiesToResponse} = require("../utils")


const getAllUsers = async (req, res) =>{
    const users = await User.find({role:'user'}).select('-password')
    res.status(StatusCodes.OK).json({users})
}

const getSingleUser = async (req, res) => {
    const user = await User.findOne({_id: req.params.id}).select('-password')
    if (!user){
        throw new CustomError.CustomAPIError(`No user with id: ${req.params.id}`)
    }
    res.status(StatusCodes.OK).json({user})
}


const showCurrentUser = async (req, res) =>{
    res.status(StatusCodes.OK).json({user: req.user})
}

const updateUser = async(req, res) =>{
    const {name, email} = req.body;
    if (!name || !email){
        throw new CustomError.BadRequestError("Please provide both values");
    }
    const user = await User.findOne({_id: req.usser.userId});
    user.email = email;
    user.name = name;
    await user.save();

    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({res, user:tokenUser});
    res.status(StatusCodes.Ok).json({user: tokenUser});


}

const updateUserPassword = async (req, res)=>{
    const {oldPassword, newPassword} = req.body;
    if (!oldPassword || !newPassword){
        throw new CustomError.BadRequestError("Please provide both values");
    }
    const user = await User.findOne({_id: req.user.userId});

    isOldPasswordMatch = await user.comparePassword(oldPassword);
    if (!isOldPasswordMatch){
        throw new CustomError.UnauthenticatedError("Invalid credentials");
    }
    user.password = newPassword;
    await user.save();

    res.status(StatusCodes.OK).json({msg:"Success! Password updated!"});
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
}

// Alternative update user with findOneAndUpdate
// const updateUser = async (req, res) => {
//   const { email, name } = req.body;
//   if (!email || !name) {
//     throw new CustomError.BadRequestError('Please provide all values');
//   }
//   const user = await User.findOneAndUpdate(
//     { _id: req.user.userId },
//     { email, name },
//     { new: true, runValidators: true }
//   );
//   const tokenUser = createTokenUser(user);
//   attachCookiesToResponse({ res, user: tokenUser });
//   res.status(StatusCodes.OK).json({ user: tokenUser });
// };