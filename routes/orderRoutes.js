const express = require("express");
const router = express.Router();

const {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,}  = require("../controllers/orderController");
const { authenticateUser, authorizePermissions } = require("../middleware/authentication");


router.get('/', authenticateUser, authorizePermissions('admin'), getAllOrders);
router.get('/:id' , authenticateUser, getSingleOrder);
router.get('/showAllMyOrders', authenticateUser, getCurrentUserOrders);
router.post('/', authenticateUser, createOrder);
router.patch('/:id', authenticateUser, updateOrder)

module.exports = router;