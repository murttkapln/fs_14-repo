// import axios from "axios"
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
// import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice"

// // //? Bir hook sadece bir react component ve bir custom hook icersinde cagrilabilir. Bir Js fonksiyonu icerisinde hook cagiralamaz.

// export const login = async (userData) => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const BASE_URL = "https://11544.fullstack.clarusway.com"

//   dispatch(fetchStart())
//   try {
//     const { data } = await axios.post(
//       `${BASE_URL}/account/auth/login/`,
//       userData
//     )
//     dispatch(loginSuccess(data))
//     toastSuccessNotify("login islemi basarili")
//     navigate("/stock")
//   } catch (error) {
//     console.log(error)
//     dispatch(fetchFail())
//   }
// }

import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (userData) => {
    // const BASE_URL = "https://11544.fullstack.clarusway.com";

   
    

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("login islemi basarili");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.non_field_errors[0]);
    }
  };
// ----------------------------------------------------
  const logout = async (userData) => {
    // const BASE_URL = "https://11544.fullstack.clarusway.com";

    dispatch(fetchStart());
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("logout islemi basarili");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.non_field_errors);
    }
  };
  //------------------------------------------------
  const reggister = async (userData) => {
    // const BASE_URL = "https://11544.fullstack.clarusway.com";

    dispatch(fetchStart());
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/account/register/`, userData);
      dispatch(registerSuccess());
      toastSuccessNotify("kayit islemi basarili");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("kayit islemi basarisiz olmustur");
    }
  };

  return { login, logout , reggister};
};

export default useAuthCall;
