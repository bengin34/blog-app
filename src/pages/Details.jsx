
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import  Container  from "@mui/material/Container";
import  Box  from "@mui/material/Box";
import useBlogCall from "../hooks/useBlogCall";

const Detail = () => {
  const [blogDetails,setBlogDetails] = useState("")
  const {id} = useParams()
  const { readBlogData} = useBlogCall()
  console.log(id)

useEffect(() => {
  readBlogData("blogs",id)
},[])

  return (
    <Container>
       <Box sx={{ height: '90vh' }} >

       </Box>
    </Container>
  )
}

export default Detail
