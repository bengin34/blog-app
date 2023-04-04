import { fetchFail, getSuccess, fetchStart } from "../features/blogSlice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken, getNews } = useAxios();

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios(`${BASE_URL}api/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      const { data } = await axiosWithToken.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const readBlogData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/${id}`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getNewsData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await getNews.get();
      dispatch(getSuccess({ data: data.results, url: "news" }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteBlogData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/${url}/${id}`);
      toastSuccessNotify(`ID: ${id} successfuly deleted`);
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`This can not be deleted`);
    }
  };

  const postBlogData = async (url, blog) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, blog);
      toastSuccessNotify(`Blog successfuly added`);
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };
  const postLike = async (url, blogId) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${blogId}/`);
      getBlogData("blogs");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  

  const editBlogData = async (url, blog) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`api/${url}/${blog.id}/`, blog);
      toastSuccessNotify(`${url} successfuly updated`);
      getBlogData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be updated`);
    }
  };


  const postCommentData = async (url, comment) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${comment.post}/`, comment);
      toastSuccessNotify(`Comment successfuly added`);
      getBlogData(url);
      readBlogData("blogs",comment.post);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`Comment can not be posted`);
    }
  };

  return {
    getBlogData,
    deleteBlogData,
    getNewsData,
    postBlogData,
    editBlogData,
    readBlogData,
    postCommentData,
    postLike
  };
};

export default useBlogCall;
