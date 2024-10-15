import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, CircularProgress } from "@mui/material";
import like from "../Post/like.png";
import {
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import GroupOfUsers from "../GroupOfUsers";
import { CustomeBox } from "./CustomeBox";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Post({
  index,
  image,
  caption,
  username,
  userProfile,
  createdDate,
  description,
}) {
  console.log(createdDate, "createdDate");
  const darkMode = useSelector((state) => state.darkMode);
  const [expanded, setExpanded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const randomColor = getRandomHexColor();
  const handleOnLoad = () => {
    setIsLoading(false);
  };
  const togglelike = () => {
    setIsLiked(!isLiked);
  };

  const formateDate = (createdDate) => {
    const dateObj = new Date(createdDate);
    const formatedDateObj = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formatedDateObj;
  };

  return (
    <>
     <motion.div>
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <CircularProgress disableShrink />
        </Box>
      )}
      <Card
        sx={{
          maxWidth: 455,
          boxShadow: darkMode
            ? "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 2px 6px 2px"
            : "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
          borderRadius: "10px",
          position: "relative",
          display: isLoading ? "none" : "block", // Hide card until image is loaded
          background: darkMode ? "black" : "white",
          color: darkMode
            ? "rgba(255, 255, 255, 0.87)"
            : "color: rgba(0, 0, 0, 0.87);",
        }}

      >
  
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src={userProfile}
              sx={{
                background: randomColor,
                boxShadow: darkMode
                  ? "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 2px 6px 2px"
                  : "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
              }}
            />
          }
          action={
            <IconButton
              aria-label="settings"
              sx={{ color: darkMode && "rgba(255, 255, 255, 0.54)" }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={username}
          subheader={formateDate(createdDate)}
          sx={{
            "& .MuiCardHeader-subheader": {
              color: darkMode
                ? "rgba(255, 255, 255, 0.54)"
                : "rgba(0, 0, 0, 0.54)", // Adjust subheader color based on the theme
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={image}
            alt="Post image"
            sx={{
              width: "90%",
              boxShadow: darkMode
                ? "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 2px 6px 2px"
                : "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                
              borderRadius: "10px",
              position:"1200px",
              zIndex:90000,

              transform:"transalateZ(100px)",
             
              
            }}
            onLoad={handleOnLoad}
          />
        </Box>

        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomeBox>
            <IconButton
              aria-label="add to favorites"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: darkMode && "rgba(255, 255, 255, 0.54)",
              }}
              onClick={togglelike}
            >
              {isLiked ? (
                <img
                  src={like}
                  width="25px"
                  height="25px"
                  alt="Like"
                  loading="lazy"
                />
              ) : (
                // <img src={whiteLike} width={"25px"} height={"25px"} alt="Like" />
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>114</Typography>
          </CustomeBox>
          <CustomeBox onClick={handleExpandClick}>
            <IconButton aria-label="comment">
              <ChatIcon
                sx={{ color: darkMode && "rgba(255, 255, 255, 0.54)" }}
              />
            </IconButton>
            <Typography>4</Typography>
          </CustomeBox>

          <CustomeBox>
            <IconButton aria-label="share">
              <ShareIcon
                sx={{ color: darkMode && "rgba(255, 255, 255, 0.54)" }}
              />
            </IconButton>
            <Typography></Typography>
          </CustomeBox>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ color: darkMode && "rgba(255, 255, 255, 0.54)" }}
          >
            <ExpandMoreIcon
              sx={{ color: darkMode && "rgba(255, 255, 255, 0.54)" }}
            />
          </ExpandMore>
        </CardActions>
        <Box sx={{ display: "flex", padding: "0px 16px" }}>
          <GroupOfUsers
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          />
          <Typography>
            Liked By <b>rakesh </b>and more 49
          </Typography>
        </Box>

        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: darkMode && "rgba(255, 255, 255, 0.54)" }}
          >
            {caption}
          </Typography>
        </CardContent>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              paragraph
              sx={{ color: darkMode && "rgba(255, 255, 255, 0.54)" }}
            >
              {description}
            </Typography>
          </CardContent>
        </Collapse>
   
      </Card>
      </Tilt>
      </motion.div>
    </>
  );
}
