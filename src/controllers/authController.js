import { forgotPasswordService, loginService, sendOtpService, verifyForgotOtpAndResetService, verifyOtpAndSignupService } from "../services/authServices.js"

export const sendOtpController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await sendOtpService(email);
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};

export const verifyOtpAndSignupController = async (req, res, next) => {
  try {
    const result = await verifyOtpAndSignupService(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};


export const login = async (req, res, next) => {
  try {
    const data = await loginService(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export const forgotPasswordController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await forgotPasswordService(email);
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};

export const verifyForgotOtpAndResetController = async (req, res, next) => {
  try {
    const result = await verifyForgotOtpAndResetService(req.body);
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};