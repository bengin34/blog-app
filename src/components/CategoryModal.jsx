import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";
import useBlogCall from "../hooks/useBlogCall";

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

const CategoryModal = ({ open, handleClose, category, setCategory }) => {
  

  const { postBlogData , editBlogData} = useBlogCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.id) {
      editBlogData("categories", category);
    } else {
      postBlogData("categories", category);
    }
    handleClose();
    setCategory({
      title: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
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
            New Category
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
              label="Category Name"
              name="name"
              id="category"
              type="text"
              variant="outlined"
              onChange={handleChange}
              required
            />

            <Button variant="contained" type="submit">
              Add Category
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CategoryModal;
