import React from "react";
import JobCard from './JobCard';

/** Show list of job cards
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs, apply}) {
    return (
        <div className="JobCardList">
            {jobs.map(job => (
                <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    appliedState={job.state}
                    apply={apply}
                />
            ))}
        </div>
    );
}

export default JobCardList;
