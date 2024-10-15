import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import StoryDialoge from "../StoryDialoge";

const steps = [
  {
    content: [
      {
        id: 1,
        storyImageUrl: "https://i.imgur.com/4HmVYKq.png",
        userProfileUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "user1",
      },
      {
        id: 2,
        storyImageUrl:
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        userProfileUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        username: "user2",
      },
      {
        id: 3,
        storyImageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        userProfileUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        username: "user3",
      },
      {
        id: 4,
        storyImageUrl:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        userProfileUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        username: "user4",
      },
      {
        id: 5,
        storyImageUrl:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        userProfileUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        username: "user5",
      },
      {
        id: 6,
        storyImageUrl: "https://i.imgur.com/4HmVYKq.png",
        userProfileUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        username: "user6",
      },
    ],
  },
  {
    content: [
      {
        id: 7,
        storyImageUrl:
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        userProfileUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        username: "user7",
      },
      {
        id: 8,
        storyImageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        userProfileUrl: "https://randomuser.me/api/portraits/women/4.jpg",
        username: "user8",
      },
      {
        id: 9,
        storyImageUrl:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        userProfileUrl: "https://randomuser.me/api/portraits/men/5.jpg",
        username: "user9",
      },
      {
        id: 10,
        storyImageUrl:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        userProfileUrl: "https://randomuser.me/api/portraits/women/5.jpg",
        username: "user10",
      },
      {
        id: 11,
        storyImageUrl: "https://i.imgur.com/4HmVYKq.png",
        userProfileUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        username: "user11",
      },
      {
        id: 12,
        storyImageUrl:
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        userProfileUrl: "https://randomuser.me/api/portraits/women/6.jpg",
        username: "user12",
      },
    ],
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [storyId, setStroyId] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (id) => {
    setOpen(true);
    setStroyId(id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        size="small"
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{ mr: 2 }} // Add some right margin to create space between the button and content
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </Button>

      <Box sx={{ flexGrow: 1, display: "flex" }}>
        {steps[activeStep].content.map((item) => (
          <Box
            sx={{
              height: "70px",
              width: "70px",
              p: 2,
              overflow: "hidden",
              borderRadius: "50%",
              border: "solid 2px #f4d03f",
              margin: "8px",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleClickOpen(item.id)}
          >
            <img
              src={item?.userProfileUrl}
              alt="Circular Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>
        ))}
      </Box>

      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        sx={{ ml: 2 }}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
      <StoryDialoge
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        storyId={storyId}
      />
    </Box>
  );
}
