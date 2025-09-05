// import {
//   createGarmentService,
//   getGarmentsService,
//   getGarmentByIdService,
//   updateGarmentService,
//   deleteGarmentService,
// } from "../services/garmentService.js";

// export const createGarment = async (req,res,next) => {
//   try {
//     const garment = await createGarmentService(req.body);
//     res.json(garment);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getGarments = async (req,res,next) => {
//   try {
//     const { page = 1, limit = 10 } = req.query;
//     const garments = await getGarmentsService(Number(page), Number(limit));
//     res.json(garments);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getGarmentById = async (req,res,next) => {
//   try {
//     const garment = await getGarmentByIdService(req.params.id);
//     res.json(garment);
//   } catch (err) {
//     next(err);
//   }
// };

// export const updateGarment = async (req,res,next) => {
//   try {
//     const garment = await updateGarmentService(req.params.id, req.body);
//     res.json(garment);
//   } catch (err) {
//     next(err);
//   }
// };

// export const deleteGarment = async (req,res,next) => {
//   try {
//     await deleteGarmentService(req.params.id);
//     res.json({ message: "Garment deleted" });
//   } catch (err) {
//     next(err);
//   }
// };