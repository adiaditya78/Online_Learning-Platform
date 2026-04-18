import { registerUser, loginUser } from "../controller/user.controller.js";

import { Router } from "express";
const router = Router();

router.route("/signup").post(registerUser);
router.route("/signin").post(loginUser);
export default router;