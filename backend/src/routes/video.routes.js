import { Router } from "express";
import { addVideo, getAllVideos, getVideoById, deleteVideoById } from "../controller/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/addVideo").post(addVideo);
router.route("/addVideo").get(verifyJWT, addVideo);
router.route("/").get(getAllVideos);
router.route("/id").get(getVideoById);
router.route("/:id").delete(deleteVideoById);

export default router;