import  Paper  from '@mui/material/Paper'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import Button  from '@mui/material/Button'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {token} = useSelector(state => state.auth)

  const getBlogs = async () =>{
    const BASE_URL = "http://32332.fullstack.clarusway.com/" 
    const { data } = await axios(`${BASE_URL}api/blogs/`, {
      headers: {Authorization: `Token ${token}`}
    })
    console.log(data)
  }
  useEffect(() => {
    getBlogs()
  },[])

  return (
    <>
    <Container sx={{margin:"1rem"}} >
      <Button variant='contained' sx={{margin:'1rem'}} >New Blog</Button>
     

      <BlogCard  />
     
    </Container>
    </>
  )
}

export default Dashboard


