import React from "react";
import MiniDrawer from "../../Components/Home";
import { Box } from "@mui/material";
import WrappedDashBoardPage from "./WrappedDashBoardPage";
import StarsCanvas from "../../canvas/stars";

function DashBoardPage() {
  return (
    <>
      <MiniDrawer component={<WrappedDashBoardPage />} />
    
    </>
  );
}

export default DashBoardPage;
