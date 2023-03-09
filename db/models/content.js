'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ContentType, {
        as: 'types',
        foreignKey: 'content_id'
      });
      this.hasMany(models.ContentData, {
        as: 'datas',
        foreignKey: 'content_id'
      });
    }
  }
  Content.init({
    content_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    content_name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};