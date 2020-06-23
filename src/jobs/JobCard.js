import React from "react";
import "./JobCard.css";


function JobCard({id, title, salary, equity, appliedState, apply  }) {

  const handleApply = evt => apply(id)

  return (
    <div className="JobCard card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{title}</span>
        </h6>
        <div>Salary: ${salary}</div>
        <div>Equity: {equity * 100}%</div>
        <button
          className="btn btn-danger font-weight-bold text-uppercase float-right"
          onClick={handleApply}
          disabled={appliedState}
        >
          {appliedState ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
