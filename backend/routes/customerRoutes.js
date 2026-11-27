const express = require("express");
// const { getCustomers } = require("../controllers/customerController");

const {
    getCustomers,
    selectCustomer
} = require("../controllers/customerController");

const router = express.Router();

router.post("/select", selectCustomer);
router.get("/", getCustomers);



module.exports = router;    