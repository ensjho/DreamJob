import React, { useState, useContext } from "react";
import JoblyApi from "../JoblyApi"
import AuthContext from '../AuthContext';
import { useHistory } from "react-router-dom";


/** Sign Up Form for adding a new user */

// consider moving form logic up to parent

function Login() {
  // set history state for potential redirect
  let history = useHistory()

  const [formData, setFormData] = useState({});
  const [signUpPage, setLogInOrSignUp] = useState(false);
  const {setToken} = useContext(AuthContext)

  // handle changes in form to keep React happy
  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log(name,value)
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  // add user to DB
  // TODO: pick better names here
  const gatherInput = evt => {
    evt.preventDefault();
    async function registerUser(){
      try {
        let userToken = await JoblyApi.register(formData);
        setToken(userToken);
        history.push('/jobs');
      } catch (err) {
        alert("INVALID REGISTRATION!")
      }
    }
    registerUser();
  }
  
  // log in the user, update token, redirect to Jobs page
  const handleLogIn = evt => {
    evt.preventDefault();
    async function fetchUser(){
      try{
      let userToken = await JoblyApi.logIn(formData);
      setToken(userToken);
      history.push('/jobs');
      }catch(err){
        alert("INVALID LOG IN!")
      }
    }
    fetchUser();
  }


  let jsxLogIn;

  // Log in form, displayed if login button is pressed
  if (signUpPage === false) {
    jsxLogIn = (
      <form className="SignUpForm" onSubmit={handleLogIn}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            onChange={handleChange}
            name="username"
            placeholder="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            id="password"
          />
        </div>
        <button>Submit</button>
      </form>
    )
  }

  // SIGNUP PAGE FORM, displayed when signup button is pressed
  if (signUpPage === true) {
    jsxLogIn = (
      <div>
        <form className="SignUpForm" onSubmit={gatherInput}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              onChange={handleChange}
              name="username"
              placeholder="username"
              value={formData.username}
              id="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              id="password"
            />
          </div>
          <div>
            <label htmlFor="first_name">First Name: </label>
            <input
              onChange={handleChange}
              name="first_name"
              placeholder="firstName"
              value={formData.first_name}
              id="firstName"
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name: </label>
            <input
              onChange={handleChange}
              name="last_name"
              placeholder="lastName"
              value={formData.last_name}
              id="lastName"
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              onChange={handleChange}
              name="email"
              placeholder="email"
              value={formData.email}
              id="email"
            />
          </div>
          <button id="addNewUser">Create Account</button>
        </form>
      </div>)
  }

  // button toggle for displaying correct form
  const handleToggleLog = () => setLogInOrSignUp(false)
  const handleToggleSign = () => setLogInOrSignUp(true)

  return (
    <div>
      <button onClick={handleToggleLog}>Login</button>
      <button onClick={handleToggleSign}>SignUp</button>
      {jsxLogIn}
    </div>
  )
}

export default Login;

/** STEPS
 *  check login, if valid store in LS
 *  joblyAPI will extract from LS
 * 
 */