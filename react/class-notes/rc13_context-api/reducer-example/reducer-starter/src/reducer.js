export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...initialState, loading: true };

    case "SUCCESS":
      return {
        ...initialState,
        catImage: action.payload,
        error: "",
        loading: false,
      };

    case "FAIL":
      return {
        ...initialState,
        catImage: "",
        error: action.payload,
        loading: false,
      };

    default:
      break;
  }
};

//? type action

//! {type: "SUCCESS", payload:catImage}
//! {type: "START"}
