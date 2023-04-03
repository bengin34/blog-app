import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: "http://32332.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  return {axiosWithToken}
};

export default useAxios;
