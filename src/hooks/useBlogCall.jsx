import { fetchFail, getSuccess, fetchStart } from "../features/blogSlice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const getBlogData = async (url) => {
    const BASE_URL = "http://32332.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      const { data } = await axios(`${BASE_URL}api/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteBlogData = async (url, id) => {
    const BASE_URL = "http://32332.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}api/${url}/${id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      getBlogData();
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getBlogData, deleteBlogData };
};

export default useBlogCall;
