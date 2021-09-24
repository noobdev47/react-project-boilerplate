import AuthService from "../../api-services/authService"
import { LOGIN, REGISTER, LOGOUT } from "../actionTypes"

export const login = (params, history) => async dispatch => {
  
  try {
    const data = await AuthService.login(params)
    dispatch({ type: LOGIN, payload: data })
    history.push('route to go to here')
  } catch (err) {
    throw err
  }
}

export const register = (params, history) => async dispatch => {
  try {
    const data = await AuthService.register(params)
    dispatch({ type: REGISTER, payload: data })
    history.push('route to go to here')
  } catch (err) {
    throw err
  }
}

export const logout = (params, socket, history) => async dispatch => {
  try {
    await AuthService.logout(params, socket)
    dispatch({ type: LOGOUT })
    history.push('route to go to here')
  } catch (err) {
    throw err
  }
}