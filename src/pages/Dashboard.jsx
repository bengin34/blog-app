import  Paper  from '@mui/material/Paper'
import { Container } from '@mui/system'
import React from 'react'
import BlogCard from '../components/BlogCard'

const Dashboard = () => {
  return (
    <>
    <Container sx={{margin:"1rem"}} >

      <BlogCard />
    </Container>
    </>
  )
}

export default Dashboard
