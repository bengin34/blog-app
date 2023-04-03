import { fetchFail, getSuccess, fetchStart } from "../features/blogSlice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const {axiosWithToken, getNews} = useAxios()

  const getBlogData = async (url) => {
  
    dispatch(fetchStart());

    try {
      // const { data } = await axios(`${BASE_URL}api/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      const {data} = await axiosWithToken.get(`api/${url}/`)
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getNewsData = async (url) => {
  
    dispatch(fetchStart());

    try {
      // const { data } = await axios(`${BASE_URL}api/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      const {data} = await getNews.get()
      console.log(data.news.news)
      // dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteBlogData = async (url, id) => {

    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/${url}/${id}`)
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getBlogData, deleteBlogData,getNewsData };
};

export default useBlogCall;
