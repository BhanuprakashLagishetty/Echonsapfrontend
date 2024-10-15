import { TextField } from "@mui/material";
import React from "react";

export default function CustomeTextFiled({ name, label, sx, ...props }) {
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label={label}
        name={name}
        InputProps={{
          sx: {
            height: "40px",
            padding: "0 0px",
            fontSize: "12px",
          },
        }}
        InputLabelProps={{
          sx: {
            fontSize: "13px",
            top: "-6px",
          },
        }}
        sx={{
          m: 1,
          width: "40ch",
          borderRadius: "30px",
          "& .MuiInputBase-input": {
            padding: "8px 10px",
          },
          ...sx,
        }}
        {...props}
      />
    </>
  );
}
