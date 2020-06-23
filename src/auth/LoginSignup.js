import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginSignup.css"


/**Log in Form for loggin in an existing user
 * Sign Up Form for adding a new user
 * Toggle between forms/ Routed at /login */

function LoginSignup({ login, signup }) {
  const history = useHistory()
  const initialClassName = "btn btn-primary login active"
  const intialFormData = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  }
  const [signUpPage, setLogInOrSignUp] = useState(false);
  const [intialClassNameLogin, setinitialCalssNameLogin] = useState(initialClassName)
  const [formData, setFormData] = useState(intialFormData);
  const [formErrors, setFormErrors] = useState("");

  /**Updates form data field*/
  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log(name, value)
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  /**Handle submit button for singup form*/
  async function handleSignup(evt) {
    evt.preventDefault();
    setFormErrors("");
    let result = await signup(formData);
    if (result.success) {
      history.push('/companies');
    } else {
      setFormErrors(result.errors[0]);

    }
  }

  /**Handle submit button for login form*/
  async function handleLogin(evt) {
    evt.preventDefault();
    setFormErrors("");
    let result = await login(formData);
    if (result.success) {
      history.push('/companies');
    } else {
      setFormErrors(result.errors);
    }
  }

  /**  Log in form
   *  displays login form if signUpPage is false
   *  dispalys signup form if signUpPage is true
   * */

  let loginOrsignup;

  if (signUpPage === false) {
    loginOrsignup = (
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <label className="mt-1" htmlFor="username" >Username </label>
            <input
              onChange={handleChange}
              name="username"
              className="form-control"
              placeholder="username"
              value={formData.username}
              id="username"
            />
            <div>
              <label className="mt-1" htmlFor="password">Password </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                value={formData.password}
                id="password"
              />
            </div>
            <button className="btn btn-primary float-right mt-2">Submit</button>
          </form>
          <div className="text-danger font-weight-bold text-center mt-3">{formErrors}</div>
        </div>
      </div>
    )
  }

  if (signUpPage === true) {
    loginOrsignup = (
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSignup}>
            <div>
              <label className="mt-1" htmlFor="username">Username </label>
              <input
                onChange={handleChange}
                className="form-control"
                name="username"
                placeholder="username"
                value={formData.username}
                id="username"
              />
            </div>
            <div>
              <label className="mt-1" htmlFor="password">Password </label>
              <input
                onChange={handleChange}
                className="form-control"
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                id="password"
              />
            </div>
            <div>
              <label className="mt-1" htmlFor="first_name">First Name </label>
              <input
                onChange={handleChange}
                className="form-control"
                name="first_name"
                placeholder="firstName"
                value={formData.first_name}
                id="firstName"
              />
            </div>
            <div>
              <label className="mt-1" htmlFor="last_name">Last Name </label>
              <input
                onChange={handleChange}
                className="form-control"
                name="last_name"
                placeholder="lastName"
                value={formData.last_name}
                id="lastName"
              />
            </div>
            <div>
              <label className="mt-1" htmlFor="email">Email </label>
              <input
                onChange={handleChange}
                className="form-control"
                name="email"
                placeholder="email"
                value={formData.email}
                id="email"
              />
            </div>
            <button className="btn btn-primary float-right mt-2">Register</button>
          </form>
          <div className="text-danger font-weight-bold text-center mt-3">{formErrors}</div>
        </div>
      </div>)
  }

  /** button toggle for displaying correct form login or signup*/
  const handleToggleLog = () => {
    setFormErrors("")
    setLogInOrSignUp(false)
  }
  
  const handleToggleSign = () => {
    setFormErrors("")
    setLogInOrSignUp(true)
    setinitialCalssNameLogin("btn btn-primary login")
  }

  return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <div className="data-toggle=button">
        <button className={intialClassNameLogin} onClick={handleToggleLog}>Login</button>
        <button className="btn btn-primary signup" onClick={handleToggleSign}>SignUp</button>
      </div>
      {loginOrsignup}
    </div>
  )
}

export default LoginSignup;
