import jwt from "jsonwebtoken";
// Generate JWT Token
export const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, userName: user.userName, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY }
    );
};
