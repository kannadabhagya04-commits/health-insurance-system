import { Link } from "react-router-dom";

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

  return (

    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <div className="dashboard-logo">

          <FaShieldAlt />

          <span>HealthCare+</span>

        </div>


        <nav className="sidebar-menu">

          <Link
            to="/dashboard"
            className="active"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>


          <Link to="/policy">

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


        <Link
          to="/"
          className="logout"
        >

          <FaSignOutAlt />

          <span>Logout</span>

        </Link>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="dashboard-content">


        {/* HEADER */}

        <header className="dashboard-header">

          <div>

            <p className="dashboard-welcome">
              Welcome back 👋
            </p>

            <h1>
              Bhagyashree
            </h1>

            <p>
              Here's an overview of your health insurance.
            </p>

          </div>


          <Link
            to="/profile"
            className="user-info"
          >

            <div className="user-avatar">
              B
            </div>

            <span>My Profile</span>

          </Link>

        </header>



        {/* ================= STATISTICS ================= */}

        <section className="dashboard-stats">


          <div className="stat-card">

            <div className="stat-icon">
              <FaShieldAlt />
            </div>

            <div>

              <p>Policy Status</p>

              <h2 className="active-status">
                Active
              </h2>

            </div>

          </div>



          <div className="stat-card">

            <div className="stat-icon">
              <FaRupeeSign />
            </div>

            <div>

              <p>Annual Premium</p>

              <h2>
                ₹15,000
              </h2>

            </div>

          </div>



          <div className="stat-card">

            <div className="stat-icon">
              <FaFileMedical />
            </div>

            <div>

              <p>Coverage</p>

              <h2>
                ₹10 Lakhs
              </h2>

            </div>

          </div>



          <div className="stat-card">

            <div className="stat-icon">
              <FaClipboardCheck />
            </div>

            <div>

              <p>Total Claims</p>

              <h2>
                2
              </h2>

            </div>

          </div>


        </section>



        {/* ================= CURRENT POLICY ================= */}

        <section className="policy-section">


          <div className="section-title">

            <div>

              <h2>
                Current Policy
              </h2>

              <p>
                Your active health insurance policy
              </p>

            </div>


            <Link to="/policy">

              View Policy

              <FaArrowRight />

            </Link>

          </div>



          <div className="policy-card">


            <div className="policy-header">


              <div>

                <span className="policy-badge">
                  ACTIVE
                </span>


                <h2>
                  Family Health Plan
                </h2>


                <p>
                  Policy ID: HC-FAM-2026-001
                </p>

              </div>


              <div className="policy-icon-container">

                <FaShieldAlt className="policy-icon" />

              </div>

            </div>



            {/* POLICY DETAILS */}

            <div className="policy-details">


              <div>

                <span>
                  Coverage
                </span>

                <strong>
                  ₹10 Lakhs
                </strong>

              </div>


              <div>

                <span>
                  Premium
                </span>

                <strong>
                  ₹15,000 / Year
                </strong>

              </div>


              <div>

                <span>
                  Members
                </span>

                <strong>
                  4 Members
                </strong>

              </div>


              <div>

                <span>
                  Valid Until
                </span>

                <strong>
                  23 Aug 2027
                </strong>

              </div>


            </div>



            {/* POLICY EXPIRY */}

            <div className="policy-expiry">

              <div>

                <FaCalendarAlt />

                <span>
                  Policy Renewal
                </span>

              </div>


              <strong>
                365 Days Remaining
              </strong>

            </div>


          </div>

        </section>



        {/* ================= QUICK ACTIONS ================= */}

        <section className="quick-section">

          <div className="section-title">

            <div>

              <h2>
                Quick Actions
              </h2>

              <p>
                Manage your insurance easily
              </p>

            </div>

          </div>


          <div className="quick-actions">


            <Link to="/claims">

              <FaClipboardCheck />

              <div>

                <strong>
                  Submit Claim
                </strong>

                <span>
                  Submit a new insurance claim
                </span>

              </div>

              <FaArrowRight className="action-arrow" />

            </Link>



            <Link to="/hospitals">

              <FaHospital />

              <div>

                <strong>
                  Find Hospitals
                </strong>

                <span>
                  Search network hospitals
                </span>

              </div>

              <FaArrowRight className="action-arrow" />

            </Link>



            <Link to="/profile">

              <FaUser />

              <div>

                <strong>
                  Update Profile
                </strong>

                <span>
                  Manage personal information
                </span>

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