import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaDownload,
  FaCalendarAlt,
  FaRupeeSign,
  FaUsers,
  FaCheckCircle
} from "react-icons/fa";

import "../styles/Policy.css";

function Policy() {
  return (
    <div className="policy-page">

      {/* Header */}

      <div className="policy-top">

        <div>
          <h1>My Policy</h1>

          <p>
            View and manage your health insurance policy.
          </p>
        </div>

        <Link to="/dashboard" className="back-btn">
          Back to Dashboard
        </Link>

      </div>


      {/* Policy Main Card */}

      <section className="main-policy-card">

        <div className="policy-main-header">

          <div className="policy-title">

            <div className="policy-shield">
              <FaShieldAlt />
            </div>

            <div>
              <span className="active-status">
                <FaCheckCircle /> ACTIVE
              </span>

              <h2>Family Health Plan</h2>

              <p>
                Policy ID: HC-FAM-2026-001
              </p>
            </div>

          </div>


          <button className="download-btn">
            <FaDownload />
            Download Policy
          </button>

        </div>


        {/* Policy Information */}

        <div className="policy-info-grid">

          <div className="policy-info">

            <FaRupeeSign />

            <div>
              <span>Annual Premium</span>
              <strong>₹15,000</strong>
            </div>

          </div>


          <div className="policy-info">

            <FaShieldAlt />

            <div>
              <span>Coverage Amount</span>
              <strong>₹10 Lakhs</strong>
            </div>

          </div>


          <div className="policy-info">

            <FaCalendarAlt />

            <div>
              <span>Policy Start</span>
              <strong>23 Aug 2026</strong>
            </div>

          </div>


          <div className="policy-info">

            <FaCalendarAlt />

            <div>
              <span>Policy End</span>
              <strong>23 Aug 2027</strong>
            </div>

          </div>

        </div>

      </section>


      {/* Members */}

      <section className="members-section">

        <h2>Insured Members</h2>

        <p className="section-description">
          People covered under this health insurance policy.
        </p>


        <div className="members-grid">

          <div className="member-card">

            <div className="member-avatar">
              B
            </div>

            <div>
              <h3>Bhagyashree</h3>
              <p>Primary Insured</p>
            </div>

          </div>


          <div className="member-card">

            <div className="member-avatar">
              F
            </div>

            <div>
              <h3>Family Member</h3>
              <p>Covered Member</p>
            </div>

          </div>


          <div className="member-card">

            <div className="member-avatar">
              F
            </div>

            <div>
              <h3>Family Member</h3>
              <p>Covered Member</p>
            </div>

          </div>


          <div className="member-card">

            <div className="member-avatar">
              F
            </div>

            <div>
              <h3>Family Member</h3>
              <p>Covered Member</p>
            </div>

          </div>

        </div>

      </section>


      {/* Benefits */}

      <section className="benefits-section">

        <h2>Policy Benefits</h2>

        <p className="section-description">
          Benefits included with your Family Health Plan.
        </p>


        <div className="benefits-grid">

          <div className="benefit-card">
            <FaCheckCircle />
            <span>Hospitalization Coverage</span>
          </div>

          <div className="benefit-card">
            <FaCheckCircle />
            <span>Cashless Treatment</span>
          </div>

          <div className="benefit-card">
            <FaCheckCircle />
            <span>Emergency Treatment</span>
          </div>

          <div className="benefit-card">
            <FaCheckCircle />
            <span>1000+ Network Hospitals</span>
          </div>

          <div className="benefit-card">
            <FaCheckCircle />
            <span>Pre & Post Hospitalization</span>
          </div>

          <div className="benefit-card">
            <FaCheckCircle />
            <span>Family Coverage</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Policy;