import React from "react";
import { usePTOContext } from "../../context/PTOContext.jsx";

function PtoInfoInputs() {
  const {
    currentPto,
    setCurrentPto,
    ptoRate,
    setPtoRate,
    userDate,
    setUserDate,
  } = usePTOContext();

  const dateNow = new Date().toLocaleDateString("en-CA");

  return (
    <div>
      <div>
        <label for="currentPto">Current PTO</label>
        <input
          id="currentPto"
          placeholder="Current pto"
          type="number"
          value={currentPto}
          onChange={(e) => setCurrentPto(e.target.value)}
        ></input>
      </div>
      <div>
        <label for="ptoRate">PTO rate</label>
        <input
          id="ptoRate"
          placeholder="Pto rate"
          type="number"
          value={ptoRate}
          onChange={(e) => setPtoRate(e.target.value)}
        ></input>
      </div>
      <input
        type="date"
        value={userDate}
        onChange={(e) => setUserDate(e.target.value)}
      />
    </div>
  );
}

export default PtoInfoInputs;
