import { Link } from "react-router-dom";
import { FaShieldAlt, FaHospital, FaHeartbeat, FaFileMedical } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">

          <div className="hero-text">
            <h1>
              Protect Your Health.
              <br />
              <span>Protect Your Future.</span>
            </h1>

            <p>
              Get reliable health insurance coverage for you and your family.
              Compare plans, calculate premiums, and manage your insurance
              from one simple platform.
            </p>

            <div className="hero-buttons">
              <Link to="/plans" className="primary-btn">
                Explore Plans
              </Link>

              <Link to="/premium-calculator" className="secondary-btn">
                Calculate Premium
              </Link>
            </div>
          </div>
            <div className="hero-visual">
      <div className="health-card">
        <FaHeartbeat className="hero-heart-icon" />

        <h3>Health Protection</h3>

        <p>
          Your health deserves the best protection.
        </p>

        <div className="health-stat">
          <span>Coverage</span>
          <strong>₹25 Lakhs</strong>
        </div>

        <div className="health-stat">
          <span>Network Hospitals</span>
          <strong>2000+</strong>
        </div>

        </div>
         </div>
    </div>
      </section>


      {/* Features Section */}
      <section className="features-section">

        <div className="section-heading">
          <h2>Why Choose HealthCare?</h2>

          <p>
            Simple, secure and reliable health insurance management.
          </p>
        </div>


        <div className="features-container">

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />

            <h3>Secure Protection</h3>

            <p>
              Get comprehensive insurance coverage designed to protect you
              during unexpected medical situations.
            </p>
          </div>


          <div className="feature-card">
            <FaHospital className="feature-icon" />

            <h3>Cashless Hospitals</h3>

            <p>
              Find network hospitals and access cashless healthcare services
              with ease.
            </p>
          </div>


          <div className="feature-card">
            <FaHeartbeat className="feature-icon" />

            <h3>Family Coverage</h3>

            <p>
              Choose suitable health insurance plans for yourself and your
              entire family.
            </p>
          </div>


          <div className="feature-card">
            <FaFileMedical className="feature-icon" />

            <h3>Easy Claims</h3>

            <p>
              Submit and track your insurance claims through a simple and
              transparent process.
            </p>
          </div>

        </div>
      </section>


      {/* How It Works */}
      <section className="how-section">

        <div className="section-heading">
          <h2>How It Works</h2>

          <p>
            Get insured in just a few simple steps.
          </p>
        </div>


        <div className="steps-container">

          <div className="step-card">
            <div className="step-number">01</div>

            <h3>Choose a Plan</h3>

            <p>
              Explore and compare different insurance plans.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">02</div>

            <h3>Calculate Premium</h3>

            <p>
              Calculate an estimated premium based on your requirements.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">03</div>

            <h3>Buy Your Policy</h3>

            <p>
              Select your plan and complete the policy purchase.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">04</div>

            <h3>Manage Your Policy</h3>

            <p>
              Manage your policy and submit claims whenever required.
            </p>
          </div>

        </div>
      </section>


      {/* Call To Action */}
      <section className="cta-section">

        <div className="cta-content">

          <h2>Ready to Protect Your Future?</h2>

          <p>
            Find a health insurance plan that fits your needs.
          </p>

          <Link to="/plans" className="cta-btn">
            Get Started
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;