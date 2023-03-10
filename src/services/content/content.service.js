const db = require('../../../db/models');
const { HttpError } = require('../../errors');

const getAllContents = async (email) => {
  const data = await db.Content.findAll({
    'where': {
      user_email: email
    },
    order: [
      ['id', 'ASC'],
      ['types', 'id', 'ASC'],
      ['datas', 'id', 'ASC'],
    ],
    include: [
      { model: db.ContentType, as: 'types' },
      { model: db.ContentData, as: 'datas' }
    ]
  });
  return data;
};

const createContent = async (contentName, email) => {
  const newContent = await db.Content.create({
    content_name: contentName,
    user_email: email
  });
  return newContent;
};

const updateContentNameById = async (contentId, contentName, email) => {
  const newContent = await db.Content.findByPk(contentId);
  if (newContent.user_email !== email) {
    throw new HttpError(403, `content with contentId: ${contentId} - Not Accessable.`);
  }
  newContent['content_name'] = contentName;
  newContent.save();
  return newContent;
};

// const deleteContentById = async (contentId, email) => {
//   // delete all instances of contentData and contentType
//   // added onDelete: 'cascade' to models/content.js

//   const status = await db.Content.destroy({
//     'where': {
//       'id': contentId,
//       'user_email': email
//     }
//   });

//   if (status === 0)
//     throw new NotFoundError(`content with ${contentId} not found.`);
// };

module.exports = {
  getAllContents,
  createContent,
  updateContentNameById,
  // deleteContentById
};