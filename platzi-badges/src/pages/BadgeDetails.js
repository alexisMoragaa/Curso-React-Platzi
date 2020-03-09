import React from "react";
import {Link} from 'react-router-dom'

import ConfLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import './styles/BadgeDetails.css'

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div className="">
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img src={ConfLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-xs-12 col-md-6  BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <h2>Actions</h2>
            <div className="">
              <div className="">
                <Link
                  className="btn btn-primary mb-3 text-decoration-none"
                  to={`/badges/${badge.id}/edit`}
                >
                  Editar
                </Link>
              </div>
            </div>
            <div className="">
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
