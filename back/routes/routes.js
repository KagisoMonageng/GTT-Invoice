const express = require("express");
const invoice = require("../controllers/invoice");

const router = express.Router();

router.get('/',invoice.getAllInv);
router.get('/:id',invoice.getInvoice);
router.post('/',invoice.addInv);


module.exports = router;