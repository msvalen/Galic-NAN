const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const stocksBoughtController = require("../controllers/stocksBought");

router.get("/:buy_id", stocksBoughtController.show);
router.post("/", stocksBoughtController.create);
router.delete("/:buy_id", stocksBoughtController.destroy);
