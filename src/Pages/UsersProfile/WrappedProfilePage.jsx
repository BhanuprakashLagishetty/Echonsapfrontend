import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  Typography,
} from "@mui/material";
import React, { Suspense, useEffect } from "react";
import UserTabs from "../../Components/UserTabs/UserTabs";
import CloseIcon from "@mui/icons-material/Close";
import { useSelect } from "@react-three/drei";
import { useSelector } from "react-redux";

function WrappedProfilePage() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userDetails = useSelector((state) => state.userDetails);
  console.log(userDetails.first_name, "USERDETAILS");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ marginRight: "200px", marginLeft: "-100px" }}
          onClick={handleClickOpen}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://i.imgur.com/4HmVYKq.png"
            sx={{
              width: { sm: 100, lg: 200 },
              height: { sm: 100, lg: 200 },
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
              cursor: "pointer",
              "&:hover": {
                boxShadow:
                  "rgba(255, 235, 59, 0.8) 0px 4px 8px 0px, rgba(255, 235, 59, 0.6) 0px 6px 12px 4px;",
              },
            }}
          />
          <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
            {userDetails?.username}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">
            {userDetails.first_name} {userDetails.last_name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight:"30px"
            
              }}
            >
              <Typography>4</Typography>
              <Typography sx={{ fontWeight: "600" }}>Posts</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                 marginRight:"30px"
              }}
            >
              <Typography>4444</Typography>
              <Typography sx={{ fontWeight: "600" }}>Followers</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                 marginRight:"30px"
              }}
            >
              <Typography>44</Typography>
              <Typography sx={{ fontWeight: "600" }}>Following</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <UserTabs />
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <img
          src="https://i.imgur.com/4HmVYKq.png"
          height="100%"
          style={{
            maxHeight: "calc(100vh - 64px)", // Adjust based on dialog title height
            width: "auto",
            display: "block",
          }}
        ></img>

        <DialogActions sx={{ position: "absolute", top: 1, right: 1 }}>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default WrappedProfilePage;
