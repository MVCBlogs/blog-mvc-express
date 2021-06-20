import { Sequelize } from 'sequelize';
import Post from "../models/Post";
import Comment from "../models/Comment";

const db = 'blog_express';
const username = 'root';
const password = '';

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

Post.initializeModel(sequelize);
Comment.initializeModel(sequelize);
Post.initializeAssociations();

export async function initializeSequelize(sequelize:any){
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
}