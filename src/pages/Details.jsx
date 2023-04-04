import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

const Detail = () => {
  const [blogDetails, setBlogDetails] = useState("");
  const { blogs } = useSelector((state) => state.blog);
  const { id } = useParams();
  const { readBlogData } = useBlogCall();

  useEffect(() => {
    readBlogData("blogs", id);
  }, []);
  console.log(blogs);

  return (
    <Container>
      <Box>
        <Box padding={5} sx={{ display: "flex", justifyContent: "center" }}>
          <img width="50%" src={blogs?.image} />
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
            <Paper  sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                padding: "3rem",
              }}>
              {" "}
              <Typography variant="h3" sx={{ display: "block" }}>
                {blogs?.title}
              </Typography>
              <Typography marginTop={2} variant="h6">
                {blogs?.content}
              </Typography>
              <Typography marginTop={2} variant="p" marginBottom={5}>
                Written by: {blogs?.author} Created Date:{" "}
                {blogs?.publish_date?.slice(0, 10)}{" "}
              </Typography>{" "}
            </Paper>

            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                margin: "10px",
              }}
            >
              {blogs?.comments?.map((item, index) => (
                <Paper key={index} style={{ padding: "40px 20px", margin: 10 }}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar alt="Remy Sharp" src={blogs?.image} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                      <h4 style={{ margin: 0, textAlign: "left" }}>
                        {item?.user}
                      </h4>
                      <p style={{ textAlign: "left" }}>{item?.content} </p>
                      <p style={{ textAlign: "left", color: "gray" }}>
                        posted {item?.time_stamp.slice(11, 16)} /{" "}
                        {item?.time_stamp.slice(0, 10)}
                      </p>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Paper>
            <Button sx={{ marginTop: "20px" }} variant="outlined">
              Add New Post
            </Button>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Detail;
