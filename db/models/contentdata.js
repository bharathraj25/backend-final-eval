'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Content, {
        as: 'content',
        foreignKey: 'content_id'
      });
      this.belongsTo(models.ContentType, {
        as: 'type',
        foreignKey: 'type_id'
      });
    }
  }
  ContentData.init({
    data_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    content_id: {
      type: DataTypes.INTEGER,
      unique: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      unique: true
    },
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentData',
  });
  return ContentData;
};