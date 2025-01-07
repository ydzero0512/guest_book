const { text } = require("express");
const { pool } = require("./db");

async function insertGuestBook(text) {
  let conn;
  let result;
  try {
    conn = await pool.getConnection();
    result = await conn.execute(
      `
         INSERT INTO guest_book (text) VALUES (?);
      `,
      [text]
    );
    const data = {
      text: text,
      date: new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
        .format(new Date())
        .replace(/\//g, ".") // Replace slashes with dots
        .replace(",", ""), // Remove the comma between date and time
    };
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    conn.release();
  }
}

async function readGuestBook() {
  let conn;
  let result;

  try {
    conn = await pool.getConnection();
    await conn.query("SET time_zone = 'Asia/Seoul'");
    result = await conn.execute(
      `
           SELECT 
           text, 
           DATE_FORMAT(date, '%Y. %c. %e. %H:%i') AS date 
           FROM guest_book
           ORDER BY id;
        `
    );
  } catch (error) {
    console.error(error);
  } finally {
    conn.release();
  }
  return result;
}

module.exports = {
  insertGuestBook,
  readGuestBook,
};
