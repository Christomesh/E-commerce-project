const express = require("express");
const router = express.Router();

const {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,}  = require("../controllers/orderController");
const { authenticateUser, authorizePermissions } = require("../middleware/authentication");

router.post('/', authenticateUser, createOrder);
router.get('/', authenticateUser, authorizePermissions('admin'), getAllOrders);

router.get('/showAllMyOrders', authenticateUser, getCurrentUserOrders);
// get single order must be place bellow cos showAllMyOrders will be treated as id
router.get('/:id',authenticateUser, getSingleOrder);
router.get('/:id',authenticateUser, getSingleOrder);
router.patch('/:id', authenticateUser, updateOrder);

module.exports = router;