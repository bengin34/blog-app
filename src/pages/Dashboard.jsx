import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import React, { useEffect , useState} from "react";
import BlogCard from "../components/BlogCard";
import Button from "@mui/material/Button";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import NewsList from "../components/NewsList";
import NewBlogModal from "../components/NewBlogModal";

const Dashboard = () => {
  const { getBlogData, getNewsData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    getBlogData("blogs");
    // getNewsData();
  }, []);
  console.log(blogs);
  return (
    <>
      <Container sx={{ margin: "1rem" }} maxWidth="%100">
        <Button
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={handleOpen}
        >
          New Blog
        </Button>
        <NewBlogModal open={open} setOpen={setOpen} handleClose={handleClose} />
        <Grid container>
          {" "}
          <Grid container md={9} xs={12} spacing={3}>
            {blogs?.map((blog, index) => (
              <Grid item key={index}>
                <BlogCard blog={blog} key={index} />
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ marginTop: "1rem" }} item md={3} xs={12}>
            <NewsList item />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
