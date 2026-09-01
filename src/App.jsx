
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Plans from "./pages/Plan";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PremiumCalculator from "./pages/PremiumCalculator";
import Dashboard from "./pages/Dashboard";
import Policy from "./pages/Policy";
import Claims from "./pages/Claims";
import Hospitals from "./pages/Hospitals";
import  Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import HospitalDetails from "./pages/HospitalDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

  <Route path="/plans" element={<Plans />} />
  <Route path="/Login" element={<Login />} />
   <Route path="/register" element={<Register />} />   
   <Route
  path="/premium-calculator"
  element={<PremiumCalculator />}
  
/>  
<Route path="/dashboard" element={<Dashboard />} />
 <Route
    path="/policy"
    element={<Policy />}
  />
    <Route
    path="/claims"
    element={<Claims />}
  />
<Route path="/hospitals" element={<Hospitals />} />
<Route path="/profile" element={<Profile />} />
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>
    </>
  );
}

export default App;
