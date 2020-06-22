import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api";
import JobCardList from "../jobs/JobCardList";

/** Company Detail page.
 * Renders information about company, along with the jobs at that company.
 */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompanyAndJobs() {
      const companyResult = await JoblyApi.getCompany(handle);
      setCompany(companyResult);

    }

    getCompanyAndJobs();
  }, [handle]);


  if (!company) return (<div> loading! </div>)

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      <h4 className="text-capitalize">{company.name}</h4>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs}></JobCardList>
    </div>
  );
}

export default CompanyDetail;
