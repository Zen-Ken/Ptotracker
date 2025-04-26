import React from "react";
import { usePTOContext } from "../../context/PTOContext.jsx";

function UserPtoInput() {
  const { currentPto, setCurrentPto, ptoRate, setPtoRate } = usePTOContext();

  return (
    <div>
      <div>
        <label for="currentPto">Current PTO</label>
        <input
          id="currentPto"
          placeholder="32.00"
          type="number"
          value={currentPto}
          onChange={(e) => setCurrentPto(e.target.value)}
        ></input>
      </div>
      <div>
        <label for="ptoRate">PTO rate</label>
        <input
          id="ptoRate"
          placeholder="4.77"
          type="number"
          value={ptoRate}
          onChange={(e) => setPtoRate(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default UserPtoInput;
