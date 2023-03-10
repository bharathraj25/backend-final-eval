const contentServices = require('../../services/content/content.service');

const getAllContentsController = async (req, res, next) => {
  try {
    const email = req.email;
    const result = await contentServices.getAllContents(email);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const createContentController = async (req, res, next) => {
  try {
    const email = req.email;
    const { contentName } = req.body;
    const result = await contentServices.createContent(contentName, email);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const updateContentController = async (req, res, next) => {
  try {
    const email = req.email;
    const { contentName } = req.body;
    const { contentId } = req.params;
    const result = await contentServices.updateContentNameById(contentId, contentName, email);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// const deleteContentController = async (req, res, next) => {
//   try {
//     const email = req.email;
//     const { contentId } = req.params;
//     await contentServices.deleteContentById(contentId, email);
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  getAllContentsController,
  createContentController,
  updateContentController,
  // deleteContentController
};