import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const OTP_SECRET = process.env.JWT_SECRET;

export const generateOtpToken = (email, otp) => {
  return jwt.sign({ email, otp }, OTP_SECRET, { expiresIn: "5m" });
};

export const verifyOtpToken = (token) => {
  try {
    return jwt.verify(token, OTP_SECRET);
  } catch (err) {
    return null;
  }
};
