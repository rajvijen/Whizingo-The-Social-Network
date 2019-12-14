import axios from "axios";

import { POST_SENDREQUEST, POST_ACCEPTREQUEST, POST_CANCELREQUEST } from "./types";

//send friend request

export const sendRequest = data => dispatch => {
    console.log("in action")
    axios
        .post("/api/friends/requestsent", data, { "headers": { "Content-Type": "application/json", "Authorization": localStorage.getItem("Token") } })
        .then(res =>
            dispatch({
                type: POST_SENDREQUEST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type:POST_SENDREQUEST,
                payload: err.response.data
            })
        );
};