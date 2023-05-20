import { Route, Routes, useLocation } from "react-router";
import Home from "../src/components/Home";
import AboutUs from "../src/components/AboutUs";
import Timeline from "../src/components/Timeline";
import CTA from "../src/components/CTA";
import Sponsors from "../src/components/Sponsors";
import FAQs from "../src/components/FAQs";
import ContactUs from "../src/components/ContactUs";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";
import VerifyUser from "../src/components/VerifyUser";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const [onAuthRoute, setOnAuthRoute] = useState(false);
  const checkRoute = () => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/verifyuser"
    ) {
      setOnAuthRoute(true);
    } else {
      setOnAuthRoute(false);
    }
  };
  
  setTimeout(() => {
    checkRoute();
  }, 0);

  return (
    <>
      <Routes>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="verifyuser" element={<VerifyUser />}></Route>
      </Routes>
      {onAuthRoute ? null : (
        <div>
          <Home />
          <AboutUs />
          <Timeline />
          <CTA />
          <Sponsors />
          <FAQs />
          <ContactUs />
        </div>
      )}
    </>
  );
}

export default App;
