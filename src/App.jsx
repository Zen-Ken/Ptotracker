import "./App.css";
import { useState } from "react";
import { usePTOContext } from "./context/PTOContext.jsx";
import {
  countSemiMonthlyPaychecks,
  calculateBiWeeklyPayments,
  calculateMonthlyPayments,
} from "./utility/PayPeriodHelper.js";
import { useEffect } from "react";

import PtoInfoInputs from "./components/UserPtoInput/UserPtoInput.jsx";

function App() {
  const {
    currentPto,
    setCurrentPto,
    ptoRate,
    setPtoRate,
    timesAccured,
    setTimesAccured,
    availablePto,
  } = usePTOContext();
  const dateNow = new Date().toLocaleDateString("en-CA");
  const [userDate, setUserDate] = useState(dateNow);

  return (
    <main>
      <div>
        <PtoInfoInputs />
        <div>
          <h2>Hours at time of vacation: {availablePto}hr</h2>
          <h2>Days at time of vacation: {Math.floor(availablePto / 8)} day</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
