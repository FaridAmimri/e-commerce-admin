/** @format */

import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    error: false
  },
  reducers: {
    // Get all products
    getProductStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false
      state.products = action.payload
    },
    getProductFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    // Delete a product
    deleteProductStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false
      state.products.splice(
        state.products.findIndex((product) => product._id === action.payload),
        1 // Delete just on product. Here it's working only with redux toolkit
      )
    },
    deleteProductFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure
} = productSlice.actions
export default productSlice.reducer
