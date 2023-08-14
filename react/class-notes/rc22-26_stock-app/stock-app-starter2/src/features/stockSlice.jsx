import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    brands: [],
    products: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getStockSuccess: (state, {payload:{data, url}}) => {
        state.loading= false,
        state[url] = data
    },
    // getBrandsSuccess: ({payload}) => {
    //     state.loading= false,
    //     state.brands = payload
    // },
    // getFirmsSuccess: (state, {payload}) => {
    //     state.loading= false,
    //     state.firms = payload
    // },
    // getSalesSuccess: (state, {payload}) => {
    //     state.loading= false,
    //     state.sales = payload
    // },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getStockSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
