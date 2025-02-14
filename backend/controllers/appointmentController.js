const Appointment = require("../models/Appointment");
const User = require("../models/User");

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({ where: { userId: req.user.id } });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: "Error fetching appointments" });
    }
};

exports.bookAppointment = async (req, res) => {
    try {
        const { date, timeSlot } = req.body;
        console.log(req.body)
        console.log(req.user.id)
        const user1 = await User.findOne({ where: { id: req.user.id } });
    //    console.log(user1);
        

        const existing = await Appointment.findOne({ where: { date, timeSlot } });
        if (existing) return res.status(400).json({ error: "Time slot already booked" });

        const appointment = await Appointment.create({ userId: req.user.id, date, timeSlot, name: user1.name, contact: user1.contact, email: user1.email});
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: "Error booking appointment" });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findByPk(id);

        if (!appointment) return res.status(404).json({ error: "Appointment not found" });

        await appointment.destroy();
        res.json({ message: "Appointment canceled" });
    } catch (error) {
        res.status(500).json({ error: "Error canceling appointment" });
    }
};
