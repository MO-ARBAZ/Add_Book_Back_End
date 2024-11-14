const Book = require("../model/Book");

const getAllBooks = async () => {
  return await Book.find();
};

const createBook = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

const updateBook = async (id, updateData) => {
  const book = await Book.findById(id);
  if (!book) throw new Error("Book not found");
  Object.assign(book, updateData);
  return await book.save();
};

const deleteBook = async (id) => {
  const book = await Book.findById(id);
  if (!book) throw new Error("Book not found");
  return await book.deleteOne();
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
