import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    image:null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
/**
* @description This function sets the `loading` property to `true` and sets the 
* `error` property to `false`.
* 
* @param { object } state - The `state` input parameter is a reference to the current 
* state of the application's data store. It provides an opportunity for the function 
* to modify the state as needed.
*/
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
/**
* @description This function updates the local state of a React component with the 
* user's details and token after a successful login attempt. It sets the loading 
* status to false and fills the user's usernameimage and isAdmin details using the 
* payload from the server response.
* 
* @param { object } state - The `state` input parameter is a reference to the current 
* state of the application's global state.
*/
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.image = payload?.user?.image
      state.isAdmin = payload?.user?.is_superuser;
      state.token = payload?.key;
    },
/**
* @description This function resets the state of the application's login status to 
* a clean slate:
* 
* 	- `state.loading` is set to `false`
* 	- `state.currentUser` is set to `null`
* 	- `state.token` is set to `null`
* 
* @param { object } state - The `state` input parameter is the current state of the 
* application's login session.
*/
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
/**
* @description This function is a reducer function for handling the `registerSuccess` 
* action. It updates the state of the application by setting the `loading` property 
* to `false`, and updating the `currentUser`, `image`, and `token` properties with 
* the values from the `payload` object.
* 
* @param { object } state - The `state` input parameter is a reference to the current 
* state of the application.
*/
    registerSuccess: (state, {payload}) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.image = payload?.image;
      state.token = payload?.token;
      state.error = false;
    },
/**
* @description This function sets the `loading` property to `false` and sets the 
* `error` property to `true` when a fetch failure occurs.
* 
* @param { object } state - The `state` input parameter is an object that contains 
* the current state of the application's data and is being passed as a reference to 
* the function.
*/
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;     
    }
  },
});


export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,

} = authSlice.actions;
export default authSlice.reducer
