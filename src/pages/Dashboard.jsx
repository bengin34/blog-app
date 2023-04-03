import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import Button from "@mui/material/Button";
import useBlogCall from "../hooks/useBlogCall"


const Dashboard = () => {

const { getBlogData} = useBlogCall()
  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <>
      <Container sx={{ margin: "1rem" }}>
        <Button variant="contained" sx={{ margin: "1rem" }}>
          New Blog
        </Button>

        <BlogCard />
      </Container>
    </>
  );
};

export default Dashboard;
