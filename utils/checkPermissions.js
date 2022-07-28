const CustomError = require("../errors");

const checkPermissions = (requestUser, resourcesUserId) =>{
    if (requestUser.role === 'admin') return;
    if (requestUser.userId === resourcesUserId.toString()) return;
    throw new CustomError.UnauthorizedError("Not authorized to acess the routes");
};

module.exports = checkPermissions;

// Here user can only access his profile with is userId.