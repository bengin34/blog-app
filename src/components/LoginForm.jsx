import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import LoadingButton from "@mui/lab/LoadingButton"

import {Form} from "formik"
import { useSelector } from "react-redux"
import { object, string } from "yup"

export const loginScheme = object({
    email: string()
      .email("Lutfen valid bir email giriniz")
      .required("Email zorunludur"),
      password: string()
      .required("password zorunludur")
      .min(8, "password en az 8 karakter olmalıdır")
      .max(20, "password en fazla 20 karakter olmalıdır")
      .matches(/\d+/, "Password bir sayı içermelidir")
      .matches(/[a-z]/, "Password bir küçük harf içermelidir")
      .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  })


const LoginForm = () => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          
      

        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
         

        />
        <LoadingButton
        //   loading={loading}
          loadingPosition="center"
          variant="contained"
          type="submit"
        >
          Submit
        </LoadingButton>
      </Box>
    </Form>
  )
}

export default LoginForm
