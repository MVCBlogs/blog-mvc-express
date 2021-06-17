import Post from "../models/Post";

export default class PostController {
  public static async list(req: any, res: any) {
    const data: { [key: string]: any } = {};
    data["title"] = "Posts";
    data["description"] = "List of posts";
    data["posts"] = await Post.findAll();
    res.render("post/list", {data: data});
  }

  public static async show(req: any, res: any) {
    const data: { [key: string]: any } = {};
    const post = await Post.findByPk(req.params.postId);
    if(post != null){
      data["title"] = post.getTitle();
      data["description"] = post.getDescription();
      data["post"] = post;
      res.render("post/show", { data: data });
    }else{
      res.redirect('/posts');
    }
  }

  public static async save(req: any, res: any) {
    try {
      await Post.create({ title: req.body.title, description: req.body.description});
      res.redirect('/posts');
    }
    catch (e) {
      console.error('Captured validation error: ', e.errors[0].message);
      res.redirect('/posts');
    }
  }

  public static async saveComment(req: any, res: any) {
    
  }
}