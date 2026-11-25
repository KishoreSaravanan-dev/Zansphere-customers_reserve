import { useState } from "react";
import logo from "./assets/zanSphere.png";
import "./index.css";
import flash from "./assets/icons8-flash-sale-64.png";
import product_image from "./assets/AirPods.png"

const customers = ["Nasreen Noor", "Kishore Saravanan"];

const productPath = [
  "Home",
  "Audio & Video",
  "Headset",
  "Earphones",
  "Wireless Earphones",
  "True Wireless",
  "APPLE True Wireless",
  "AirPods 4 Wireless Earbuds",
];

function Product() {
  const [customer, setCustomer] = useState(customers[0]);

  return (
    <>
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

    <div className="product-breadcrumb">
        <nav aria-label="Breadcrumb">
          <ol>
            {productPath.map((item, index) => (
              <li key={item}>
                <span
                  className={
                    index === productPath.length - 1
                      ? "breadcrumb-current"
                      : "breadcrumb-link"
                  }
                >
                  {item}
                </span>

                {index !== productPath.length - 1 && (
                  <span className="breadcrumb-separator">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="product-details-section">
        <div className="product_image">
          <div className="stock-badge">
            <img src={flash} alt="" className="flash-icon" />
            <p>1 OF 1 Limited Stock</p>
          </div>
          <img src={product_image} alt="AirPods" className="product-main-img" width="200" height="200" />
          <h3 className="edition-tag">Premium Edition</h3>
        </div>

        <div className="side_panel">
          <h2 className="product-title">Apple Airpods 4</h2>
          <p className="product-description">
            Apple AirPods 4 Wireless Earbuds, Personalised Spatial Audio, Sweat and Water Resistant Bluetooth Headset (White, True Wireless)
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;