const contentTypeServices = require('../../services/content/contentType.service');

// const getAllTypesControllerById = async (req, res, next) => {
//   try {
//     const { contentId } = req.query;
//     const result = await contentTypeServices.getAllContentTypes(contentId);
//     res.status(200).json(result);
//   } catch (err) {
//     next(err);
//   }
// };

const createContentTypeControllerById = async (req, res, next) => {
  try {
    const { contentId, type } = req.body;
    const result = await contentTypeServices.createContentType(type, contentId);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const updateContentTypeControllerById = async (req, res, next) => {
  try {
    const { contentId, type } = req.body;
    const { typeId } = req.params;
    const result = await contentTypeServices.updateContentTypeById(contentId, typeId, type);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteContentTypeControllerById = async (req, res, next) => {
  try {
    const { contentId } = req.body;
    const { typeId } = req.params;
    await contentTypeServices.deleteContentTypeById(contentId, typeId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  // getAllTypesControllerById,
  createContentTypeControllerById,
  updateContentTypeControllerById,
  deleteContentTypeControllerById
};