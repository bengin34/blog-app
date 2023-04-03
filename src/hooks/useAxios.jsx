import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: "http://32332.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  const getNews = axios.create({
    method: 'GET',
    baseURL: 'https://google-news-api1.p.rapidapi.com/search',
    params: {language: 'en'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
      'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
    }
  });
  

  return {axiosWithToken, getNews}
};

export default useAxios;
