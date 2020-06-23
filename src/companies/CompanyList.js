import React, { useState, useEffect, useContext } from "react";
import DreamJobApi from "../Api";
import { Redirect } from "react-router-dom";
import CompanyCard from './CompanyCard';
import SearchForm from '../general/SearchForm';
import Loading from '../general/Loading';
import AuthContext from "../auth/AuthContext";

/** Renders list of companies, loaded from API, Seacrh bar to look for companies
 *  Routed at /companies
*/

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  /**Redierects to login if user is not loggend in */
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return (<Redirect to="/login" />);
  }

  /** Triggered by search form submit; reloads companies. */
  async function search(search) {
    let companies = await DreamJobApi.getCompanies(search);
    setCompanies(companies);
  }

  if (!companies) return <Loading />;

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
