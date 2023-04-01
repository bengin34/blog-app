import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import image from "../helper/background.jpg";
import Grid from "@mui/material/Grid";
import RegisterForm, { registerSchema } from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const {register} = useAuthCall()
  
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="info" align="center">
            BLOG APP
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "purple",
              m: "auto",
              marginBottom: "10px",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={2} color="purple">
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              image: "",
              bio: "",
              password: "",
              password2: "",
            }}

            validationSchema={registerSchema}
            

            onSubmit={(values, actions) => {
              register({...values, password2: values.password});
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          >
       
          </Formik>
          <Box  >
            <Link to="/"> Do you have account? </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
