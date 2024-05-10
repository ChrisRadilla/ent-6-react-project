import { createSlice } from "@reduxjs/toolkit";
const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
import axios from 'axios';
import getToken from "../../utils/getToken";

const purchases = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
      setPurchases: (_value, action) => action.payload,  
    },
});

export const { setPurchases } = purchases.actions;

export default purchases.reducer;

export const getPurchasesThunk = (data) => (dispatch) => {
  axios.get(url, data, getToken()) 
  .then( res => dispatch(setPurchases(res.data)))
  .catch(err => console.log(err));
} 

export const postPurchasesThunk = (data) => (dispatch) => {
  axios.post(url, data, getToken())
  .then( res => dispatch(res.data))
  .catch(err => console.log(err));}