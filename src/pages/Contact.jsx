import { useState } from "react";
import "../styles/Contact.css";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
    

const handleSubmit = async (e) => {

  e.preventDefault();

  setError("");
  setSuccess("");

  // Check all fields
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    subject === "" ||
    message === ""
  ) {

    setError("Please fill all the fields.");

    return;
  }


  try {

    const response = await fetch(
      "http://localhost:8080/api/contacts",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          fullName: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message
        })
      }
    );


    if (!response.ok) {

      throw new Error("Failed to send message");

    }


    const data = await response.json();

    console.log("Contact message saved:", data);


    // Success message
    setSuccess(
      "Thank you! Your message has been sent successfully."
    );


    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");


  } catch (error) {

    console.error("Contact error:", error);

    setError(
      "Unable to send your message. Please make sure the server is running."
    );

  }

};












  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   setError("");
  //   setSuccess("");


  //   // Check all fields

  //   if (
  //     name === "" ||
  //     email === "" ||
  //     phone === "" ||
  //     subject === "" ||
  //     message === ""
  //   ) {

  //     setError("Please fill all the fields.");

  //     return;
  //   }


  //   // Success message

  //   setSuccess(
  //     "Thank you! Your message has been sent successfully."
  //   );


  //   // Clear form

  //   setName("");
  //   setEmail("");
  //   setPhone("");
  //   setSubject("");
  //   setMessage("");

  // };


  return (

    <div className="contact-page">


      {/* ========================================
          CONTACT HEADER
      ======================================== */}

      <section className="contact-header">

        <div className="contact-header-content">

          <span className="contact-small-title">
            GET IN TOUCH
          </span>

          <h1>
            Contact HealthCare+
          </h1>

          <p>
            We're here to help you with your health insurance
            questions and provide the support you need.
          </p>

        </div>

      </section>



      {/* ========================================
          CONTACT MAIN SECTION
      ======================================== */}

      <section className="contact-section">

        <div className="container">

          <div className="contact-content">


            {/* ========================================
                LEFT SIDE - CONTACT INFORMATION
            ======================================== */}

            <div className="contact-info">

              <h2>
                Let's Talk
              </h2>

              <p className="contact-description">

                Have questions about our health insurance
                plans, policies or claims? Our support team
                is ready to assist you.

              </p>



              {/* Phone */}

              <div className="contact-detail">

                <div className="contact-icon">

                  <FaPhone />

                </div>

                <div>

                  <h3>
                    Phone
                  </h3>

                  <p>
                    +91 98765 43210
                  </p>

                </div>

              </div>



              {/* Email */}

              <div className="contact-detail">

                <div className="contact-icon">

                  <FaEnvelope />

                </div>

                <div>

                  <h3>
                    Email
                  </h3>

                  <p>
                    support@healthcareplus.com
                  </p>

                </div>

              </div>



              {/* Address */}

              <div className="contact-detail">

                <div className="contact-icon">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3>
                    Address
                  </h3>

                  <p>
                    HealthCare+ Insurance Services,
                    Bangalore, Karnataka, India
                  </p>

                </div>

              </div>



              {/* Working Hours */}

              <div className="contact-detail">

                <div className="contact-icon">

                  <FaClock />

                </div>

                <div>

                  <h3>
                    Working Hours
                  </h3>

                  <p>
                    Monday - Saturday
                  </p>

                  <p>
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>



              {/* Support Box */}

              <div className="support-box">

                <FaHeadset />

                <div>

                  <h3>
                    Need Quick Help?
                  </h3>

                  <p>
                    Our customer support team is available
                    to help you with your insurance needs.
                  </p>

                </div>

              </div>

            </div>



            {/* ========================================
                RIGHT SIDE - CONTACT FORM
            ======================================== */}

            <div className="contact-form-card">


              {/* Form Heading */}

              <div className="form-heading">

                <h2>
                  Send Us a Message
                </h2>

                <p>
                  Fill out the form and our team will
                  get back to you soon.
                </p>

              </div>



              <form onSubmit={handleSubmit}>


                {/* ========================================
                    NAME + EMAIL
                ======================================== */}

                <div className="form-row">


                  {/* Name */}

                  <div className="form-group">

                    <label>
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                    />

                  </div>



                  {/* Email */}

                  <div className="form-group">

                    <label>
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />

                  </div>

                </div>



                {/* ========================================
                    PHONE
                ======================================== */}

                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                  />

                </div>



                {/* ========================================
                    SUBJECT
                ======================================== */}

                <div className="form-group">

                  <label>
                    Subject
                  </label>

                  <select
                    value={subject}
                    onChange={(e) =>
                      setSubject(e.target.value)
                    }
                  >

                    <option value="">
                      Select a subject
                    </option>

                    <option value="Insurance Plans">
                      Insurance Plans
                    </option>

                    <option value="Policy Information">
                      Policy Information
                    </option>

                    <option value="Claims">
                      Claims
                    </option>

                    <option value="Premium Calculator">
                      Premium Calculator
                    </option>

                    <option value="Hospital Network">
                      Hospital Network
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>



                {/* ========================================
                    MESSAGE
                ======================================== */}

                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                  ></textarea>

                </div>



                {/* ========================================
                    ERROR MESSAGE
                ======================================== */}

                {error && (

                  <p className="contact-error">
                    {error}
                  </p>

                )}



                {/* ========================================
                    SUCCESS MESSAGE
                ======================================== */}

                {success && (

                  <p className="contact-success">
                    {success}
                  </p>

                )}



                {/* ========================================
                    SUBMIT BUTTON
                ======================================== */}

                <button
                  type="submit"
                  className="contact-submit"
                >

                  <FaPaperPlane />

                  Send Message

                </button>


              </form>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          WHY CONTACT US
      ======================================== */}

      <section className="contact-help">

        <div className="container">

          <div className="help-content">

            <h2>
              We're Here to Help
            </h2>

            <p>
              Whether you need help choosing an insurance
              plan, understanding your policy, or submitting
              a claim, HealthCare+ is always ready to support you.
            </p>

          </div>

        </div>

      </section>


    </div>

  );

}

export default Contact;