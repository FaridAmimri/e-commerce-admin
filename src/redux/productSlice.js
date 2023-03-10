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
    // GET all products
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

    // DELETE a product
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
    },

    // UPDATE a product
    updateProductStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false
      state.products[
        state.products.findIndex((product) => product._id === action.payload.id)
      ] = action.payload.product
    },
    updateProductFailure: (state) => {
      state.isFetching = false
      state.error = true
    },

    // ADD a product
    addProductStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false
      state.products.push(action.payload)
    },
    addProductFailure: (state) => {
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
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} = productSlice.actions
export default productSlice.reducer
