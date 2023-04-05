import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import { modalStyle } from "../../styles/globalStyles";
import { useSelector } from "react-redux";

export default function NewBlogModal({ open, onClose, handleClose, blogs }) {
  const { categories } = useSelector((state) => state.blog);
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "p",
  });
  const { postBlogData, editBlogData, getBlogData } = useBlogCall();

  useEffect(() => {
    getBlogData("categories");
    if (blogs?.id) {
      setBlog(blogs);
    }
  }, [blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (blogs?.id) {
      editBlogData("blogs", blog);
    } else {
      postBlogData("blogs", blog);
    }
    handleClose();
    setBlog({
      title: "",
      content: "",
      image: "",
      category: "",
      status: "p",
      slug: "string",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setBlog({ ...blog, category: value });
    } else {
      setBlog({ ...blog, [name]: value });
    }
    // setBlog({ ...blog, [name]: value });
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
            New Blog
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
              label="Blog Title"
              name="title"
              id="title"
              type="text"
              variant="outlined"
              value={blog?.title || ""}
              onChange={handleChange}
              required
            />
            <TextField
              label="Blog Content"
              multiline
              name="content"
              id="content"
              type="text"
              variant="outlined"
              value={blog?.content || ""}
              onChange={handleChange}
              rows={5}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={blog?.image || ""}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                onChange={handleChange}
              >
              {categories.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
              </Select>
            </FormControl>
            <Button variant="contained" type="submit">
              Save Post
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
