import { useReducer} from "react";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);

  const {loading, error, catImage}= state

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
  
    dispatch({type:"START"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:"SUCCESS", payload: data[0].url})
      
    } catch (error) {
      dispatch({type:"FAIL", payload: "DATA CAN NOT BE FETCHED"})
     
      console.log(error);
    } 
  };
  console.log(error);
  console.log(catImage);

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseReducerExample;
