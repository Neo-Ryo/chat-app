import React from "react";
import "./Style.css";

const Image = "https://randomuser.me/api/portraits/men/16.jpg";
const User = {
  name: "Coleman",
  surname: "Shawn"
};
const FullName = User.surname + " " + User.name;
let status = false;

const StatusText = stat => {
  if (stat === true) {
    return "online";
  } else {
    return "offline";
  }
};

const Contact = () => {
  return (
    <div className="Contact">
      <img className="avatar" src={Image} />
      <div className="name">
        <p>{FullName}</p>
        <div className="status">
          <div className={status ? "status-online" : "status-offline"}></div>
          <div className="status-text">
            <p>{StatusText(status)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
