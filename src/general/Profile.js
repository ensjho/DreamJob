import React, { useState, useContext } from "react";
import DreamJobApi from "../Api";
import AuthContext from "../auth/AuthContext";

/** Form for updating the profile; 
 *  requires a valid password;
 *  Username can not be updated;
 */

function Profile() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    email: currentUser.email,
    photo_url: currentUser.photo_url,
    username: currentUser.username,
    password: "",
  });
  const [messages, setMessages] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const submitUpdates = evt => {
    evt.preventDefault();
    async function submitChanges() {
      //clear messages in the bottom
      setMessages("")
      setSuccess("")
      
      try {
        //Patch Request does not accept username in the body
        let properFormData
          = {
          first_name: formData.first_name || undefined,
          last_name: formData.last_name || undefined,
          email: formData.email || undefined,
          photo_url: formData.photo_url || undefined,
          password: formData.password
        }

        const updatedUser = await DreamJobApi.saveProfile(currentUser.username, properFormData);

        setFormData(updatedUser);
        setCurrentUser(updatedUser);
        setSuccess("Successfully Updated!")
      }
      catch (err) {
        setMessages(`Update failed! ${err[0]}`);
        console.debug(err);
      }
    }
    submitChanges();
  }


  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h1> Profile </h1>
      <div className="card">
        <div className="card-body">
          <form className="ProfileForm" onSubmit={submitUpdates}>
            <div>
              <label className="mt-1" htmlFor="username">Username: </label>
              <input disabled
                className="form-control"
                name="username"
                placeholder="username"
                value={formData.username}
                id="username"
              />
            </div>
            <div>
              <label className="mt-1" htmlFor="first_name">First Name </label>
              <input
                onChange={handleChange}
                className="form-control"
                name="first_name"
                placeholder="first_name"
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
                placeholder="last_name"
                id="lastName"
                value={formData.last_name}
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
            <div>
              <label className="mt-1" htmlFor="photo_url">Photo URL </label>
              <input
                onChange={handleChange}
                className="form-control"
                name="photo_url"
                placeholder="photoUrl"
                value={formData.photo_url || ""}
                id="photoUrl"
              />
            </div>
            <div>
              <label className="mt-1" htmlFor="password">Re-enter Password </label>
              <input
                onChange={handleChange}
                className="form-control"
                name="password"
                placeholder="password"
                value={formData.password || ""}
                type="password"
                id="password"
              />
            </div>

            <button className="btn btn-primary btn-block mt-4">Save Changes</button>
          </form>
        </div>
        <div className="text-danger font-weight-bold text-center">{messages}</div>
        <div className="text-success font-weight-bold text-center">{success}</div>
      </div>
    </div>
  );
}

export default Profile;