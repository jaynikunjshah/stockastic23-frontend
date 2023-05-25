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

function App() {
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
			<Routes>
				<Route path="/" element={Front()}></Route>
				<Route path="signin" element={<SignIn />}></Route>
				<Route path="signup" element={<SignUp />}></Route>
				<Route path="verifyuser" element={<VerifyUser />}></Route>
				<Route path="teamdashboard" element={<TeamDashboard />}></Route>
				<Route path="resetpassword/:id" element={<ForgotPassword />}></Route>
				<Route path="forgotpassword" element={<ForgotPasswordPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
