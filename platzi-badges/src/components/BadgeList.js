import React from "react";
import "./styles/BadgeList.css";
import Gravatar from "./Gravatar";
import BadgeListItem from "./BadgeListItem";
import {Link} from 'react-router-dom'

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badge.map(badge => {
          return (
            <li key={ badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                    <BadgeListItem badge={badge}/>
                </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
