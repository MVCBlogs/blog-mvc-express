import express from "express";
import HomeController from '../controllers/HomeController';
import PostController from '../controllers/PostController';

const router = express.Router();

router.get("/", HomeController.index);
router.get("/about", HomeController.about);
router.get("/posts", PostController.list);
router.get("/posts/:postId", PostController.show);
router.post("/posts/save", PostController.save);
router.post("/posts/saveComment", PostController.saveComment);
router.post("/posts/deleteComment/:commentId", PostController.deleteComment);

export default router;