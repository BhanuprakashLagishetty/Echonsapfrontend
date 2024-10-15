import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";

const images = [
  "https://via.placeholder.com/400x300/FF0000/FFFFFF?text=Image+1",
  "https://via.placeholder.com/400x300/00FF00/FFFFFF?text=Image+2",
  "https://via.placeholder.com/400x300/0000FF/FFFFFF?text=Image+3",
  "https://via.placeholder.com/400x300/FFFF00/FFFFFF?text=Image+4",
  "https://via.placeholder.com/400x300/FF00FF/FFFFFF?text=Image+5",
  "https://via.placeholder.com/400x300/00FFFF/FFFFFF?text=Image+6",
];

export default function StoryMuteUpdation() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
      />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={images[activeStep]}
          alt={`step ${activeStep}`}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
