import { registerUser, loginUser, logoutUser, getCurrentUser } from "../controller/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import { Router } from "express";
const router = Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);

export default router;