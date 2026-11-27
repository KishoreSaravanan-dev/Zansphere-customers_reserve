import { useState, useEffect } from "react";

function Reservation() {
    
    const [time, setTime] = useState(120);

    useEffect(() => {
        const expiry = Date.now() + 120000;

        const timer = setInterval(() => {
            const remaining = Math.max(
                0, Math.ceil((expiry - Date.now()) / 1000)
            );

            setTime(remaining);

            if (remaining === 0) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>

        <div className="Reservation">
        
            <div className="aside_header">
                <h2>Payment page</h2>
                <p>Demo</p>
            </div>
            <div className="back">
                <button></button>
                <h5>Back to product</h5>
            </div>
            <div className="product_timer">
                <h6>Active reservation</h6>
                <h2>Your product is on hold</h2>
                <p>Confirm before the timer ends to keep the product</p>

                <div className="timer">
                    <h1>
                        {Math.floor(time / 60)}:
                        {String(time % 60).padStart(2, "0")}
                    </h1>

                    {time === 0 && <p>Reservation Expired!</p>}

                    <p>Stock reserved exclusively</p>
                </div>

                <button>Confirm Reservation</button>
                <button>Cancel Reservation</button>
                <p>Cancelling or letting the hold expire makes this unit available again.</p>

            </div>
        </div>

        <div className="order_summary">

            <p>ORDER SUMMARY</p>
            <img src="./assets/Airpods.png" alt="" />
            <h3>LIMITED DROP</h3>
            <h2>Airpods 4</h2>
            <h6>Color :</h6>
            <h6>White</h6>
            <h3>14,000</h3>
            <h5>QTY:1-unit</h5>

            Reservation Reference
            Reserved By
            Hold Created At
            Stock Allocation
            Item Subtotal
            Flash Hold Deposit
            Total Value
            #ZAN-84920-X O
            Nasreen Noor
            14:30:14 UTC
            Co Warehouse Locked
            13,999
            RO (Free Hold)
            13,999

        </div>
        </>
    );
}

export default Reservation;