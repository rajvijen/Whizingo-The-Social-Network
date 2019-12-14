import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
import NavBar from "./../../layout/Navbar";
import Particles from 'react-particles-js';

export default function SignIn() {
  // const [name, setName] = useState('');
  const [room, setRoom] = useState("");

  return (
    <React.Fragment>
      <NavBar />
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          {/* <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div> */}
          <div>
            <input
              placeholder="Interest"
              className="joinInput mt-20"
              type="text"
              onChange={event => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={e => (!room ? e.preventDefault() : null)}
            to={`/chatroom/chat?room=${room}`}
          >
            <button className={"button mt-20"} type="submit">
              Join
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
