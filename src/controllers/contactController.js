import { sendContactMessageService } from "../services/contactService.js";

export const contactUsController = async (req, res, next) => {
  try {
    const result = await sendContactMessageService(req.body);
    res.json(result);
  } catch (err) {
    next(err)
  }
};
