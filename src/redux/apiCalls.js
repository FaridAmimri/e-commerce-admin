/** @format */

import { loginStart, loginFailure, loginSuccess } from './userSlice'
import { publicRequest } from '../requests'

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
