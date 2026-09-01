import{useState,useEffect} from "react";
import "../styles/About.css";

function About() {
  const [customerCount, setCustomerCount] = useState(0);
      useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    setCustomerCount(users.length);

  }, []);



  return (
    <div className="about-page">

      {/* About Company */}

      <section className="about-company">

        <div className="container">

          {/* Heading */}

          <div className="about-title">

            <h1>About HealthCare+</h1>

            <p>
              Your trusted platform for simple and reliable
              health insurance management.
            </p>

          </div>


          {/* Main Content */}

          <div className="about-content">

            {/* Left Side */}

            <div className="about-text">

              <h2>Making Insurance Simple</h2>

              <p className="about-description">
                HealthCare+ is a modern health insurance management
                platform designed to make healthcare protection
                simple, transparent and accessible.
              </p>
              

              <p className="about-description">
                Our platform allows users to explore health insurance
                plans, compare coverage, calculate premiums, manage
                policies and find network hospitals from one place.
              </p>

              <p className="about-description">
                We believe that understanding and managing health
                insurance should not be complicated. HealthCare+
                brings important insurance services together in one
                easy-to-use platform.
              </p>

            </div>


            {/* Right Side */}

            <div className="about-info-card">

              <h3>HealthCare+</h3>

              <p>
                Protecting your health.
                <br />
                Securing your future.
              </p>

              <div className="about-points">

                <div>
                  ✓ Easy Insurance Management
                </div>

                <div>
                  ✓ Multiple Insurance Plans
                </div>

                <div>
                  ✓ Network Hospital Search
                </div>

                <div>
                  ✓ Premium Calculation
                </div>

                <div>
                  ✓ Simple Claim Management
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="records-section">
           <div className="container">
            <div className="records-title">
             <center><h2>Our Records& Achievements</h2></center>
              <p>
        Our commitment to providing simple, reliable and
        accessible healthcare insurance services.
      </p>
            </div>
            <div className="records-card">
              <h3>{customerCount}+</h3>
              <p>Total Customers</p>
            </div>
            <div className="records-card">
              <h3>500+</h3>
              <p>Network Hospitals </p>
            </div>

<div className="records-card">

  <h3>95%</h3>

  <p>Claims Processed</p>

</div>
<div className="records-card">

  <h3>10+</h3>

  <p>Years of Service</p>

</div>



           </div>



      </section>

    </div>
  );
}

export default About;