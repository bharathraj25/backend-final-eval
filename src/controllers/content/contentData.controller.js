const contentDataServices = require('../../services/content/contentData.service');

// const getAllDatasControllerById = async (req, res, next) => {
//   try {
//     const { contentId } = req.query;
//     const result = await contentDataServices.getAllContentDatas(contentId);
//     res.status(200).json(result);
//   } catch (err) {
//     next(err);
//   }
// };

const createContentDataControllerById = async (req, res, next) => {
  try {
    const { data, contentId } = req.body;
    const result = await contentDataServices.createContentData(data, contentId);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const updateContentDataControllerById = async (req, res, next) => {
  try {
    const { data, contentId } = req.body;
    const { dataId } = req.params;
    const result = await contentDataServices.updateContentDataById(contentId, dataId, data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteContentDataControllerById = async (req, res, next) => {
  try {
    const { contentId } = req.body;
    const { dataId } = req.params;
    await contentDataServices.deleteContentDataById(contentId, dataId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  // getAllDatasControllerById,
  createContentDataControllerById,
  updateContentDataControllerById,
  deleteContentDataControllerById
};