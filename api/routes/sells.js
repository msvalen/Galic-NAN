const express = require("express");
const router = express.Router();

const sellsController = require("../controllers/sells");

router.get("/", sellsController.index);
router.post("/", sellsController.create);
router.delete("/:buy_id", sellsController.destroy);
router.patch("/", sellsController.update);

module.exports = router;
