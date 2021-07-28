const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.create);
router.delete("/", userController.destroy);

module.exports = router;
