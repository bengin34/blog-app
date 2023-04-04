import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NewPostModal = ({ open, handleClose, blogs }) => {
  const { id } = useParams()
  const { comments} = blogs;
 
  const [comment, setComment] = useState({
    content: "",
    post: id,
   
  });

  const { postCommentData } = useBlogCall();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    postCommentData("comments", comment);
    handleClose();
    setComment({
      content: "",
      id:"",
     
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" marginBottom={1}>
            New Post
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Content"
              name="content"
              id="content"
              type="text"
              variant="outlined"
              onChange={handleChange}
              required
            />
            {/* <TextField
              label="posts"
              name="posts"
              id="posts"
              type="number"
              variant="outlined"
              onChange={handleChange}
              required
            /> */}

            <Button variant="contained" type="submit">
              Add Comment
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default NewPostModal;
