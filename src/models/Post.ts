import { Model, Optional, DataTypes } from "sequelize";

interface PostAttributes {
  id: number;
  title: string;
  description: string | null;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

export default class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public description!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getTitle(): string{
    return this.title;
  }

  public getCreatedAt(): Date{
    return this.createdAt;
  }

  public static initializeModel(sequelize:any){
    Post.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        description: {
          type: new DataTypes.STRING(128),
          allowNull: true,
        },
      },
      {
        tableName: "posts",
        sequelize, 
      }
    );
  }
}