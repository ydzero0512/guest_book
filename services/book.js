const {
  insertGuestBook,
  readGuestBook,
  readGuestBookCount,
} = require("../quries/book.js");

async function postGuestBook(dto) {
  const data = await insertGuestBook(dto);
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
