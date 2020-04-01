import React from "react";
import "./Style.css";
import PropsTypes from 'prop-types'


let status = false;

const StatusText = stat => {
  if (stat === true) {
    return "online";
  } else {
    return "offline";
  }
};

const Contact = (props) => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name}/>
      <div className="name">
        <p>{props.name}</p>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"}></div>
          <div className="status-text">
            <p>{StatusText(status)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



Contact.PropsTypes ={
  name: PropsTypes.string.isRequired,
  avatar: PropsTypes.string.isRequired,
  online: PropsTypes.bool.isRequired,
};
export default Contact;
