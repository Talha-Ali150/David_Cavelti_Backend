import {
  createOptionService,
  getOptionsService,
  getOptionByIdService,
  updateOptionService,
  deleteOptionService,
} from "../services/optionService.js";

export const createOption = async (req, res, next) => {
  try {
    const option = await createOptionService(req.body);
    res.json(option);
  } catch (err) {
    next(err);
  }
};

export const getOptions = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const { categoryId } = req.params;
    const options = await getOptionsService(
      categoryId,
      Number(page),
      Number(limit)
    );
    res.json(options);
  } catch (err) {
    next(err);
  }
};

export const getOptionById = async (req, res, next) => {
  try {
    const option = await getOptionByIdService(req.params.id);
    res.json(option);
  } catch (err) {
    next(err);
  }
};

export const updateOption = async (req, res, next) => {
  try {
    const option = await updateOptionService(req.params.id, req.body);
    res.json(option);
  } catch (err) {
    next(err);
  }
};

export const deleteOption = async (req, res, next) => {
  try {
    await deleteOptionService(req.params.id);
    res.json({ message: "Option deleted" });
  } catch (err) {
    next(err);
  }
};