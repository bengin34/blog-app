import React from 'react'
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import image from  "../helper/background.jpg"

import { Link } from "react-router-dom"
import { Formik } from "formik"
import LoginForm, { loginScheme } from "../components/LoginForm"

const Login = () => {

    

  return (
    <Container maxWidth="lg">
    <Grid
      container
      justifyContent="center"
      direction="row-reverse"
      sx={{
        height: "100vh",
        p: 2,
      }}
    >
      <Grid item xs={12} mb={3}>
        <Typography variant="h3" color="primary" align="center">
          Blog APP
        </Typography>
      </Grid>

      <Grid item xs={12} sm={10} md={6}>
        <Avatar
          sx={{
            backgroundColor: "secondary.light",
            m: "auto",
            width: 40,
            height: 40,
          }}
        >
          {/* <LockIcon size="30" /> */}
        </Avatar>
        <Typography
          variant="h4"
          align="center"
          mb={4}
          color="secondary.light"
        >
          Login
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginScheme}
          onSubmit={(values, actions) => {
            login(values)
            actions.resetForm()
            actions.setSubmitting(false)
          }}
          component={(props) => <LoginForm {...props} />}
        ></Formik>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Link to="/register">Do you have not an account?</Link>
        </Box>
      </Grid>

      <Grid item xs={10} sm={12} md={6}>
        <Container justifyContent="center" >
          <img width="400px" height="300px" src={image} alt="img" />
        </Container>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Login
