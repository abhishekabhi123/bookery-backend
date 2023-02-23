const express = require("express");
const {
  createPublisher,
  updatePublisher,
  deletePublisher,
  getPublisher,
  getAllPublisher,
} = require("../controllers/publisherController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createPublisher);
router.put("/:id", authMiddleware, isAdmin, updatePublisher);
router.delete("/:id", authMiddleware, isAdmin, deletePublisher);
router.get("/:id", getPublisher);
router.get("/", getAllPublisher);

module.exports = router;
