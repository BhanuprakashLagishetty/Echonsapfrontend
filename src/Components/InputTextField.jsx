import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputTextField({ title, value, onChange }) {
  // Corrected prop name from 'titile' to 'title'
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={title}
        variant="standard"
        value={value} // Add the value prop
        onChange={onChange} // Add the onChange prop
      />
    </Box>
  );
}
