import { Model, Optional, DataTypes } from "sequelize";
import Post from "./Post";

interface CommentAttributes {
  id: number;
  message: string;
  post_id: number;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, "id"> {}

export default class Comment extends Model<CommentAttributes, CommentCreationAttributes> implements CommentAttributes {
  public id!: number;
  public message!: string;
  public post_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getId(): number{
    return this.id;
  }

  public setId(id: number){
    this.id = id;
  }

  public getMessage(): string{
    return this.message;
  }

  public setMessage(message: string){
    this.message = message;
  }

  public getPostId(): number{
    return this.post_id;
  }

  public setPostId(post_id: number){
    this.post_id = post_id;
  }

  public getCreatedAt(): Date{
    return this.createdAt;
  }

  public getUpdatedAt(): Date{
    return this.updatedAt;
  }

  public static initializeModel(sequelize:any){
    Comment.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        message: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          validate: {notEmpty: true},
        },
        post_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          validate: {notEmpty: true},
          references: {
            model: Post, 
            key: 'id',
          }
        },
      },
      {
        tableName: "comments",
        sequelize, 
      }
    );
  }
}