import { useState } from "react";
import {
  FaClipboardCheck,
  FaHospital,
  FaRupeeSign,
  FaCalendarAlt
} from "react-icons/fa";

import "../styles/Claims.css";

function Claims() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="claims-page">

      {/* Header */}

      <div className="claims-header">

        <div>
          <h1>My Claims</h1>

          <p>
            Submit and track your health insurance claims.
          </p>
        </div>

        <button
          className="new-claim-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Submit New Claim
        </button>

      </div>


      {/* Claim Form */}

      {showForm && (

        <section className="claim-form-card">

          <h2>Submit New Claim</h2>

          <p className="form-description">
            Enter the details of your medical claim.
          </p>

          <form>

            <div className="form-row">

              <div className="claim-form-group">
                <label>Patient Name</label>

                <input
                  type="text"
                  placeholder="Enter patient name"
                />
              </div>

              <div className="claim-form-group">
                <label>Hospital Name</label>

                <input
                  type="text"
                  placeholder="Enter hospital name"
                />
              </div>

            </div>


            <div className="form-row">

              <div className="claim-form-group">
                <label>Hospitalization Date</label>

                <input
                  type="date"
                />
              </div>

              <div className="claim-form-group">
                <label>Claim Amount</label>

                <input
                  type="number"
                  placeholder="Enter claim amount"
                />
              </div>

            </div>


            <div className="claim-form-group">

              <label>Reason for Claim</label>

              <textarea
                placeholder="Describe the medical treatment..."
                rows="4"
              ></textarea>

            </div>


            <div className="claim-form-group">

              <label>Upload Medical Document</label>

              <input
                type="file"
              />

            </div>


            <button
              type="submit"
              className="submit-claim-btn"
            >
              Submit Claim
            </button>

          </form>

        </section>

      )}


      {/* Statistics */}

      <div className="claims-stats">

        <div className="claim-stat-card">

          <div className="claim-stat-icon">
            <FaClipboardCheck />
          </div>

          <div>
            <span>Total Claims</span>
            <h2>2</h2>
          </div>

        </div>


        <div className="claim-stat-card">

          <div className="claim-stat-icon">
            <FaClipboardCheck />
          </div>

          <div>
            <span>Approved</span>
            <h2>1</h2>
          </div>

        </div>


        <div className="claim-stat-card">

          <div className="claim-stat-icon">
            <FaRupeeSign />
          </div>

          <div>
            <span>Total Amount</span>
            <h2>₹45,000</h2>
          </div>

        </div>

      </div>


      {/* Claims List */}

      <section className="claims-list">

        <h2>Claim History</h2>

        <p className="section-description">
          Track your previous insurance claims.
        </p>


        {/* Claim 1 */}

        <div className="claim-card">

          <div className="claim-icon">
            <FaHospital />
          </div>


          <div className="claim-details">

            <div className="claim-title">

              <h3>City Care Hospital</h3>

              <span className="approved">
                APPROVED
              </span>

            </div>

            <p>
              Claim ID: CLM-2026-001
            </p>

            <div className="claim-info">

              <span>
                <FaCalendarAlt />
                15 Aug 2026
              </span>

              <span>
                <FaRupeeSign />
                ₹25,000
              </span>

            </div>

          </div>

        </div>


        {/* Claim 2 */}

        <div className="claim-card">

          <div className="claim-icon">
            <FaHospital />
          </div>


          <div className="claim-details">

            <div className="claim-title">

              <h3>Sunrise Medical Center</h3>

              <span className="pending">
                PENDING
              </span>

            </div>

            <p>
              Claim ID: CLM-2026-002
            </p>

            <div className="claim-info">

              <span>
                <FaCalendarAlt />
                20 Aug 2026
              </span>

              <span>
                <FaRupeeSign />
                ₹20,000
              </span>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Claims;