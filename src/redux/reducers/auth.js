import { CHANGESTATUS, LOGIN, LOGOUT, REGISTER } from "../actionTypes"


const initialState = {}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
      return {
        ...state,
        //new state here
      }

    case REGISTER:
      return {
        ...state,
        //new state here
      }

    case LOGOUT:
      return {
        ...state,
        //new state here
      }

    default: return state
  }
}

export default authReducer