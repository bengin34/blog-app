import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: "https://32332.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
  const getNews = axios.create({
    baseURL: `https://newsdata.io/api/1/news?apikey=${apiKey}&q=technology&language=en&category=technology`,
  });

  return { axiosWithToken, getNews };
};

export default useAxios;
