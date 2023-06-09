import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import { useParams } from "react-router-dom";
import { modalStyle } from "../../styles/globalStyles";

const NewPostModal = ({ open, handleClose, blogs }) => {
  const { id } = useParams();
  const { comments } = blogs;

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
      id: "",
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
        <Box sx={modalStyle}>
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
