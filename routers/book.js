const express = require("express");
const { postGuestBook, getGuestBook } = require("../services/book.js");

const router = express.Router();
router.post("/write", async (req, res) => {
  try {
    const data = await postGuestBook(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error" });
  }
});

router.get("/list", async (req, res) => {
  try {
    const result = await getGuestBook();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error" });
  }
});

module.exports = router;
