import React, { useState } from "react";
import Register from "../../Components/Authentication/Register";
import { Box, Typography } from "@mui/material";
import image from "../Authentication/image.png";
export default function LoginPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#dcd9f3 ",
        }}
      >
        <Box
          sx={{
            display: "flex",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              background: "#fff",
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Register />
          </Box>
          <Box>
            <img src={image} height={"100%"}></img>
          </Box>
        </Box>
      </Box>
    </>
  );
}
