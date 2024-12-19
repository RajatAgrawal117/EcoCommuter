//../routes/user.js
const express = require("express")
const router = express.Router()
const { signup, login } = require("../controllers/Auth")
const UserController = require('../controllers/UserController');
const { authenticateToken } = require('../middleware/authMiddleware');
// user routes of login and signup


router.post("/auth/signup", signup)
router.post("/auth/login", login)
router.get('/points', authenticateToken, UserController.getUserPoints);

// Update user points
router.put('/points', authenticateToken, UserController.updateUserPoints);
router.post('/points', authenticateToken, UserController.createOrUpdatePoints);

module.exports = router