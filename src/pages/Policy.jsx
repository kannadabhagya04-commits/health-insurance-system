
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaShieldAlt,
  FaDownload,
  FaCalendarAlt,
  FaRupeeSign,
  FaCheckCircle
} from "react-icons/fa";

import "../styles/Policy.css";

const API_URL = "http://localhost:8080/api/purchased-policies";

function Policy() {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const [purchasedPolicies, setPurchasedPolicies] = useState([]);
  const [loadingPolicies, setLoadingPolicies] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // Load saved policies from the database when the page opens.
  useEffect(() => {
    const fetchPurchasedPolicies = async () => {
      if (!token) {
        setMessage("Please log in to view your purchased policies.");
        setLoadingPolicies(false);
        return;
      }

      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setPurchasedPolicies(response.data);
      } catch (error) {
        console.error("Load purchased policies error:", error);
        setMessage("Unable to load saved policies. Please log in again if needed.");
      } finally {
        setLoadingPolicies(false);
      }
    };

    fetchPurchasedPolicies();
  }, [token]);

  // Check whether the selected plan is already saved.
  const savedSelectedPlan = selectedPlan
    ? purchasedPolicies.find(
        (policy) =>
          Number(policy.insurancePolicyId) === Number(selectedPlan.id)
      )
    : null;

  // Show the selected plan, or the most recently returned saved record.
  const displayPlan = selectedPlan || purchasedPolicies[0];

  const policyName = displayPlan?.policyName || "No Plan Selected";
  const premium = displayPlan?.premium;
  const coverage = displayPlan?.coverage;
  const duration = displayPlan?.duration || "1 Year";

  const formattedPremium =
    premium !== undefined && premium !== null
      ? `₹${Number(premium).toLocaleString("en-IN")}`
      : "Not available";

  const formattedCoverage = coverage
    ? coverage.startsWith("₹")
      ? coverage
      : `₹${coverage}`
    : "Not available";

  const benefits = [
    "Hospitalization Coverage",
    "Cashless Treatment",
    "Emergency Treatment",
    "Pre & Post Hospitalization"
  ];

  if (policyName.toLowerCase().includes("family")) {
    benefits.push("Family Coverage", "Coverage for Family Members");
  } else if (policyName.toLowerCase().includes("premium")) {
    benefits.push("Enhanced Coverage", "Premium Plan Benefits");
  } else if (policyName.toLowerCase().includes("basic")) {
    benefits.push("Essential Health Coverage", "Individual Protection");
  }

  const handlePurchase = async () => {
    if (!selectedPlan) {
      setMessage("Please select an insurance plan first.");
      return;
    }

    if (!token) {
      setMessage("Please log in again before purchasing a policy.");
      return;
    }

    // Prevent another purchase if this plan is already saved.
    const alreadySaved = purchasedPolicies.some(
      (policy) =>
        Number(policy.insurancePolicyId) === Number(selectedPlan.id)
    );

    if (alreadySaved) {
      setMessage("This plan is already saved in your account.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        API_URL,
        {
          insurancePolicyId: selectedPlan.id,
          policyName: selectedPlan.policyName,
          coverage: selectedPlan.coverage,
          premium: Number(selectedPlan.premium),
          duration: selectedPlan.duration || "1 Year"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      setPurchasedPolicies((previousPolicies) => [
        response.data,
        ...previousPolicies
      ]);

      setMessage("Policy record saved successfully!");
    } catch (error) {
      console.error("Purchase policy error:", error);

      setMessage(
        typeof error.response?.data === "string"
          ? error.response.data
          : "Unable to save the policy. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="policy-page">
      <div className="policy-top">
        <div>
          <h1>My Policy</h1>
          <p>View and manage your selected health insurance plan.</p>
        </div>

        <Link
          to="/dashboard"
          state={{ selectedPlan: displayPlan }}
          className="back-btn"
        >
          Back to Dashboard
        </Link>
      </div>

      {loadingPolicies ? (
        <section className="main-policy-card">
          <p>Loading your saved policies...</p>
        </section>
      ) : (
        <>
          <section className="main-policy-card">
            <div className="policy-main-header">
              <div className="policy-title">
                <div className="policy-shield">
                  <FaShieldAlt />
                </div>

                <div>
                  <span className="active-status">
                    <FaCheckCircle />{" "}
                    {savedSelectedPlan || (!selectedPlan && displayPlan)
                      ? "PURCHASE RECORD SAVED"
                      : selectedPlan
                        ? "PLAN SELECTED"
                        : "NO PLAN SELECTED"}
                  </span>

                  <h2>{policyName}</h2>

                  <p>
                    {displayPlan
                      ? "Insurance plan details"
                      : "Choose a plan from the Plans page to get started."}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="download-btn"
                onClick={() => window.print()}
              >
                <FaDownload /> Print / Save Policy
              </button>
            </div>

            <div className="policy-info-grid">
              <div className="policy-info">
                <FaRupeeSign />
                <div>
                  <span>Premium</span>
                  <strong>{formattedPremium}</strong>
                </div>
              </div>

              <div className="policy-info">
                <FaShieldAlt />
                <div>
                  <span>Coverage Amount</span>
                  <strong>{formattedCoverage}</strong>
                </div>
              </div>

              <div className="policy-info">
                <FaCalendarAlt />
                <div>
                  <span>Plan Duration</span>
                  <strong>{duration}</strong>
                </div>
              </div>

              <div className="policy-info">
                <FaCalendarAlt />
                <div>
                  <span>Policy Status</span>
                  <strong>
                    {savedSelectedPlan || (!selectedPlan && displayPlan)
                      ? "Record Saved"
                      : selectedPlan
                        ? "Not Purchased"
                        : "Not Available"}
                  </strong>
                </div>
              </div>
            </div>

            {selectedPlan && !savedSelectedPlan && (
              <>
                <p className="section-description">
                  Review your selected plan and save its purchase record to
                  your account.
                </p>

                <button
                  type="button"
                  className="plan-btn"
                  onClick={handlePurchase}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Purchase Policy"}
                </button>
              </>
            )}

            {(savedSelectedPlan || (!selectedPlan && displayPlan)) && (
              <p className="section-description">
                This policy's purchase record is saved in your database.
              </p>
            )}

            {message && (
              <p role="status" className="section-description">
                {message}
              </p>
            )}
          </section>

          <section className="members-section">
            <h2>Insured Members</h2>

            <p className="section-description">
              Member details depend on your selected insurance plan.
            </p>

            <div className="members-grid">
              <div className="member-card">
                <div className="member-avatar">B</div>
                <div>
                  <h3>Bhagyashree</h3>
                  <p>Primary User</p>
                </div>
              </div>
            </div>
          </section>

          {displayPlan && (
            <section className="benefits-section">
              <h2>Plan Benefits</h2>

              <p className="section-description">
                General benefits associated with your selected plan.
              </p>

              <div className="benefits-grid">
                {benefits.map((benefit) => (
                  <div className="benefit-card" key={benefit}>
                    <FaCheckCircle />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="benefits-section">
            <h2>All Saved Policies</h2>

            {purchasedPolicies.length === 0 ? (
              <p className="section-description">
                You have no saved policy records yet.
              </p>
            ) : (
              <div className="benefits-grid">
                {purchasedPolicies.map((policy) => (
                  <div className="benefit-card" key={policy.id}>
                    <FaCheckCircle />
                    <span>
                      <strong>{policy.policyName}</strong>
                      <br />
                      Coverage: {policy.coverage}
                      <br />
                      Premium: ₹
                      {Number(policy.premium).toLocaleString("en-IN")}
                      <br />
                      Duration: {policy.duration}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default Policy;
