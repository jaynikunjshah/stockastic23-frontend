import { Route, Routes } from "react-router";
import Home from "../src/components/Home";
import AboutUs from "../src/components/AboutUs";
import Timeline from "../src/components/Timeline";
import Sponsors from "../src/components/Sponsors";
import FAQs from "../src/components/FAQs";
import ContactUs from "../src/components/ContactUs";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";
import VerifyUser from "../src/components/VerifyUser";
import TeamDashboard from "../src/components/Team/TeamDashboard";
import ForgotPassword from "../src/components/ForgotPassword";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import { Helmet } from "react-helmet";
import Loader from "../src/components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating image loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const Front = () => {
    return (
      <>
        <Home />
        <AboutUs />
        <Timeline />
        <Sponsors />
        <FAQs />
        <ContactUs />
      </>
    );
  };
  return (
    <>
      <Helmet>
        <title>Stockastic&apos;23</title>
        <link rel="icon" type="image/svg+xml" href="/stockastic_logo.svg" />
        <meta name="description" content="Stockastic'23 Home Page" />
      </Helmet>
      {loading ? (
        <main className="absolute inset-0 flex items-center justify-center bg-[#000000] text-white">
          <Loader />
        </main>
      ) : (
        <Routes>
          <Route path="/" element={Front()}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="verifyuser" element={<VerifyUser />}></Route>
          <Route path="teamdashboard" element={<TeamDashboard />}></Route>
          <Route path="resetpassword/:id" element={<ForgotPassword />}></Route>
          <Route path="forgotpassword" element={<ForgotPasswordPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
