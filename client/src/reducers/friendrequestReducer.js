import {POST_ACCEPTREQUEST, POST_CANCELREQUEST, POST_SENDREQUEST} from '../actions/types';

const sendrequest = {
  "response":false
};

export default function RegistrationReducer(state = sendrequest, action) {
  switch (action.type) {
    case POST_SENDREQUEST:
      return {
        ...state,
        response:action.payload
      };
    default:
      return state;
  }
}

