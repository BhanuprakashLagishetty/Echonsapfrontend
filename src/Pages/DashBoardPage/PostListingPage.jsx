import React, { useEffect, useMemo, useState } from "react";
import Post from "../../Components/Post";
import { Box } from "@mui/material";
import axios from "axios";
import { getDataFromLocalStorage } from "../../utils/PersistantData";

function PostListingPage() {
  const [postDetails, setPostDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/post", {
          headers: {
            Authorization: `Bearer ${
              getDataFromLocalStorage("user")?.access_token
            }`,
          },
        });
        if (response.status === 200) {
          setPostDetails(response.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  console.log(postDetails,"postDetails");
  const posts = useMemo(() => {
    return postDetails.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.body,
      imageUrl: item.asset_details[0].secure_url,
      likes: item?.likes,
      comments: item?.comments,
      updateAt: item?.updated_at,
      userTags: item?.user_tags,
      postedBy: item?.posted_by
    }));
  }, [postDetails]);

  return (
    <>
      {posts?.map((item,index) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "50px",
            position:"relative",
            zIndex:1
          }}
        >
          <Post
            image={item.imageUrl}
            caption={item.title}
            username={item.postedBy.username}
            userProfile={item.userImage}
            createdDate={item.updateAt}
            description={item.description}
            index={index}
          />
        </Box>
      ))}
    </>
  );
}

export default PostListingPage;
