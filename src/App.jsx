import { useState } from "react";
import Product from "./Product";
import Reservation from "./Reservation";

const customers = ["Nasreen Noor", "Kishore Saravanan"];

function App() {
  const [customer, setCustomer] = useState(customers[0]);
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      {showReservation ? (
        <Reservation
          customer={customer}
          onBack={() => setShowReservation(false)}
        />
      ) : (
        <Product
          customer={customer}
          setCustomer={setCustomer}
          customers={customers}
          onBuy={() => setShowReservation(true)}
        />
      )}
    </>
  );
}

export default App;
