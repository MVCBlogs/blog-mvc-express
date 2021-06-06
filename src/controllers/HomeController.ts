export default class HomeController {
  public static index(req: any, res: any) {
    const data: { [key: string]: any } = {};
    data["title"] = "Blog - Express";
    data["description"] = "A clean blog with an MVC architecture in Express";
    res.render("home/index", {data: data});
  }

  public static about(req: any, res: any) {
    const data: { [key: string]: any } = {};
    data["title"] = "About us";
    data["description"] = "Information about the developers of this application";
    res.render("home/about", {data: data});
  }
}