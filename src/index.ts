import express from "express";
import path from "path";
import HomeController from './controllers/HomeController';
import PostController from './controllers/PostController';

const port = 8000;
const app = express();
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

// Routes
app.get("/", HomeController.index);
app.get("/about", HomeController.about);
app.get("/posts", PostController.list);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${ port }`);
});