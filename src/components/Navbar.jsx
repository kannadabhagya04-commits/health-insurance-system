import{Link} from "react-router-dom";
import{FaHeartbeat} from "react-icons/fa";
import "../styles/Navbar.css";
function Navbar()
{
    return(
          <nav className="navbar">
               <div className="navbar-container">
                  <Link to="/" className="navbar-logo">
                   <FaHeartbeat className="logo-icon" />
                  <span>HealthCare</span>
               </Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/plans">plans</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>

                </div>
                <div className="navbar-buttons">
                    <Link to="/login" className="login-btn">Login</Link>
                    <Link to="/register" className="register-btn">GEt Started</Link>


                </div>
                
                
                </div>  


          </nav>

    )
}
export default Navbar;