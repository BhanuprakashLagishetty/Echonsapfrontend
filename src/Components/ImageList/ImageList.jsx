import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AlertDialogSlide from "../Dialog";

export default function StandardImageList() {
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
            sx={{ height: "300px", overflow: "hidden" }}
          >
            <img
              srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ height: "100%", width: "100%", cursor: "pointer" }}
              onClick={() => handleOpen(item.img)}
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
    img: "https://i.imgur.com/4HmVYKq.png",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    title: "Beach Sunset",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "Portrait",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    title: "Woman Smiling",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    title: "Winter Landscape",
  },
];
