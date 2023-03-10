'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentType extends Model {
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
  ContentType.init({
    content_id: {
      type: DataTypes.INTEGER,
    },
    type_name: {
      type: DataTypes.STRING,
      unique: true
    },
    data_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentType',
  });
  return ContentType;
};