const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/books", bookController.getAllBooks);
router.post("/create-book", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;