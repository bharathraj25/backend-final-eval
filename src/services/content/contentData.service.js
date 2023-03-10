const db = require('../../../db/models');
const errors = require('../../errors');


const createContentData = async (data, contentId, typeId) => {
  const newContentData = await db.ContentData.create({
    data: data,
    content_id: contentId,
    type_id: typeId,
    include: [
      { model: db.Content, as: 'content' }
    ]
  });
  return newContentData;
};

const updateContentDataById = async (contentId, dataId, data) => {
  const newContentData = await db.ContentData.findByPk(dataId);
  newContentData['data'] = {
    ...newContentData['data'],
    ...data
  };
  newContentData.save();
  return newContentData;
};

const deleteContentDataById = async (contentId, dataId) => {
  const status = await db.ContentData.destroy({
    'where': {
      id: dataId,
      content_id: contentId
    }
  });

  // delete asc as well here
  if (status === 0)
    throw new errors.NotFoundError(`content with ${contentId} has no data with ${dataId} - NOT FOUND.`);

};

module.exports = {
  createContentData,
  updateContentDataById,
  deleteContentDataById
};