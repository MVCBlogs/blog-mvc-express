import Post from "../models/Post";

export default class PostController {
  public static async list(req: any, res: any) {
    const data: { [key: string]: any } = {};
    data["title"] = "Posts";
    data["description"] = "List of posts";
    data["posts"] = await Post.findAll();
    res.render("post/list", {data: data});
  }


  public static async save(req: any, res: any) {
    
  }
}