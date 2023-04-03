import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export const BlogCard = ({ blog }) => {
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
            {blog.author.slice(0, 3)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={blog.title}
        subheader={blog.publish_date.slice(0, 10)}
      />
      <CardMedia
        component="img"
        height="200"
        image={blog.image}
        alt={blog.title}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blog.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "pink" }} />
          <Typography>{blog.likes}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <RemoveRedEyeIcon color="success" />
          <Typography>{blog.post_views}</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
