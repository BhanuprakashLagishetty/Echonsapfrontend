import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import image from "../Authentication/image.png";
import Login from "../../Components/Authentication/Login";
export default function LoginPage() {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
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
            height:"70%"
          }}
        >
          <Box sx={{ background: "#fff", padding: "40px",display:"flex",alignItems:"center" }}>
            < Login/>
          </Box>
          <Box>
            <img src={image} height={"100%"}></img>
          </Box>
          <Box sx={{ position: "absolute", top: 0, right: 6 }}></Box>
        </Box>
      </Box>
    </>
  );
}
