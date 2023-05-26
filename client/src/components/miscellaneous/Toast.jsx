import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";

const Toast = ({ toastObject, setToastObject }) => {
  return (
    <Snackbar
      open={toastObject.open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={() =>
        setToastObject((prevState) => ({ ...prevState, open: false }))
      }
    >
      <Alert
        onClose={() =>
          setToastObject((prevState) => ({ ...prevState, open: false }))
        }
        severity="error"
        sx={{ width: "100%" }}
      >
        {toastObject.content}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
