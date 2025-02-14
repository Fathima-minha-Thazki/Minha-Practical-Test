const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Slot = sequelize.define("Slot", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    timeSlot: { type: DataTypes.STRING, allowNull: false },
    isAvailable: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { timestamps: true });

module.exports = Slot;
