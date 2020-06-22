import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import Search from "../general/SearchForm";
import JobCardList from "./JobCardList";
import Loading from "../general/Loading";

/** Renders a page with list of Jobs (using JobCardList and JobCard);
 *  App -> Routes -> JobList
 * 
 *  Routed at /jobs
 */
function JobList(){
  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    search();
  }, []);

    /** Triggered by search form submit; reloads jobs. */
    async function search(search) {
      let jobs = await JoblyApi.getJobs(search);
      setJobs(jobs);
    }

  if (!jobs) return <Loading />;

  return (
     <div className="JobList col-md-8 offset-md-2">
       <Search searchFor={search} />
      {jobs.length
        ? <JobCardList jobs={jobs} />
        : <p className="lead">Sorry, no results were found!</p>
      }
    </div>
  )
}

export default JobList;