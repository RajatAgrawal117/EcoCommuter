const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust the path to your User model

const authenticateToken = async (req, res, next) => {
  try {
    // Extracting JWT from request cookies, body, or header
    const token = req.header("Authorization").replace("Bearer ", "");

    // If JWT is missing, return 401 Unauthorized response
    if (!token) {
      return res.status(401).json({ success: false, message: `Token Missing` });
    }

    try {
      // Verifying the JWT using the secret key stored in environment variables
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      // Storing the decoded JWT payload in the request object for further use
      req.user = decode;

      // Check if the user is an admin
      const user = await User.findById(req.user.id);
      if (!user || !user.isAdmin) {
        return res.status(403).json({ success: false, message: "Access denied: Admin privileges required" });
      }
    } catch (error) {
      // If JWT verification fails, return 401 Unauthorized response
      return res.status(401).json({ success: false, message: "token is invalid" });
    }

    // If JWT is valid and user is admin, move on to the next middleware or request handler
    next();
  } catch (error) {
    // If there is an error during the authentication process, return 401 Unauthorized response
    return res.status(401).json({
      success: false,
      message: `Something Went Wrong While Validating the Token`,
    });
  }
};

module.exports = { authenticateToken };
