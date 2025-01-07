const { insertGuestBook, readGuestBook } = require("../quries/book.js");

async function postGuestBook(text) {
  const data = await insertGuestBook(text);
  return data;
}

async function getGuestBook() {
  const result = await readGuestBook();
  return result[0];
}

module.exports = {
  postGuestBook,
  getGuestBook,
};
