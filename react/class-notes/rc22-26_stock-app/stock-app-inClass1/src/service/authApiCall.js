import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { fetchStart } from "../features/authSlice";


//? Bir hook sadece bir react componenti veya başka bir custom hook içerisinde çağrilabilir. Bir Js fonsksiyonu içerisinde hook çağrılamaz
export const login = async (userData) => {
const navigate = useNavigate()
const dispatch = useDispatch()

  const BASE_URL = "https://11544.fullstack.clarusway.com";
  dispatch(fetchStart())
  try {
    const { data } = await axios.post(
      `${BASE_URL}/account/auth/login/`,
      userData
    );
    dispatch(loginSuccess(data))
    toastSuccessNotify("Login islemi basarili")
    navigate("/stock")
    // console.log(data);
  } catch (error) {
    console.log(error);
    dispatch(fetchFail(data))
  }
};

//! ÖDEV yukarıdaki kodu nasıl Custom hook olarak yazarız????? 
