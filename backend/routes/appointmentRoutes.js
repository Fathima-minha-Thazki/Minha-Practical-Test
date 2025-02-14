const express = require("express");
const { bookAppointment, getAppointments, cancelAppointment } = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getAppointments);
router.post("/", authMiddleware, bookAppointment);
router.delete("/:id", authMiddleware, cancelAppointment);

module.exports = router;
