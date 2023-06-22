const express = require("express");
const invoice = require("../controllers/invoice");

const router = express.Router();

router.get('/',invoice.getAll);

module.exports = router;