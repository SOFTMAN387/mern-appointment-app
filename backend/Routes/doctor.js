import express from "express";
import { FindAllDoctor,updateDoctor,deleteDoctor,findDoctor, findDoctorProfile } from "../Controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router=express.Router();
//nested router
router.use('/:doctorId/reviews',reviewRouter);

router.get("/:id",findDoctor);
router.get("/",FindAllDoctor);
router.delete("/:id",authenticate,restrict(['doctor']),deleteDoctor);
router.get("/profile/me",authenticate,restrict(['doctor']),findDoctorProfile );
router.put("/:id",authenticate,restrict(['doctor']),updateDoctor);

export default router;