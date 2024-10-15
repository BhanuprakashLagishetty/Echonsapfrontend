import {
  Avatar,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import like from "../Post/like.png";

export default function StoryDisplay({ imageUrl, userProfile, userName }) {
  const [isLike, setIsLike] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  };
  const toggleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            top: 28,
            alignItems: "center",
            justfifyContent: "center",
            width: "100%",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "5px",
              background: "#c7c6c2",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{ width: "30%", height: "5px", background: "white" }}
            ></Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ margin: "10px" }}>
              <Avatar alt="B" src={userProfile} />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ color: "gray" }}>{userName}</Typography>
              <Typography sx={{ color: "gray", marginLeft: "10px" }}>
                24hr
              </Typography>
            </Box>
          </Box>
        </Box>
        {loading && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            sx={{
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress size={25} thickness={5} sx={{ color: "white" }} />
          </Box>
        )}
        <Box width={"100%"} height={"100%"} sx={{ overflow: "hidden" }}>
          <img
            src={imageUrl}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover", overflow: "hidden" }}
            onLoad={handleLoading}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 80,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="custom-textfield"
              variant="outlined"
              placeholder="Replay"
              InputProps={{
                sx: {
                  height: "35px", // Adjust the height here
                  borderRadius: "35px", // Adjust the border radius here
                  color: "white", // Text color
                  fontWeight: 600,
                },
                notchedOutline: {
                  borderColor: "white", // Border color
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "white", // Placeholder color
                },
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // White border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // White border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // White border when focused
                  },
                },
              }}
            />
          </Box>
          <Box onClick={toggleLike} sx={{ cursor: "pointer" }}>
            {isLike ? (
              <img
                src={like}
                width="25px"
                height="25px"
                alt="Like"
                loading="lazy"
              />
            ) : (
              <FavoriteBorderIcon sx={{ color: "white" }} />
            )}
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <SendIcon sx={{ color: "white" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
