const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(401).json({ msg: "Access Denied. No token provided." });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        
        if (!req.user.isAdmin) {
            return res.status(403).json({ msg: "Access Denied. Admins only." });
        }

        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid Token" });
    }
};

module.exports = authMiddleware;