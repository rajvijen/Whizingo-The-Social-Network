import React from 'react';

import onlineIcon from '../../../utils/icons/onlineIcon.png';
import closeIcon from '../../../utils/icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/chatroom"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;