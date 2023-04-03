import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import Button from "@mui/material/Button";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import NewsList from "../components/NewsList";

const Dashboard = () => {
  const { getBlogData, getNewsData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);
  useEffect(() => {
    getBlogData("blogs");
    getNewsData();
  }, []);
  console.log(blogs);
  return (
    <>
      <Container sx={{ margin: "1rem" }} maxWidth="%100">
        <Button variant="contained" sx={{ margin: "1rem" }}>
          New Blog
        </Button>
        <Grid container>
          {" "}
          <Grid container xs={9} spacing={3} >
            {blogs?.map((blog, index) => (
              <Grid item key={index} >
                <BlogCard blog={blog} key={index} />
              </Grid>
            ))}
          </Grid>
            <Grid item xs={3}>
              <NewsList item />
            </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
