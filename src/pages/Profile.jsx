import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEdit,
  FaSave
} from "react-icons/fa";

import "../styles/Profile.css";

function Profile() {

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
   
  );

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };


  const handleSave = () => {
      localStorage.setItem("loggedInUser",JSON.stringify(user));
      




    setEditing(false);

    alert("Profile updated successfully!");

  };


  return (

    <div className="profile-page">

      {/* Header */}

      <div className="profile-header">

        <div>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and account details.
          </p>

        </div>

        {!editing ? (

          <button
            className="edit-profile-btn"
            onClick={() => setEditing(true)}
          >
            <FaEdit />
            Edit Profile
          </button>

        ) : (

          <button
            className="save-profile-btn"
            onClick={handleSave}
          >
            <FaSave />
            Save Changes
          </button>

        )}

      </div>


      {/* Profile Card */}

      <section className="profile-card">

        {/* Profile Top */}

        <div className="profile-top">

          <div className="profile-avatar">
            B
          </div>

          <div>

            <h2>{user.fullName}</h2>

            <p>
              Primary Policy Holder
            </p>

            <span className="profile-status">
              Active Account
            </span>

          </div>

        </div>


        {/* Personal Information */}

        <div className="profile-section">

          <h2>Personal Information</h2>

          <div className="profile-grid">


            {/* Name */}

            <div className="profile-field">

              <label>
                <FaUser />
                Full Name
              </label>

              {editing ? (

                <input
                  type="text"
                  name="fullName"
                  value={user.fullName}
                  onChange={handleChange}
                />

              ) : (

                <p>{user.fullName}</p>

              )}

            </div>


            {/* Email */}

            <div className="profile-field">

              <label>
                <FaEnvelope />
                Email Address
              </label>

              {editing ? (

                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />

              ) : (

                <p>{user.email}</p>

              )}

            </div>


            {/* Phone */}

            <div className="profile-field">

              <label>
                <FaPhone />
                Phone Number
              </label>

              {editing ? (

                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />

              ) : (

                <p>{user.phone}</p>

              )}

            </div>


            {/* DOB */}

            <div className="profile-field">

              <label>
                <FaCalendarAlt />
                Date of Birth
              </label>

              {editing ? (

                <input
                  type="text"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                />

              ) : (

                <p>{user.dob}</p>

              )}

            </div>


            {/* Gender */}

            <div className="profile-field">

              <label>
                <FaUser />
                Gender
              </label>

              {editing ? (

                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                >

                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>

                </select>

              ) : (

                <p>{user.gender}</p>

              )}

            </div>


            {/* Emergency */}

            <div className="profile-field">

              <label>
                <FaPhone />
                Emergency Contact
              </label>

              {editing ? (

                <input
                  type="text"
                  name="emergency"
                  value={user.emergency}
                  onChange={handleChange}
                />

              ) : (

                <p>{user.emergency}</p>

              )}

            </div>


          </div>

        </div>


        {/* Address */}

        <div className="profile-section">

          <h2>Address</h2>

          <div className="profile-field">

            <label>
              <FaMapMarkerAlt />
              Residential Address
            </label>

            {editing ? (

              <textarea
                name="address"
                value={user.address}
                onChange={handleChange}
                rows="3"
              />

            ) : (

              <p>{user.address}</p>

            )}

          </div>

        </div>

      </section>

    </div>

  );

}

export default Profile;