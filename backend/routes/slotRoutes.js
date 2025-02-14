const express = require("express");
const { getAvailableSlots, addSlot } = require("../controllers/slotController");

const router = express.Router();

router.get("/", getAvailableSlots);
router.post("/", addSlot);

module.exports = router;
