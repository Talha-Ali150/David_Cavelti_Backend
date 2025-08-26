import { loginService, signupService } from "../services/authServices.js"

export const signUp = async (req, res, next) => {
  try {
    const data = await signupService(req.body);
    res.json({ message: `User registered successfully`, user: data });
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