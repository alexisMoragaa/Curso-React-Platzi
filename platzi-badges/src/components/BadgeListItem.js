import React from 'react'

import Gravatar from "./Gravatar";

function BadgeListItem(Props){
    return (
       
          <div className="row Badge__card shadow-sm">
            <div className="col-3 Badge__content-img">
              <Gravatar className="Badge__img" email={Props.badge.email || 'null'} alt="" />
            </div>
            <div className="col-8">
              <p className="Badge__p">
                {Props.badge.firstName} {Props.badge.lastName}
              </p>
              <p className="Badge__p ">
                {" "}
                <a href="">@{Props.badge.twitter}</a>
              </p>
              <p className="Badge__p">{Props.badge.jobTitle}</p>
            </div>
          </div>
       
      );
}
export default BadgeListItem