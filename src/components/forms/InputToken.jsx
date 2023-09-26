import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const InputTokenList = () => {
  const [tokens, setTokens] = useState(["", "", "", "", ""]);
  const combinedTokens = tokens.join("");

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newTokens = [...tokens];
    newTokens[index] = value;
    setTokens(newTokens);

    if (value === "" && index > 0) {
      const prevInput = document.getElementById(`token-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    } else if (value.length === 1 && index < tokens.length - 1) {
      const nextInput = document.getElementById(`token-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <Grid container spacing={2}>
      {tokens.map((token, index) => (
        <Grid item xs={12 / 5} key={index}>
          <TextField
            id={`token-${index}`}
            // label={`Token ${index + 1}`}
            variant="outlined"
            fullWidth
            value={token}
            onChange={(e) => handleInputChange(e, index)}
            sx={{ input: { textAlign: "center" } }}
            inputProps={{
              maxLength: 1,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InputTokenList;
