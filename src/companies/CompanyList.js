import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import CompanyCard from './CompanyCard';
import SearchForm from '../general/SearchForm';
import Loading from '../general/Loading';

/** Renders list of companies, loaded from API, Seacrh bar to look for companies
 * 
 *  Routed at /companies
*/

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  /** Triggered by search form submit; reloads companies. */
  async function search(search) {
    let companies = await JoblyApi.getCompanies(search);
    setCompanies(companies);
  }

  if (!companies) return <Loading/>;

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {companies.length
        ? (
          <div className="CompanyList-list">
            {companies.map(c => (
              <CompanyCard
                key={c.handle}
                handle={c.handle}
                name={c.name}
                description={c.description}
                logo_url={c.logo_url}
              />
            ))}
          </div>
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
    </div>
  );
}

export default CompanyList;
