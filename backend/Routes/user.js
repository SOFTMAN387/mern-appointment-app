import express from "express";
import { FindAllUser,updateUser,deleteUser,findUser,findUserProfile,getMyAppointment } from "../Controllers/userController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
const router=express.Router();


router.get("/:id",authenticate,restrict(['patient']),findUser);
router.get("/",authenticate,restrict(['admin']),FindAllUser);
router.delete("/:id",authenticate,restrict(['patient']),deleteUser);
router.get("/profile/me",authenticate,restrict(['patient']),findUserProfile);
router.get("/appointments/my-appointment",authenticate,restrict(['patient']),getMyAppointment);
router.put("/:id",authenticate,restrict(['patient']),updateUser);

export default router;