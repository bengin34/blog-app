import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ForumIcon from '@mui/icons-material/Forum';
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useParams } from "react-router-dom";
import ShareLinks from "./ShareLinks";
import { useState } from "react";

export const BlogCard = ({ blog }) => {
  const navigate = useNavigate()
  const {postLike} = useBlogCall()
  const {id} = useParams()
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
    <Card
      sx={{
        maxWidth: 300,
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {blog.author.slice(0, 2)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" >
            <MoreVertIcon />
          
          </IconButton>
        }
        title={blog.title.slice(0,50)}
        subheader={blog.publish_date.slice(0, 10)}
        
      />
      <ShareLinks open={open} blog={blog} onClose={handleClose}/>
      <CardMedia
        component="img"
        height="200"
        image={blog.image}
        alt={blog.title}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blog.content.slice(0,130)} ... 
        </Typography>
      </CardContent>
      <CardActions disableSpacing  >
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon onClick={() => postLike("likes",blog.id)}  color="error" />
          <Typography>{blog.likes}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <RemoveRedEyeIcon color="success" />
          <Typography>{blog.post_views}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ForumIcon color="info" />
          <Typography>{blog.comment_count}</Typography>
        </IconButton>
        <Button variant="outlined" onClick={() => navigate(`/blogs/${blog.id}`)} >Read More</Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
