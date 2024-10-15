import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, DialogActions } from "@mui/material";
import InputFileUpload from "./UploadFiles";
import InputTextFiled from "./InputTextField";
import Tags from "./SearchFiled";
import { useState } from "react";
import axios from "axios";
import { getDataFromLocalStorage } from "../utils/PersistantData";
import { useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
import CloseIcon from "@mui/icons-material/Close";

export default function CreatePost({
  open,
  handleClickOpen,
  handleClose,
  setOpen,
  file,
  setFile,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taggedPeople, setTaggedPeople] = useState([]);
  const [explosion, setIsExplosion] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      const updatedFiles = [...file, uploadedFile];
      setFile(updatedFiles);
      console.log(updatedFiles, "updatedFiles");
    } else {
      alert("Please upload a valid image file");
    }
  };
  const handleSubmit = async () => {
    if (!title || !description || !taggedPeople.length || !file.length) {
      alert("all fields are mandatory");
      return;
    }
    const taggedPeopleData = taggedPeople[taggedPeople.length - 1].map(
      (item) => item.title
    );
    setLoading(true);

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", description);
    formData.append("user_tags", JSON.stringify(taggedPeopleData));

    // Append each file
    file.forEach((f, index) => {
      formData.append(`images`, f);
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${
              getDataFromLocalStorage("user").access_token
            }`,
          },
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(`Upload progress: ${percentage}%`);
            // You can update your state here to reflect the progress
          },
        }
      );
      console.log(response.status, "responseStatus");
      if (response.status === 200) {
        setIsExplosion(true);
        console.log(response);
        setOpen(false);
      }
      if (response.status === 401) {
        setOpen(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("There was an error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            position: "relative", // Add relative positioning
          }}
        >
          {loading && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
                pointerEvents: "none", // Makes overlay non-interactive
              }}
            >
              <span>Loading...</span>{" "}
              {/* You can replace this with a spinner */}
            </Box>
          )}

          {file.length > 0 && file[0] && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box sx={{ width: "40%" }}>
                <img
                  src={URL.createObjectURL(file[0])}
                  alt="Uploaded"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: 2,
                  alignItems: "top",
                  justifyContent: "center",
                }}
              >
                {/* Title Input Field */}
                <InputTextFiled
                  title={"Please enter caption"}
                  onChange={(e) => setTitle(e.target.value)}
                />

                {/* Description Input Field */}
                <InputTextFiled
                  title={"Please enter the description"}
                  onChange={(e) => setDescription(e.target.value)}
                />

                {/* Tags Component */}
                <Tags
                  sx={{ width: "40px" }}
                  taggedPeople={taggedPeople}
                  setTaggedPeople={setTaggedPeople}
                />

                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ marginTop: "19px", width: "50%" }}
                >
                  Submit
                </Button>
              </Box>
              <DialogActions sx={{ position: "absolute", top: 0, right: 1 }}>
                <Button onClick={handleClose}>
                  <CloseIcon />
                </Button>
              </DialogActions>
            </Box>
          )}

          {/* File Upload Component */}
          {file.length === 0 && (
            <InputFileUpload handleImageChange={handleImageChange} />
          )}
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
const Bomb = () => {
  return <ConfettiExplosion particleCount={200} />;
};
