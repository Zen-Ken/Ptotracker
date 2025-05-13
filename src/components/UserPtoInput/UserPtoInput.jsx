import React from "react";
import { TextField } from "@mui/material";
import { usePTOContext } from "../../context/PTOContext.jsx";

// import styles from "./UserPtoInput.module.css";

function UserPtoInput() {
  const { currentPto, setCurrentPto, ptoRate, setPtoRate } = usePTOContext();

  return (
    <div>
      <div>
        <TextField
          label="Current PTO"
          type="number"
          variant="outlined"
          value={currentPto}
          onChange={(e) => setCurrentPto(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Pto Rate"
          helperText="How many hours do you earn per pay period?"
          type="number"
          variant="outlined"
          value={ptoRate}
          onChange={(e) => setPtoRate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserPtoInput;
