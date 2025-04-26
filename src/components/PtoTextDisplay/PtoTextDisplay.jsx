import React from "react";
import { usePTOContext } from "../../context/PTOContext";
import DatePicker from "../DatePicker/DatePicker";

function PtoTextDisplay() {
  const { availablePto } = usePTOContext();

  return (
    <div>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
        You'll have {Math.floor(availablePto / 8)} days or {availablePto} hours
        by <DatePicker />
      </h1>
    </div>
  );
}

export default PtoTextDisplay;
