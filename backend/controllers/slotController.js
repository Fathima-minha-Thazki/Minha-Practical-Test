const Slot = require("../models/Slot");

exports.getAvailableSlots = async (req, res) => {
    try {
        const slots = await Slot.findAll({ where: { isAvailable: true } });
        res.json(slots);
    } catch (error) {
        res.status(500).json({ error: "Error fetching slots" });
    }
};

exports.addSlot = async (req, res) => {
    try {
        const { date, timeSlot } = req.body;
        const slot = await Slot.create({ date, timeSlot });
        res.status(201).json(slot);
    } catch (error) {
        res.status(500).json({ error: "Error adding slot" });
    }
};
