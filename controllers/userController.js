
const getAllUsers = async (req, res) =>{
    res.send("Get All users")
}

const getSingleUser = async (req, res) => {
    res.send("Get Single User")
}

const showCurrentUser = async (req, res) =>{
    res.send("Show cuurent user")
}

const updateUser = async(req, res) =>{
    res.send("Update User")
}

const updateUserPassword = async (req, res)=>{
    res.send("Update user password")
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
}