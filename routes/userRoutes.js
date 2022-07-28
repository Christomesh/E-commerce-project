const express = require('express')
const router = express.Router()

const {
        getAllUsers,
        getSingleUser,
        showCurrentUser,
        updateUser,
        updateUserPassword,
        } = require("../controllers/userController")
const {authenticateUser, authorizePermissions} = require('../middleware/authentication')

router.get('/', authenticateUser, authorizePermissions('admin'), getAllUsers)

router.get('/showMe',showCurrentUser)

router.patch('/updateUser', updateUser)
router.patch('/updateUserPassword', updateUserPassword)

router.get('/:id', authenticateUser, authorizePermissions('admin'), getSingleUser)

module.exports = router