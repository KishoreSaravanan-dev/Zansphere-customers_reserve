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

          <div className="price-container">
            <div className="price-row">
              <span className="price-current">₹14,000</span>
              <del className="price-original">₹19,000</del>
              <span className="price-badge">Flash Deal</span>
            </div>
            <p className="price-demo-note">Demo pricing • No transaction needed</p>
          </div>

          <div className="variant-group">
            <span className="variant-label">Edition</span>
            <div className="edition-options">
              <label className="edition-pill">
                <input type="radio" name="edition" value="premium" defaultChecked />
                <span>Premium Edition</span>
              </label>
              <label className="edition-pill">
                <input type="radio" name="edition" value="standard" />
                <span>Standard Edition</span>
              </label>
            </div>
          </div>

          <div className="variant-group color-row">
            <span className="variant-label">Color:</span>
            <span className="color-tag">White</span>
          </div>

          <div className="highlights-group">
            <h3 className="section-heading">Key Highlights</h3>
            <ul className="highlights-list">
              <li>Active noise cancellation</li>
              <li>Up to 6 hours battery</li>
              <li>Lightweight over-ear build</li>
              <li>Lossless Bluetooth 5.3</li>
            </ul>
          </div>

          <div className="live-status-card">
            <div className="stock-status-row">
              <span className="status-indicator-dot"></span>
              <span className="stock-label">Live stock status:</span>
              <span className="stock-count-highlight">1 unit available</span>
            </div>
            <p className="queue-info-text">
              Live queue active. When you click reserve, a 2-minute server hold guarantees this unit for customer <strong>{customer}</strong>.
            </p>
          </div>

          <div className="action-group">
            <button className="buy-btn">Buy / Reserve Unit</button>
            <p className="reserve-note">Reserve one unit now. Confirm or cancel within 2 minutes.</p>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <ul>
          <li>Zansphere Reservation System Demo</li>
          <li>2-minute server-guaranteed stock hold</li>
          <li>Fictional assessment product</li>
        </ul>
      </footer>
    </>
  );
}

export default Product;