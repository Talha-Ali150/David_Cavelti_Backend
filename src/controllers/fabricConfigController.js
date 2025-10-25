import * as fabricConfigService from "../services/fabricConfigService.js";

export const getConfigsForGarment = async (req, res) => {
  try {
    const configs = await fabricConfigService.getConfigsByGarment(req.params.garment);
    res.json(configs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConfigForFabric = async (req, res) => {
  try {
    const config = await fabricConfigService.getConfigByFabric(req.params.fabricId);
    if (!config) return res.status(404).json({ error: "Config not found" });
    res.json(config);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
