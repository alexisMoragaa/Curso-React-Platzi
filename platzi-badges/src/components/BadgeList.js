import React from "react";
import "./styles/BadgeList.css";
import Gravatar from "./Gravatar";

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badge.map(Badge => {
          return (
            <li key={Badge.id}>
              <div className="row Badge__card shadow-sm">
                <div className="col-3 Badge__content-img">
                  <Gravatar className="Badge__img" email={Badge.email || 'null'} alt="" />
                </div>
                <div className="col-8">
                  <p className="Badge__p">
                    {Badge.firstName} {Badge.lastName}
                  </p>
                  <p className="Badge__p ">
                    {" "}
                    <a href="">@{Badge.twitter}</a>
                  </p>
                  <p className="Badge__p">{Badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
