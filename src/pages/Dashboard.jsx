
import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaFileMedical,
  FaHospital,
  FaUser,
  FaSignOutAlt,
  FaShieldAlt,
  FaRupeeSign,
  FaClipboardCheck,
  FaArrowRight,
  FaCalendarAlt
} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const policyName = selectedPlan?.policyName || "No Plan Selected";
  const premium = selectedPlan?.premium;
  const coverage = selectedPlan?.coverage;
  const duration = selectedPlan?.duration || "1 Year";

  const formattedPremium =
    premium !== undefined
      ? `₹${Number(premium).toLocaleString("en-IN")}`
      : "Not available";

  const formattedCoverage = coverage
    ? `₹${String(coverage).replace(/^₹/, "")}`
    : "Not available";

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="dashboard-logo">
          <FaShieldAlt />
          <span>HealthCare+</span>
        </div>

        <nav className="sidebar-menu">
          <Link to="/dashboard" state={{ selectedPlan }} className="active">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>

          <Link to="/policy" state={{ selectedPlan }}>
            <FaFileMedical />
            <span>My Policy</span>
          </Link>

          <Link to="/claims">
            <FaClipboardCheck />
            <span>Claims</span>
          </Link>

          <Link to="/hospitals">
            <FaHospital />
            <span>Hospitals</span>
          </Link>

          <Link to="/profile">
            <FaUser />
            <span>Profile</span>
          </Link>
        </nav>

        <Link to="/" className="logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-content">
        {/* HEADER */}
        <header className="dashboard-header">
          <div>
            <p className="dashboard-welcome">
              Welcome back 👋
            </p>

            <h1>Bhagyashree</h1>

            <p>
              Here's an overview of your health insurance.
            </p>
          </div>

          <Link to="/profile" className="user-info">
            <div className="user-avatar">B</div>
            <span>My Profile</span>
          </Link>
        </header>

        {/* STATISTICS */}
        <section className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <FaShieldAlt />
            </div>

            <div>
              <p>Policy Status</p>
              <h2 className="active-status">
                {selectedPlan ? "Selected" : "No Plan"}
              </h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaRupeeSign />
            </div>

            <div>
              <p>Annual Premium</p>
              <h2>{formattedPremium}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaFileMedical />
            </div>

            <div>
              <p>Coverage</p>
              <h2>{formattedCoverage}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaClipboardCheck />
            </div>

            <div>
              <p>Total Claims</p>
              <h2>2</h2>
            </div>
          </div>
        </section>

        {/* CURRENT POLICY */}
        <section className="policy-section">
          <div className="section-title">
            <div>
              <h2>Current Policy</h2>
              <p>Your selected health insurance plan</p>
            </div>

            <Link
              to="/policy"
              state={{ selectedPlan }}
            >
              View Policy <FaArrowRight />
            </Link>
          </div>

          <div className="policy-card">
            <div className="policy-header">
              <div>
                <span className="policy-badge">
                  {selectedPlan ? "SELECTED" : "NOT SELECTED"}
                </span>

                <h2>{policyName}</h2>

                <p>
                  {selectedPlan
                    ? "Plan details from your selection"
                    : "Choose a plan to view its details"}
                </p>
              </div>

              <div className="policy-icon-container">
                <FaShieldAlt className="policy-icon" />
              </div>
            </div>

            {/* POLICY DETAILS */}
            <div className="policy-details">
              <div>
                <span>Coverage</span>
                <strong>{formattedCoverage}</strong>
              </div>

              <div>
                <span>Premium</span>
                <strong>
                  {premium !== undefined
                    ? `${formattedPremium} / ${duration}`
                    : "Not available"}
                </strong>
              </div>

              <div>
                <span>Plan Duration</span>
                <strong>{duration}</strong>
              </div>

              <div>
                <span>Policy ID</span>
                <strong>Not assigned</strong>
              </div>
            </div>

            <div className="policy-expiry">
              <div>
                <FaCalendarAlt />
                <span>Policy Information</span>
              </div>

              <strong>
                {selectedPlan
                  ? "Plan selected — purchase not completed"
                  : "Select a plan to get started"}
              </strong>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="quick-section">
          <div className="section-title">
            <div>
              <h2>Quick Actions</h2>
              <p>Manage your insurance easily</p>
            </div>
          </div>

          <div className="quick-actions">
            <Link to="/claims">
              <FaClipboardCheck />

              <div>
                <strong>Submit Claim</strong>
                <span>Submit a new insurance claim</span>
              </div>

              <FaArrowRight className="action-arrow" />
            </Link>

            <Link to="/hospitals">
              <FaHospital />

              <div>
                <strong>Find Hospitals</strong>
                <span>Search network hospitals</span>
              </div>

              <FaArrowRight className="action-arrow" />
            </Link>

            <Link to="/profile">
              <FaUser />

              <div>
                <strong>Update Profile</strong>
                <span>Manage personal information</span>
              </div>

              <FaArrowRight className="action-arrow" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
