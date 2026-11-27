const pool = require("../config/db");

const getCustomers = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM customers"
        );

        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch customers"
        });
    }
};

module.exports = { getCustomers };