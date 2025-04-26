import "./App.css";
import { useState } from "react";
import { usePTOContext } from "./context/PTOContext.jsx";
import {
  countSemiMonthlyPaychecks,
  calculateBiWeeklyPayments,
  calculateMonthlyPayments,
} from "./utility/PayPeriodHelper.js";
import { useEffect } from "react";

import UserPtoInput from "./components/UserPtoInput/UserPtoInput.jsx";
import PtoTextDisplay from "./components/PtoTextDisplay/PtoTextDisplay.jsx";

function App() {
  return (
    <main>
      <div>
        <PtoTextDisplay />
        <UserPtoInput />
      </div>
    </main>
  );
}

export default App;
