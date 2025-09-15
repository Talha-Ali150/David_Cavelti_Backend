import {
  createOptionService,
  getOptionsService,
  updateOptionService,
  deleteOptionService,
} from "../services/adminOptionService.js";

export const createOptionController = async (req, res, next) => {
  try {
    const optionData = {
      name: req.body.name,
      category: req.body.category,
      imageUrlDisplay: req.files?.imageUrlDisplay?.[0]?.path,
      imageUrlBuild: req.files?.imageUrlBuild?.[0]?.path,
    };

    const option = await createOptionService(optionData);

    res.status(201).json(option);
  } catch (err) {
    console.error("Error in createOptionController:", err);
    next(err);
  }
};


export const getOptionsController = async (req, res, next) => {
  try {
    const { categoryId } = req.query;
    const options = await getOptionsService(categoryId);
    res.json(options);
  } catch (err) {
    next(err);
  }
};

export const updateOptionController = async (req, res, next) => {
  try {
    const option = await updateOptionService(req.params.id, req.body);
    res.json(option);
  } catch (err) {
    next(err);
  }
};

export const deleteOptionController = async (req, res, next) => {
  try {
    await deleteOptionService(req.params.id);
    res.json({ message: "Option deleted" });
  } catch (err) {
    next(err);
  }
};