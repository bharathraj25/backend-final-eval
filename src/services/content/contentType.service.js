const db = require('../../../db/models');
const errors = require('../../errors');
const contentDataServices = require('./contentData.service');

// const getAllContentTypes = async (contentId) => {
//   const types = await db.ContentType.findAll({
//     'where': {
//       'content_id': contentId
//     }
//   });
//   return types;
// };

const createContentType = async (type, contentId) => {
  const newContentType = await db.ContentType.create({
    ...type,
    content_id: contentId
  });
  return newContentType;
};

const updateContentTypeById = async (contentId, typeId, type) => {
  const newContentType = await db.ContentType.findByPk(typeId);

  await contentDataServices.deleteTypeObjectValueFromData(contentId, newContentType['type_name'], type['type_name']);

  for (const key in type) {
    newContentType[key] = type[key];
  }
  await newContentType.save();
  return newContentType;
};

const deleteContentTypeById = async (contentId, typeId) => {

  const contentType = await db.ContentType.findByPk(typeId);
  const status = await db.ContentType.destroy({
    'where': {
      id: typeId,
      content_id: contentId
    }
  });

  await contentDataServices.deleteTypeObjectValueFromData(contentId, contentType['type_name']);
  if (status === 0)
    throw new errors.NotFoundError(`content with ${contentId} has no type with ${typeId} - NOT FOUND.`);
};

module.exports = {
  // getAllContentTypes,
  createContentType,
  updateContentTypeById,
  deleteContentTypeById
};