import express from "express";
import { getAllReviews,CreateReview } from "../Controllers/reviewController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";


const router=express.Router({mergeParams:true});

router.route("/").get(getAllReviews).post(authenticate,restrict(['patient']),CreateReview);

export default router;