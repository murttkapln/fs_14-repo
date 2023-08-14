import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import {toastSuccessNotify} from "react-toastify"
import useAxios from "./useAxios";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
const {axiosWithToken}= useAxios()
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/stock/${url}`);
      dispatch(getStockSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  
  const getDeleteData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`);
      
      toastSuccessNotify(`${url} seuccessfully deleted`)
      getStockData("url");
      
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("`${url} can not be deleted`")
      console.log(error);
    }
  };

  return { getStockData };
};

export default useStockCall;
