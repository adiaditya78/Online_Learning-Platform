import { Router } from "express";
import addCourse from "../controller/course.controller.js";

const router = Router();
router.route("/addCourse").post(addCourse);
export default router;
