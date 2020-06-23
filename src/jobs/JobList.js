import React, { useState, useEffect } from "react";
import DreamJobApi from "../Api";
import Search from "../general/SearchForm";
import JobCardList from "./JobCardList";
import Loading from "../general/Loading";

/** Renders a page with list of Jobs (using JobCardList and JobCard);
 *  App -> Routes -> JobList
 *  Routed at /jobs
 */
function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(search) {
    let jobs = await DreamJobApi.getJobs(search);
    setJobs(jobs);
  }


  /** POST requeset to apply */
  async function apply(id) {
    let message = await DreamJobApi.applyToJob(id);
    // message => "applied" if post request is successful
    setJobs(jobs => jobs.map(job =>
      job.id === id ? {...job, state:message}:job
    ))
  }

if (!jobs) return <Loading />;

return (
  <div className="JobList col-md-8 offset-md-2">
    <Search searchFor={search} />
    {jobs.length
      ? <JobCardList jobs={jobs} apply={apply} />
      : <p className="lead">Sorry, no results were found!</p>
    }
  </div>
)
}

export default JobList;