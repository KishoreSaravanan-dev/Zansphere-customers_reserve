import { useState, useEffect } from "react";
import product_image from "./assets/Airpods.png";

interface ReservationProps {
  customer?: string;
  onBack?: () => void;
}

function Reservation({ customer = "Nasreen Noor", onBack }: ReservationProps) {
  const [time, setTime] = useState(120);
  const [status, setStatus] = useState<"active" | "confirmed" | "cancelled">("active");

  useEffect(() => {
    if (status !== "active") return;
    const expiry = Date.now() + time * 1000;

    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((expiry - Date.now()) / 1000));
      setTime(remaining);
      if (remaining === 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  return (
    <div className="reservation-page">
      <div className="reservation-container">
        <div className="Reservation">
          <div className="aside_header">
            <h2>Payment page</h2>
            <p className="demo-badge">Demo</p>
          </div>

          <button type="button" className="back" onClick={onBack}>
            <span className="back-arrow" aria-hidden="true">←</span>
            <h5>Back to product</h5>
          </button>

          <div className="product_timer">
            <span className="active-res-badge">
              {status === "confirmed"
                ? "Reservation Confirmed"
                : status === "cancelled"
                ? "Reservation Cancelled"
                : "Active reservation"}
            </span>
            <h2>
              {status === "confirmed"
                ? "Your product is confirmed!"
                : status === "cancelled"
                ? "Hold has been released"
                : "Your product is on hold"}
            </h2>
            <p className="timer-subtitle">
              Confirm before the timer ends to keep the product
            </p>

            <div className="timer">
              <h1 className={time === 0 ? "expired" : ""}>
                {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
              </h1>

              {time === 0 && <p className="expired-text">Reservation Expired!</p>}

              <p className="stock-reserved-note">Stock reserved exclusively</p>
            </div>

            <div className="reservation-actions">
              <button
                type="button"
                className="btn-confirm-res"
                disabled={time === 0 || status !== "active"}
                onClick={() => setStatus("confirmed")}
              >
                {status === "confirmed" ? "Confirmed ✓" : "Confirm Reservation"}
              </button>
              <button
                type="button"
                className="btn-cancel-res"
                onClick={() => {
                  setStatus("cancelled");
                  if (onBack) onBack();
                }}
              >
                Cancel Reservation
              </button>
            </div>

            <p className="cancel-hint">
              Cancelling or letting the hold expire makes this unit available again.
            </p>
          </div>
        </div>

        <aside className="order_summary">
          <p className="summary-kicker">ORDER SUMMARY</p>

          <div className="summary-product-card">
            <img src={product_image} alt="Airpods 4" className="summary-product-img" />
            <div className="summary-product-info">
              <span className="drop-badge">LIMITED DROP</span>
              <h2>Airpods 4</h2>
              <div className="summary-meta">
                <span>Color: <strong>White</strong></span>
                <span>QTY: 1-unit</span>
              </div>
              <h3 className="summary-price">₹14,000</h3>
            </div>
          </div>

          <div className="summary-breakdown">
            <div className="summary-row">
              <span className="summary-key">Reservation Reference</span>
              <span className="summary-val mono">#ZAN-84920-X</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Reserved By</span>
              <span className="summary-val">{customer}</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Hold Created At</span>
              <span className="summary-val">14:30:14 UTC</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Stock Allocation</span>
              <span className="summary-val status-locked">Warehouse Locked</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row">
              <span className="summary-key">Item Subtotal</span>
              <span className="summary-val">₹14,000</span>
            </div>
            <div className="summary-row">
              <span className="summary-key">Flash Hold Deposit</span>
              <span className="summary-val">₹0 (Free Hold)</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row total-row">
              <span className="summary-key">Total Value</span>
              <span className="summary-val">₹14,000</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Reservation;
