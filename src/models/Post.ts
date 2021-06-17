import { Model, Optional, DataTypes } from "sequelize";

interface PostAttributes {
  id: number;
  title: string;
  description: string;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

export default class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getId(): number{
    return this.id;
  }

  public setId(id: number){
    this.id = id;
  }

  public getTitle(): string{
    return this.title;
  }

  public setTitle(title: string){
    this.title = title;
  }

  public getDescription(): string{
    return this.description;
  }

  public setDescription(description: string){
    this.description = description;
  }

  public getCreatedAt(): Date{
    return this.createdAt;
  }

  public getUpdatedAt(): Date{
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
          validate: {notEmpty: true},
        },
        description: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          validate: {notEmpty: true},
        },
      },
      {
        tableName: "posts",
        sequelize, 
      }
    );
  }
}