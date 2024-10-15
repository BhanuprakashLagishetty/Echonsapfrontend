import React from "react";
import userActivity from "../../MockData/Activity.json";
import { Box, Button } from "@mui/material";

function Activity() {
  return (
    <>
      <Box>
        {userActivity.activity.map((item) => (
     <Box
     sx={{
       display: "flex",
       alignItems: "center",
       justifyContent: "space-between",
       margin:"10px"
     }}
   >
     <img
       src={item.byUser.profilePicture}
       width={"30px"}
       height={"30px"}
       style={{ borderRadius: "50%" }}
       alt="Profile"
     />
    
   
     {item.type === "follow" ? (
       <>
         {item.byUser.fullName} {item.type}  you
         <Button variant="contained" href="#contained-buttons" sx={{fontSize:"8px", padding:"5px"}}>
       follow back
      </Button>
       </>
     ) : (
       <>
          {item.byUser.fullName} {item.type} on your post
         {item.post && (
           <img
             src={item.post.imageUrl}
             width={"30px"}
             height={"30px"}
             style={{ borderRadius: "20%" }}
             alt="Post"
           />
         )}
       </>
     )}
   </Box>
   
        ))}
      </Box>
    </>
  );
}

export default Activity;
