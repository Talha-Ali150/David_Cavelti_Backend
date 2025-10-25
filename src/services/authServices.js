import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js"
import { generateOtpToken, verifyOtpToken } from "../utils/generateOtpToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import dotenv from "dotenv";
dotenv.config();

export const sendOtpService = async (email) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await sendEmail({
    to: email,
    subject: "Your Signup Verification Code",
    html: `
      <h2>Email Verification</h2>
      <p>Your OTP code is: <strong>${otp}</strong></p>
      <p>This code expires in 5 minutes.</p>
    `,
  });
  const token = generateOtpToken(email, otp);
  return { message: "OTP sent to email", token };
};

export const verifyOtpAndSignupService = async ({ name, email, password, otp, token }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");
  const decoded = verifyOtpToken(token);
  if (!decoded) throw new Error("Invalid or expired token");
  if (decoded.email !== email) throw new Error("Email mismatch");
  if (decoded.otp !== otp) throw new Error("Incorrect OTP");
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  return { id: user._id, name: user.name, email: user.email };
};

export const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error(`Invalid credentials`);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error(`Invalid credentials`);

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

  return { token, user: { id: user._id, name: user.name, role: user.role } }
}

export const forgotPasswordService = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await sendEmail({
    to: email,
    subject: "Your Password Reset OTP",
    html: `
      <h2>Password Reset Request</h2>
      <p>Your OTP code is: <strong>${otp}</strong></p>
      <p>This code expires in 5 minutes.</p>
    `,
  });

  const otpToken = generateOtpToken(email, otp);
  return { message: "OTP sent to email", token: otpToken };
};

export const verifyForgotOtpAndResetService = async ({ email, otp, token, newPassword }) => {
  const decoded = verifyOtpToken(token);
  if (!decoded) throw new Error("Invalid or expired OTP token");
  if (decoded.email !== email) throw new Error("Email mismatch");
  if (decoded.otp !== otp) throw new Error("Incorrect OTP");

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();

  return { message: "Password reset successfully" };
};