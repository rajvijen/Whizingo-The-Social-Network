import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer";
import profileReducer from "./profileReducer";
import friendrequestReducer from './friendrequestReducer';

export default combineReducers({
  registration: authReducer,
  errors: errorReducer,
  post: postReducer,
  profile: profileReducer,
  request: friendrequestReducer
});
