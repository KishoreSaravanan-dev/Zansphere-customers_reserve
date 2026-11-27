const pool = require("../config/db");

const getProducts = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM products"
        );

        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch products"
        });
    }
};

module.exports = { getProducts };