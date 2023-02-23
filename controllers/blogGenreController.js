const Genre = require("../models/blogGenreModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDB");

//create genre
const createGenre = asyncHandler(async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.json(genre);
  } catch (error) {
    throw new Error(error);
  }
});

//update genre
const updateGenre = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedGenre = await Genre.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedGenre);
  } catch (error) {
    throw new Error(error);
  }
});

//delete genre

const deleteGenre = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedGenre = await Genre.findByIdAndDelete(id);
    res.json(deletedGenre);
  } catch (error) {
    throw new Error(error);
  }
});

//get genre

const getGenre = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const genre = await Genre.findById(id);
    res.json(genre);
  } catch (error) {
    throw new Error(error);
  }
});

//get all genres
const getAllGenre = asyncHandler(async (req, res) => {
  try {
    const genre = await Genre.find();
    res.json(genre);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createGenre,
  updateGenre,
  deleteGenre,
  getGenre,
  getAllGenre,
};
