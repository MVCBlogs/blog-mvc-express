export default class HomeController {
  public static index(req: any, res: any) {
    res.render("home/index");
  }

  public static about(req: any, res: any) {
    res.render("home/about");
  }
}