import authReducer from "./auth"
import { combineReducers } from "redux"


const appReducer = combineReducers({
  authReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer