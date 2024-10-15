import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../StoryDialoge/Story.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import StoryDisplay from "../StoryCarosals/StoryDisplay";
import StoryData from "../../MockData/StoryDisplayMock.json";
function Stories({ storyId }) {
  const [storyOpen, setStoryOpen] = useState(false);
  const [displayedStories, setDisplayedStories] = useState([]);
  useEffect(() => {
    const matchedIndex = StoryData.findIndex((item) => item.id === storyId);
    console.log(matchedIndex, "matchedIndex");
    if (matchedIndex !== -1) {
      const prevStories = StoryData.slice(0, matchedIndex);
      const nextStories = StoryData.slice(matchedIndex);
      setDisplayedStories([...nextStories, ...prevStories]);
      setStoryOpen(true);
    } else {
      setStoryOpen(false);
      setDisplayedStories([]);
    }
  }, [storyId]);
  return (
    <div className="container">
      <div className="swiper-button-prev slider-arrow"></div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 450,
          modifier: 6.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {storyOpen &&
          displayedStories.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                className="image"
                sx={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                  background: "white",
                  overflow: "hidden",
                }}
              >
                <StoryDisplay
                  imageUrl={item.url}
                  userProfile={item.userProfileUrl}
                  userName={item.username}
                  itemid={item.id}
                />
              </Box>
            </SwiperSlide>
          ))}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-button-next slider-arrow"></div>
      </div>
    </div>
  );
}

export default Stories;
