import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackBar({ open, setOpen, setErrror, type }) {
  const snackBarType = {
    ERROR: {
      MSG_type: "error",
      MSG: "some thing went wrong",
    },
    SUCCESS: {
      type: "success",
      MSG: "successfully registered",
    },
  };
  console.log(snackBarType[type], "type");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setErrror(false);
  };

  console.log(snackBarType[type].MSG, "snackbartype");
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
      >
        <Alert
          onClose={handleClose}
          severity={snackBarType[type].MSG_type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBarType[type].MSG}
        </Alert>
      </Snackbar>
    </div>
  );
}
