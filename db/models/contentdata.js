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
        foreignKey: 'id'
      });
    }
  }
  ContentData.init({
    content_id: {
      type: DataTypes.INTEGER,
    },
    data: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("data"));
      },
      set: function (value) {
        return this.setDataValue("data", JSON.stringify(value));
      }
    },
  }, {
    sequelize,
    modelName: 'ContentData',
  });
  return ContentData;
};