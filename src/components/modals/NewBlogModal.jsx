import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import { modalStyle } from "../../styles/globalStyles";


export default function NewBlogModal({ open, onClose, handleClose }) {
const [blog,setBlog] = useState({
    title:"",
    content:"",
    image:"",
    category: "",
    status:"p",
})
const {postBlogData} = useBlogCall()

const handleSubmit = (e) => {
    e.preventDefault()
    postBlogData("blogs",blog)
    handleClose()
    setBlog({
        title:"",
        content:"",
        image:"",
        category: "",
        status:"p",
        slug:"string"
    })
}

  const handleChange = (e) => {
    const {name,value} = e.target
    setBlog({...blog, [name]: value})
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
              flexDirection: { xs: "column-reverse", md: "column" },
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
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              label="Category"
              name="category"
              id="category"
              type="number"
              variant="outlined"
              onChange={handleChange}
            />            
            <Button variant="contained" type="submit" >Save Post</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
