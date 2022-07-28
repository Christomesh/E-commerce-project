const express = require("express");
const router = express.Router();
const { authenticateUser, authorizePermissions } = require("../middleware/authentication");

const {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,}   = require("../controllers/reviewController");


router.get('/', getAllReviews);
router.get('/:id', getSingleReview);

router.post('/', authenticateUser, createReview);
router.patch('/:id', authenticateUser, updateReview);
router.delete('/:id' , authenticateUser, deleteReview);

module.exports = router;