const express = require("express");
const {
  createGenre,
  updateGenre,
  deleteGenre,
  getGenre,
  getAllGenre,
} = require("../controllers/productGenreController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createGenre);
router.put("/:id", authMiddleware, isAdmin, updateGenre);
router.delete("/:id", authMiddleware, isAdmin, deleteGenre);
router.get("/:id", getGenre);
router.get("/", getAllGenre);

module.exports = router;
