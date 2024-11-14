const bookService = require("../services/bookService");

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: "Book validation failed" });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    res.json({ message: "Book updated", updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    await bookService.deleteBook(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
