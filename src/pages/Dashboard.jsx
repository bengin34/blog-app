import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import React, { useEffect , useState} from "react";
import BlogCard from "../components/BlogCard";
import Button from "@mui/material/Button";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import NewsList from "../components/NewsList";
import NewBlogModal from "../components/modals/NewBlogModal";
import { useParams } from "react-router-dom";


const Dashboard = () => {
  const { getBlogData, getNewsData } = useBlogCall();
  const {id} = useParams()
  const { blogs } = useSelector((state) => state.blog);
  const { news } = useSelector((state) => state.blog);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    getBlogData("blogs");
    getNewsData();
  }, []);


  return (
    <Paper >
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
          <Grid  sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'start',
      marginBottom:'1rem'
    }} container md={9} xs={12} spacing={3}>

            {blogs.length && blogs?.map((blog) => (
              <Grid item key={blog.id}>
                <BlogCard blog={blog} key={blog.id}  />
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ marginTop: "1rem", display:'flex', justifyContent:'center',  }} item md={3} xs={12}>
            <NewsList item news={news} />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Dashboard;
