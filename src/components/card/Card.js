import React from "react";
import "../card/card.css";

export default function Card(props) {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1 hoverable">
          <img
            src={props.user.profileImg}
            className="circle responsive-img"
            alt="profile"
          />
          <div className="card-content white-text">
            <span className="card-title">{props.user.name}</span>
            <p>{props.user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
