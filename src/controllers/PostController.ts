import Post from "../models/Post";

export default class PostController {
  public static async list(req: any, res: any) {
    const posts = await Post.findAll();
    res.render("post/list", {posts: posts});
  }
}