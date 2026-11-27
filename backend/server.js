
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const pool = require("./config/db.js");
const cors = require("cors");
const session = require("express-session");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Zansphere Backend is running!");
});

pool.query("SELECT NOW()")
    .then(() => console.log("PostgreSQL connected successfully"))
    .catch(err => console.error("Connection failed:", err.message));

app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.get("/api/health", async (req, res) => {
    try {
        await pool.query("SELECT NOW()");

        res.json({
            server: "Running",
            database: "Connected"
        });
    } catch (err) {
        res.status(500).json({
            database: "Connection failed"
        });
    }
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000
    }
}));