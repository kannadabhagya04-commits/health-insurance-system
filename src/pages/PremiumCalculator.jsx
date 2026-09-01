import { useState } from "react";
import "../styles/PremiumCalculator.css";

function PremiumCalculator() {

  const [age, setAge] = useState("");
  const [members, setMembers] = useState("1");
  const [plan, setPlan] = useState("basic");
  const [smoker, setSmoker] = useState("no");
  const [premium, setPremium] = useState(null);


  const calculatePremium = (e) => {

    e.preventDefault();

    let basePremium = 0;

    // Plan price
    if (plan === "basic") {
      basePremium = 8000;
    } 
    else if (plan === "family") {
      basePremium = 15000;
    } 
    else if (plan === "premium") {
      basePremium = 25000;
    }

    // Age adjustment
    if (Number(age) > 50) {
      basePremium += 5000;
    } 
    else if (Number(age) > 35) {
      basePremium += 2500;
    }

    // Family members
    if (Number(members) > 1) {
      basePremium += (Number(members) - 1) * 3000;
    }

    // Smoker adjustment
    if (smoker === "yes") {
      basePremium += 5000;
    }

    setPremium(basePremium);
  };


  return (
    <div className="calculator-page">

      <div className="calculator-card">

        <h1>Premium Calculator</h1>

        <p className="calculator-subtitle">
          Get an estimated health insurance premium
        </p>


        <form onSubmit={calculatePremium}>

          {/* Age */}

          <div className="calculator-group">

            <label>Age</label>

            <input
              type="number"
              min="18"
              max="100"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              required
            />

          </div>


          {/* Family Members */}

          <div className="calculator-group">

            <label>Number of Family Members</label>

            <select
              value={members}
              onChange={(e) => setMembers(e.target.value)}
            >

              <option value="1">1 Member</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4">4 Members</option>
              <option value="5">5 Members</option>

            </select>

          </div>


          {/* Plan */}

          <div className="calculator-group">

            <label>Select Insurance Plan</label>

            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >

              <option value="basic">
                Basic Health Plan
              </option>

              <option value="family">
                Family Health Plan
              </option>

              <option value="premium">
                Premium Health Plan
              </option>

            </select>

          </div>


          {/* Smoker */}

          <div className="calculator-group">

            <label>Do you smoke?</label>

            <select
              value={smoker}
              onChange={(e) => setSmoker(e.target.value)}
            >

              <option value="no">No</option>
              <option value="yes">Yes</option>

            </select>

          </div>


          <button
            type="submit"
            className="calculate-btn"
          >
            Calculate Premium
          </button>

        </form>


        {/* Result */}

        {premium !== null && (

          <div className="premium-result">

            <p>
              Estimated Annual Premium
            </p>

            <h2>
              ₹{premium.toLocaleString("en-IN")}
            </h2>

            <span>
              This is an estimated premium.
            </span>

          </div>

        )}

      </div>

    </div>
  );
}

export default PremiumCalculator;