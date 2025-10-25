import express from "express";
import { forgotPasswordController, login, sendOtpController, verifyForgotOtpAndResetController, verifyOtpAndSignupController } from "../controllers/authController.js";

const router = express.Router();

router.post(`/login`, login);
router.post("/send-otp", sendOtpController);
router.post("/verify-otp", verifyOtpAndSignupController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", verifyForgotOtpAndResetController);

export default router;