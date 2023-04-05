import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import  Instagram  from "@mui/icons-material/Instagram";
import Box from '@mui/material/Box'

const ShareLinks = ({ blog }) => {
  const shareUrl = `https://django-redux-blog-app.vercel.app/blogs/${blog.id}`;
  const shareTitle = blog.title;

  const instagramShareUrl = `https://www.instagram.com/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareTitle}`;

  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
      <Tooltip title="Share on Instagram" placement="top">
        <IconButton sx={{color:'#FD1D1D'}}
       
       aria-label="share on instagram"
       href={instagramShareUrl}
       target="_blank">
          <Instagram />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Twitter" placement="top">
        <IconButton
        sx={{color:'#1DA1F2'}}
          aria-label="share on twitter"
          href={twitterShareUrl}
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Facebook" placement="top">
        <IconButton
        sx={{color:'#4167B2'}}
       
          aria-label="share on facebook"
          href={facebookShareUrl}
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on LinkedIn" placement="top">
        <IconButton
        sx={{color:'#0e76a8'}} 
          aria-label="share on linkedin"
          href={linkedinShareUrl}
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ShareLinks;
