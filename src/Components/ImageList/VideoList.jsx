import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AlertDialogSlide from "../Dialog";

export default function VideoList() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <ImageList sx={{ width: 800 }} cols={3} rowHeight={300}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ height: "300px", overflow: "hidden"}}
          >
            <video
              srcSet={`${item.video}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.video}?w=200&h=200&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ height: "100%", width: "100%", cursor: "pointer",objectFit:"cover" }}
              onClick={() => handleOpen(item.video)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImage && (
        <AlertDialogSlide open={open} setOpen={setOpen} onClose={handleClose} selectedImage={selectedImage}>
         
        </AlertDialogSlide>
      )}
    </>
  );
}

const itemData = [
    {
      "video": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      "title": "Big Buck Bunny"
    },
    {
      "video": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      "title": "Sintel Trailer"
    },
    {
      "video": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      "title": "Sample MP4 File"
    },
    {
      "video": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      "title": "W3Schools Sample"
    }
  ];
  
  
