import express from "express";
import HomeController from '../controllers/HomeController';
import PostController from '../controllers/PostController';

const router = express.Router();

router.get("/", HomeController.index);
router.get("/about", HomeController.about);
router.get("/posts", PostController.list);

export default router;