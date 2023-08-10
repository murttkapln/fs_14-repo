import axios from "axios"
import {toastSuccessNotify} from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom";
export const login = async (userData) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  try {
    const BASE_URL ="https://11544.fullstack.clarusway.com" 
    dispatch(fetchStart())
    const {data} = await axios.post(`${BASE_URL}/account/auth/login/`, userData);
    dispatch(loginSuccess(data))
    toastSuccessNotify("Logged in success")
    navigate("/stock")
  } catch (error) {
    console.log(error);
    dispatch(fetchFail())
  }
};
