import { Router } from "express";
import { addCourse, getAllCourses, getCourseById } from "../controller/course.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/addCourse").post(addCourse);
router.route("/addCourse").get(verifyJWT, addCourse),
router.route("/").get(getAllCourses)
router.route("/id").get(getCourseById)


export default router;