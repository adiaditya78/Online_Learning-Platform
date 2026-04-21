import { Router } from "express";
import { enrollUser, getUserEnrollments, updateProgress } from "../controller/enrollment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT); // Secure all enrollment routes

router.route("/").post(enrollUser).get(getUserEnrollments);
router.route("/:enrollmentId").patch(updateProgress);

export default router;
