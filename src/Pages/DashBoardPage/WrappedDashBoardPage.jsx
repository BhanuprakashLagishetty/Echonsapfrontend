import { Box } from "@mui/material";
import React from "react";
import TextMobileStepper from "../../Components/StoryCarosals";
import PostListingPage from "./PostListingPage";
import Activity from "../../Components/Activity";

function WrappedDashBoardPage() {
  return (
    <>
      <Box sx={{ width: "100%",display:"flex" }}>
        <Box sx={{ width: "65%", }}>
          <TextMobileStepper />
          <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"40px"}}>
            <PostListingPage/>
          </Box>
        </Box>
        <Box sx={{  width: "35%"}}>
          <Box sx={{borderRadius:"10px",padding:"10px",fontSize:"12px"}}>
          <Activity/>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WrappedDashBoardPage;
