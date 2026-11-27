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

const selectCustomer = async (req, res) => {
    const { customer_id } = req.body;

    try {
        const result = await pool.query(
            "SELECT * FROM customers WHERE customer_id = $1",
            [customer_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        req.session.customer_id = result.rows[0].customer_id;

        res.status(200).json({
            message: "Customer selected successfully",
            customer: result.rows[0]
        });

    } catch (err) {
        res.status(500).json({
            message: "Customer selection failed"
        });
    }
};

module.exports = { getCustomers,selectCustomer };