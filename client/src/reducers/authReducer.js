import { REGISTRATION, LOGIN } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isRegistered: false,
  isAuthenticated: false,
  userData: {}
  // token: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION:
      // console.log("in reducer", action.payload, "isRegistered ", action.isRegistered)
      return {
        ...state,
        isRegistered: action.isRegistered,
        userData: action.payload
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userData: action.payload
        // token: action.payload.token
      };

    default:
      return state;
  }
}

// import { SET_CURRENT_USER } from "../../actions/types";
// import isEmpty from "../../validation/is-empty";

// const initialState = {
//   isAuthenticated: false,
//   user: {}
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case SET_CURRENT_USER:
//       return {
//         ...state,
//         isAuthenticated: !isEmpty(action.payload),
//         user: action.payload
//       };
//     default:
//       return state;
//   }
// }
