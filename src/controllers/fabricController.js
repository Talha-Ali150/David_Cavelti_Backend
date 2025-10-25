import * as fabricService from "../services/fabricService.js";

export const getAllFabrics = async (req, res) => {
  try {
    const fabrics = await fabricService.getFabrics();
    res.json(fabrics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFabric = async (req, res) => {
  try {
    const fabric = await fabricService.getFabricById(req.params.id);
    if (!fabric) return res.status(404).json({ error: "Fabric not found" });
    res.json(fabric);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
