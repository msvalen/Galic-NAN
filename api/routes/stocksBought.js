const express = require("express");
const router = express.Router();

const stocksBoughtController = require("../controllers/stocksBought");

router.get("/:buy_id", stocksBoughtController.show);
router.post("/", stocksBoughtController.create);
router.delete("/:buy_id", stocksBoughtController.destroy);

module.exports = router;
