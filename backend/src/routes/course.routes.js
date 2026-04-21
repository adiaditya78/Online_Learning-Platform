import { Router } from "express";
import addCourse from "../controller/course.controller.js";
import { addCourse, getAllCourses, getCourseById } from "../controller/course.controller.js";
import { verify } from "jsonwebtoken";

const router = Router();
router.route("/addCourse").post(addCourse);
router.route("/addCourse").get(verify, addCourse),
router.route("/").get(getAllCourses)
router.route("/id").get(getCourseById)

export default router;