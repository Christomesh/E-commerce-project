const express = require("express");
const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage,
    }  = require("../controllers/productController");
const { authenticateUser, authorizePermissions } = require("../middleware/authentication");

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/' ,authenticateUser, authorizePermissions('admin'), createProduct);
router.patch('/:id' ,authenticateUser, authorizePermissions('admin'), updateProduct);
router.delete('/:id' ,authenticateUser, authorizePermissions('admin'), deleteProduct);
router.post('/uploadImage' ,authenticateUser, authorizePermissions('admin'), uploadImage)

module.exports = router;