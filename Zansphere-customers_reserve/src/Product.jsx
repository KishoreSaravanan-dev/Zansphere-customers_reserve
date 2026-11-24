import { useState } from "react";
import logo from "./assets/zanSphere.png";
import "./index.css";

const customers = ["Nasreen Noor", "Kishore Saravanan"];

function Product() {
  const [customer, setCustomer] = useState(customers[0]);

  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Zansphere home">
        <img src={logo} alt="" />
        <strong>Customer_Reserve</strong>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#holds">Products</a>
        <a href="#inventory">Cart</a>
      </nav>

      <label className="customer-picker">
        <span className="customer-label">DEMO CUSTOMER:</span>
        <span className="customer-initial">{customer[0]}</span>
        <select
          value={customer}
          onChange={(event) => setCustomer(event.target.value)}
          aria-label="Choose demo customer"
        >
          {customers.map((name) => <option key={name}>{name}</option>)}
        </select>
      </label>

      <button className="profile-button" aria-label="Profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="3" />
          <path d="M6.5 19a5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </header>
  );
}

export default Product;