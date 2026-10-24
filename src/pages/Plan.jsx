
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Plans.css";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
           "http://127.0.0.1:8080/api/insurance-policies"
        );

        setPlans(response.data);
      } catch (err) {
        console.error("Error fetching insurance plans:", err);
        setError(
          "Unable to load insurance plans. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="plans-page">
      <header className="plans-header">
        <h1>HealthCare+ Insurance Plans</h1>
        <p>Choose the right health insurance plan for your family.</p>
      </header>

      {loading && <p>Loading insurance plans...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && plans.length === 0 && (
        <p>No insurance plans are available right now.</p>
      )}

      {!loading && !error && plans.length > 0 && (
        <div className="plans-container">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id}>
              <h2>{plan.policyName}</h2>

              <div className="plan-details">
                <p>
                  <strong>Coverage:</strong> ₹{plan.coverage}
                </p>

                <p>
                  <strong>Premium:</strong> ₹
                  {Number(plan.premium).toLocaleString("en-IN")}
                </p>

                <p>
                  <strong>Duration:</strong> {plan.duration}
                </p>
              </div>

              <Link
                to="/login"
                state={{ selectedPlan: plan }}
                className="plan-btn"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      )}

      <footer className="plans-footer">
        <p>HealthCare+ — Your health, our priority.</p>
      </footer>
    </div>
  );
}

export default Plans;
