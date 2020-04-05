import React from "react";
import "./Style.css";
import PropsTypes from 'prop-types'


// let status = false;

// const StatusText = stat => {
//   if (stat === true) {
//     return "online";
//   } else {
//     return "offline";
//   }
// };

class Contact extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    online: false,
  }
}
  render(){
    return(
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />
      <div className="name">
        <p>{this.props.name}</p>
        <div className="status"
        onClick={event =>{
          const newState = !this.state.online;
          this.setState({online: newState});
        }}
        >
          <div className={this.state.online ? "status-online" : "status-offline"}></div>
          <div className="status-text">
            <p>{this.state.online? 'online' : 'offline'}</p>
          </div>
        </div>
      </div>
    </div>);
  }
}

Contact.PropsTypes ={
  name: PropsTypes.string.isRequired,
  avatar: PropsTypes.string.isRequired,
  online: PropsTypes.bool,
};
export default Contact;
