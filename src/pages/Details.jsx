import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import NewPostModal from "../components/modals/NewPostModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NewBlogModal from "../components/modals/NewBlogModal";

const Detail = () => {
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blog);
  const { id } = useParams();
  const { readBlogData, deleteBlogData, editBlogData } = useBlogCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openBlog, setOpenBlog] = useState(false);
  const handleBlogOpen = () => setOpenBlog(true);

  useEffect(() => {
    readBlogData("blogs", id);
  }, []);

  const handleDelete = () => {
    console.log(id);
    deleteBlogData("blogs", id);
    navigate("/dashboard");
    console.log(`Deleting category with ID ${id}`);
  };

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
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                padding: "3rem",
              }}
            >
              {" "}
              <Box>
              <Typography
  variant="h3"
  sx={{
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      fontSize: "2rem"
    }
  }}
>
  {blogs?.title}
</Typography>
<Typography
  marginTop={2}
  variant="h6"
  sx={{
    "@media (max-width: 600px)": {
      fontSize: "1.1rem"
    }
  }}
>
  {blogs?.content}
</Typography>
<Typography
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      fontSize: "0.8rem"
    }
  }}
  marginTop={2}
  variant="p"
  marginBottom={5}
>
  Written by: {blogs?.author} Created Date:{" "}
  {blogs?.publish_date?.slice(0, 10)}{" "}
</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button variant="outlined" onClick={handleBlogOpen}>
                    <EditIcon />
                  </Button>
                  <NewBlogModal openBlog={openBlog} setOpen={setOpen} />
                  <Button variant="outlined" onClick={handleDelete}>
                    <DeleteIcon />
                  </Button>
                </Box>
              </Box>{" "}
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
            <Button
              sx={{ marginTop: "20px" }}
              variant="outlined"
              onClick={handleOpen}
            >
              Add New Comment
            </Button>
            <NewPostModal
              blogs={blogs}
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
            />
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Detail;
