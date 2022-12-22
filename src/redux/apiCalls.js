/** @format */

import { loginStart, loginFailure, loginSuccess } from './userSlice'
import { publicRequest, userRequest } from '../requests'
import {
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
} from './productSlice'

export const login = async (dispatch, user) => {
  // Take dispatch and user info
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('auth/login', user) // Take user info from login page and make post request
    dispatch(loginSuccess(res.data)) // payload here will be res.data which is user info
  } catch (error) {
    dispatch(loginFailure())
  }
}

export const getProducts = async (dispatch) => {
  // Take dispatch only
  dispatch(getProductStart())
  try {
    const res = await publicRequest.get('/products') // Take products data
    dispatch(getProductSuccess(res.data)) // payload here will be res.data which is products data
  } catch (error) {
    dispatch(getProductFailure())
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    const res = await userRequest.delete(`/products/delete/${id}`)
    dispatch(deleteProductSuccess(res.data))
  } catch (error) {
    dispatch(deleteProductFailure())
  }
}

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart())
  try {
    //  const res = await userRequest.update(`/products/update/${id}`)
    dispatch(updateProductSuccess(id, product))
  } catch (error) {
    dispatch(updateProductFailure())
  }
}

export const addProduct = async (product, dispatch) => {
  // Take dispatch only
  dispatch(addProductStart())
  try {
    const res = await userRequest.post('products', product)
    dispatch(addProductSuccess(res.data))
  } catch (error) {
    dispatch(addProductFailure())
  }
}
