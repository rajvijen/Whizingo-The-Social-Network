import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div role="group">
      <Link to="/edit-profile">
        <i /> Edit Profile
      </Link>
      <hr></hr>

      <Link to="/add-experience">
        <i />
        Add Experience
      </Link>
      <hr></hr>
      <Link to="/add-education">
        <i />
        Add Education
      </Link>
    </div>
  );
};
export default ProfileActions;
