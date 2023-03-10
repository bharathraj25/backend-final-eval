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
  await newContentData.save();
  return newContentData;
};

const deleteTypeObjectValueFromData = async (contentId, prevTypeName, newTypeName) => {
  const allContentData = await db.ContentData.findAll({
    'where': {
      content_id: contentId
    }
  });

  const updateDataPromise = allContentData.map(async data => {
    const updateData = data['data'];
    console.log(updateData, prevTypeName, newTypeName);
    if (prevTypeName) delete updateData[prevTypeName];
    if (newTypeName) updateData[newTypeName] = data.data[prevTypeName];
    console.log(updateData);
    data.data = updateData;
    await data.save();
  });

  await Promise.all(updateDataPromise);

  return allContentData;
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
  deleteContentDataById,
  deleteTypeObjectValueFromData
};