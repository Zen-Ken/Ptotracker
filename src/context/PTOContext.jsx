import { createContext, useContext, useState, useEffect } from "react";
import ptoCalculator from "../services/ptoCalculatorServices";
import { countSemiMonthlyPaychecks } from "../utility/PayPeriodHelper.js";

const PTOContext = createContext();

export const PTOProvider = ({ children }) => {
  // User Input
  const [currentPto, setCurrentPto] = useState(0);
  const [ptoRate, setPtoRate] = useState(0);
  const [timesAccured, setTimesAccured] = useState(1);

  // Current Date
  const dateNow = new Date().toLocaleDateString("en-CA");

  // User target date to calculate available PTO
  const [userDate, setUserDate] = useState(dateNow);

  // PTO Calculation available PTO result
  const [availablePto, setAvailablePto] = useState(0);

  // Calculate available PTO based on user input and current date
  useEffect(() => {
    setAvailablePto(
      ptoCalculator(Number(currentPto), Number(ptoRate), Number(timesAccured))
    );
  }, [currentPto, ptoRate, timesAccured]);

  // Calculate the number of paychecks between the current date and the user target date
  useEffect(() => {
    setTimesAccured(countSemiMonthlyPaychecks(dateNow, userDate));
  }, [userDate]);

  return (
    <PTOContext.Provider
      value={{
        currentPto,
        setCurrentPto,
        ptoRate,
        setPtoRate,
        timesAccured,
        setTimesAccured,
        userDate,
        setUserDate,
        availablePto,
      }}
    >
      {children}
    </PTOContext.Provider>
  );
};

export const usePTOContext = () => {
  return useContext(PTOContext);
};
