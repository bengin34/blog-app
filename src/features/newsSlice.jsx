import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:'news',

    initialState: {
        news:[],
        loading:false,
        error:false,
    },
    reducers:{
        fetchStart: (state) =>{
            state.loading = true
            state.error = false
        },
        getSuccess: (state, {payload: {data,url}}) =>{
            state.loading = false
            state[url] = data
        },

        fetchFail: (state) => {
            state.loading = false
            state.error = true
          },
    }

})

export const { fetchStart, getSuccess, fetchFail } = newsSlice.actions

export default newsSlice.reducer
