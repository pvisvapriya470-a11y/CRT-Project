const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);   // no middleware
// router.get("/profile", authMiddleware, getProfile);  (example protected route)

module.exports = router;