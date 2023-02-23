const Publisher = require("../models/publisherModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDB");

//create publisher
const createPublisher = asyncHandler(async (req, res) => {
  try {
    const publisher = await Publisher.create(req.body);
    res.json(publisher);
  } catch (error) {
    throw new Error(error);
  }
});

//update publisher
const updatePublisher = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedPublisher = await Publisher.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPublisher);
  } catch (error) {
    throw new Error(error);
  }
});

//delete publisher

const deletePublisher = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedPublisher = await Publisher.findByIdAndDelete(id);
    res.json(deletedPublisher);
  } catch (error) {
    throw new Error(error);
  }
});

//get publisher

const getPublisher = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const publisher = await Publisher.findById(id);
    res.json(publisher);
  } catch (error) {
    throw new Error(error);
  }
});

//get all publishers
const getAllPublisher = asyncHandler(async (req, res) => {
  try {
    const publisher = await Publisher.find();
    res.json(publisher);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createPublisher,
  updatePublisher,
  deletePublisher,
  getPublisher,
  getAllPublisher,
};
