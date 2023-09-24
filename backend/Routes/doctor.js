import express from "express";
import { FindAllDoctor,updateDoctor,deleteDoctor,findDoctor } from "../Controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router=express.Router();
//nested router
router.use('/:doctorId/reviews',reviewRouter);

router.get("/:id",findDoctor);
router.get("/",FindAllDoctor);
router.delete("/:id",authenticate,restrict(['doctor']),deleteDoctor);
router.put("/:id",authenticate,restrict(['doctor']),updateDoctor);

export default router;