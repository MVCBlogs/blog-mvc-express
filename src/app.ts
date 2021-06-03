import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { sequelize, initializeSequelize } from './db/sequelize';
import router from './routes/index';

const port = 8000;
const app = express();
app.use(express.static('public'));
app.use(expressEjsLayouts);
app.set('layout', 'layouts/master');
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
initializeSequelize(sequelize);

app.use('/', router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${ port }`);
});