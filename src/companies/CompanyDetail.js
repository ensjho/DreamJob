import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DreamJobApi from "../Api";
import JobCardList from "../jobs/JobCardList";
import AuthContext from "../auth/AuthContext";
import Loading from "../general/Loading";

/** Renders Company Detail page. (Jobs of the company rendered) */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(function getUserCompanyJobs() {
    async function getCompanyAndJobs() {
      // Jobs => Array of job ids that user applied to 
      const { jobs } = currentUser

      let jobapplied = []
      for (let job of jobs) {
        jobapplied.push(job.id)
      }


      const companyResult = await DreamJobApi.getCompany(handle);
      //Add state:applied to jobs that have been applied by the currentUser 
      companyResult.jobs = companyResult.jobs.map(job => ({
        ...job,
        state: jobapplied.includes(job.id) ? "applied" : null
      }))
      setCompany(companyResult);
    }

    getCompanyAndJobs();
  }, [handle, currentUser]);


  /** POST requeset to apply */
  async function apply(id) {
    if (company) {
      let message = await DreamJobApi.applyToJob(id);
      // message => "applied" if post request is successful
      setCompany(companyResult => ({
        ...companyResult,
        jobs: companyResult.jobs.map(job =>
          job.id === id ? { ...job, state: message } : job
        )
      }));
    }
  }

  if (!company) return <Loading />

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      <h4 className="text-capitalize">{company.name}</h4>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} apply={apply}></JobCardList>
    </div>
  );
}

export default CompanyDetail;
