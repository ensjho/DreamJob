import React from "react";
import { Link } from "react-router-dom";
import defaultLogo from "../img/build.svg";
import "./CompanyCard.css"

/*Renders a company card on Company List */

function CompanyCard({ name, description, handle }) {
  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{name}</span>
          <img src={defaultLogo} alt={`${name} Logo`} />
        </h6>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;