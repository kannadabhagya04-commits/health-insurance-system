import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHospital,
  FaMapMarkerAlt,
  FaPhone,
  FaSearch,
  FaCheckCircle
} from "react-icons/fa";

import "../styles/Hospitals.css";

function Hospitals() {

  const [search, setSearch] = useState("");

  const hospitals = [
    {
      id:1,
      name: "Apollo Hospitals",
      city: "Bangalore",
      type: "Multi-Speciality",
      phone: "+91 98765 43210",
      cashless: true
    },
    {
      id:2,
      name: "Manipal Hospital",
      city: "Bangalore",
      type: "Multi-Speciality",
      phone: "+91 98765 12345",
      cashless: true
    },
    {
      id:3,
      name: "KIMS Hospital",
      city: "Hyderabad",
      type: "Multi-Speciality",
      phone: "+91 98765 67890",
      cashless: true
    },
    {
      id:4,
      name: "Care Hospital",
      city: "Hyderabad",
      type: "General Hospital",
      phone: "+91 98765 45678",
      cashless: true
    },
    {
      id:5,
      name: "City Care Hospital",
      city: "Kurnool",
      type: "General Hospital",
      phone: "+91 98765 98765",
      cashless: true
    },
    {
      id:6,
      name: "Sunrise Medical Center",
      city: "Bangalore",
      type: "Speciality Hospital",
      phone: "+91 98765 11111",
      cashless: false
    }
  ];

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search.toLowerCase()) ||
    hospital.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hospitals-page">

      {/* Header */}

      <section className="hospitals-header">

        <div className="hospital-header-content">

          <div>
            <span className="hospital-small-title">
              HEALTHCARE NETWORK
            </span>

            <h1>Find Network Hospitals</h1>

            <p>
              Find hospitals where you can access cashless
              treatment using your health insurance policy.
            </p>
          </div>

          <div className="hospital-header-icon">
            <FaHospital />
          </div>

        </div>


        {/* Search */}

        <div className="hospital-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search hospital or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>


      {/* Hospital Section */}

      <section className="hospital-section">

        <div className="hospital-section-heading">

          <div>
            <h2>Network Hospitals</h2>

            <p>
              {filteredHospitals.length} hospitals found
            </p>
          </div>

        </div>


        <div className="hospital-grid">

          {filteredHospitals.map((hospital, index) => (

            <div
              className="hospital-card"
              key={index}
            >

              <div className="hospital-card-top">

                <div className="hospital-icon">
                  <FaHospital />
                </div>

                {hospital.cashless && (
                  <span className="cashless-badge">
                    <FaCheckCircle />
                    Cashless
                  </span>
                )}

              </div>


              <h3>{hospital.name}</h3>

              <p className="hospital-type">
                {hospital.type}
              </p>


              <div className="hospital-detail">

                <FaMapMarkerAlt />

                <span>
                  {hospital.city}
                </span>

              </div>


              <div className="hospital-detail">

                <FaPhone />

                <span>
                  {hospital.phone}
                </span>

              </div>


              <Link to={`/hospital-details/${hospital.id}`} className="hospital-btn">
                View Hospital
              </Link>

            </div>

          ))}

        </div>


        {filteredHospitals.length === 0 && (

          <div className="no-hospitals">

            <FaHospital />

            <h3>No hospitals found</h3>

            <p>
              Try searching for another hospital or city.
            </p>

          </div>

        )}

      </section>

    </div>
  );
}

export default Hospitals;