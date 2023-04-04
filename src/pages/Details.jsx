import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const Detail = () => {
  const [blogDetails, setBlogDetails] = useState("");
  const { blogs } = useSelector((state) => state.blog);
  const { id } = useParams();
  const { readBlogData } = useBlogCall();
  console.log(id);

  useEffect(() => {
    readBlogData("blogs", id);
  }, []);
  console.log(blogs);

  return (
    <Container>
      <Box>
        <Box padding={5} sx={{ display: "flex", justifyContent: "center" }}>
          <img width="50%" height="50%" src={blogs?.image} />
        </Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "300px",
            }}
          >
            <Typography variant="h3" sx={{ display: "block" }}>
              {blogs?.title}
            </Typography>
            <Typography marginTop={2} variant="h6">
              {blogs?.content}
            </Typography>
            <Typography marginTop={2} variant="p">
              Written by: {blogs?.author} Created Date:{" "}
              {blogs?.publish_date?.slice(0, 10)}{" "}
            </Typography>
            <Typography marginTop={2} variant="h6">
              Comments
            </Typography>
            {blogs?.comments?.map((item, index) => (
              <Grid key={index}>
                <Typography key={index}>{item}</Typography>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Detail;
