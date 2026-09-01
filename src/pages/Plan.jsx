import {Link} from "react-router-dom";
import {FaShieldAlt,FaUsers,FaCrown} from "react-icons/fa";
import "../styles/plans.css";
function Plans()
{
    return(
           <div className="plans-page">
             <section className="plans-header">

                <h1>choose your health Insurance Plan</h1>
                <p>
                  Find a plan that gives you and your family the protection you need.
          
                </p>
             </section>
             {/* Plans Section */}
             <section className="plans-section">
                <div className="plans-container">
                   {/* Basic Plan */}
                   <div className="plan-card">
                      <div className="plan-icon">
                          <FaShieldAlt />
                      </div>
                     <h2>Basic Health Plan</h2>
                     <p className="plan-description">
                         Essential health coverage for individuals.
                     </p>
                     <div className="coverage">
                        Coverage upto <strong>₹5 Lakhs</strong>
                     </div>
                     <ul>
                        <li>✓ Hospitalization Coverage</li>
                         <li>✓ Emergency Treatment</li>
                         <li>✓ 500+ Network Hospitals</li>
                         <li>✓ Cashless Treatment</li>
                     </ul>
                     <Link to="/login" className="plan-btn">
                      choose plan
                     </Link>
                    </div>  
                     {/* Family Plan */}
                     <div className="plan-card popular">
                        <div className="popular-badge">
                            Most popular
                        </div>
                        <div className="plan-icon">
                            <FaUsers/>
                        </div>
                        <h2>family health plan</h2>
                        <p className="plan-description">
                            Complete protection for your entire family.
                          </p>
                          <div className="plan-price">
                            <span>15,000</span>
                            <small>/year</small>
                          </div>
                          <div className="coverage">
                             Coverage up to <strong>₹10 Lakhs</strong>
           
                          </div>
                            <ul>
              <li>✓ Family Coverage up to 4 Members</li>
              <li>✓ Hospitalization Coverage</li>
              <li>✓ 1000+ Network Hospitals</li>
              <li>✓ Cashless Treatment</li>
            </ul>
         <Link to="/login"className="plan-btn">
         Choose plan
         </Link>
        </div>
               {/* Premium Plan */}
               <div className="plan-card">
                <div className="plan-icon">
                    <FaCrown />
                </div>
                <h2>Premimum Health Plan</h2>
                <p className="plan-description">
                    Advanced protection with higher coverage
                </p>
                <div className="plan-price">
                    <span>₹25,000</span>
                 </div>
                 <div className="coverage">
              Coverage up to <strong>₹25 Lakhs</strong>
            </div>

            <ul>
              <li>✓ Premium Hospitalization Coverage</li>
              <li>✓ Private Room</li>
              <li>✓ 2000+ Network Hospitals</li>
              <li>✓ Cashless Treatment</li>
            </ul>

            <Link to="/login" className="plan-btn">
              Choose Plan
            </Link>

             </div>
              </div>
             </section>


           </div>


    )
}
export default Plans;
