
import { useState, useEffect } from "react";

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load the logged-in user's profile
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Please log in to view your profile.");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.status === 401 || response.status === 403) {
          throw new Error("Your session is invalid. Please log in again.");
        }

        if (!response.ok) {
          throw new Error("Failed to fetch profile.");
        }

        const data = await response.json();
        setUser(data);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ email: data.email })
        );
      } catch (err) {
        console.error("Profile error:", err);
        setError(err.message || "Unable to load your profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((previousUser) => ({
      ...previousUser,
      [name]: value
    }));
  };

  // Save all editable profile fields
  const handleSave = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Please log in again to update your profile.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            fullName: user.fullName,
            phone: user.phone,
            dateOfBirth: user.dateOfBirth,
            emergencyContact: user.emergencyContact,
            address: user.address
          })
        }
      );

      if (response.status === 401 || response.status === 403) {
        throw new Error("Your session is invalid. Please log in again.");
      }

      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }

      const updatedUser = await response.json();
      setUser(updatedUser);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ email: updatedUser.email })
      );

      setEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Profile update error:", err);
      setError(err.message || "Unable to update your profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Loading profile...</h2>
        </div>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>My Profile</h2>
          <p role="alert">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your personal information and account details.</p>
        </div>

        {!editing ? (
          <button
            type="button"
            className="edit-profile-btn"
            onClick={() => {
              setError("");
              setEditing(true);
            }}
          >
            <FaEdit /> Edit Profile
          </button>
        ) : (
          <button
            type="button"
            className="save-profile-btn"
            onClick={handleSave}
            disabled={saving}
          >
            <FaSave /> {saving ? "Saving..." : "Save Changes"}
          </button>
        )}
      </div>

      {error && <p role="alert">{error}</p>}

      <section className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">
            {user.fullName
              ? user.fullName.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div>
            <h2>{user.fullName || "User"}</h2>
            <p>Primary Policy Holder</p>
            <span className="profile-status">Active Account</span>
          </div>
        </div>

        <div className="profile-section">
          <h2>Personal Information</h2>

          <div className="profile-grid">
            <div className="profile-field">
              <label><FaUser /> Full Name</label>
              {editing ? (
                <input
                  type="text"
                  name="fullName"
                  value={user.fullName || ""}
                  onChange={handleChange}
                />
              ) : (
                <p>{user.fullName || "Not available"}</p>
              )}
            </div>

            <div className="profile-field">
              <label><FaEnvelope /> Email Address</label>
              <p>{user.email || "Not available"}</p>
            </div>

            <div className="profile-field">
              <label><FaPhone /> Phone Number</label>
              {editing ? (
                <input
                  type="tel"
                  name="phone"
                  value={user.phone || ""}
                  onChange={handleChange}
                />
              ) : (
                <p>{user.phone || "Not available"}</p>
              )}
            </div>

            <div className="profile-field">
              <label><FaCalendarAlt /> Date of Birth</label>
              {editing ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={user.dateOfBirth || ""}
                  onChange={handleChange}
                />
              ) : (
                <p>{user.dateOfBirth || "Not available"}</p>
              )}
            </div>

            <div className="profile-field">
              <label><FaPhone /> Emergency Contact</label>
              {editing ? (
                <input
                  type="tel"
                  name="emergencyContact"
                  value={user.emergencyContact || ""}
                  onChange={handleChange}
                />
              ) : (
                <p>{user.emergencyContact || "Not available"}</p>
              )}
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Address</h2>

          <div className="profile-field">
            <label><FaMapMarkerAlt /> Residential Address</label>
            {editing ? (
              <textarea
                name="address"
                value={user.address || ""}
                onChange={handleChange}
                rows={3}
              />
            ) : (
              <p>{user.address || "Not available"}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
