import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import Button from "@mui/material/Button";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);
  useEffect(() => {
    getBlogData("blogs");
  }, []);
  console.log(blogs);
  return (
    <>
      <Container sx={{ margin: "1rem" }}>
        <Button variant="contained" sx={{ margin: "1rem" }}>
          New Blog
        </Button>
        <Grid container>
          {blogs?.map((blog,index) => (
            <Grid item key={index}>
              <BlogCard blog={blog} key ={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
