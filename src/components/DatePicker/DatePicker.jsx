import React from "react";
import { usePTOContext } from "../../context/PTOContext";

export default function DatePicker() {
  const { userDate, setUserDate } = usePTOContext();
  return (
    <>
      <input
        type="date"
        value={userDate}
        onChange={(e) => {
          setUserDate(e.target.value);
        }}
      />
    </>
  );
}
