import { Route, Routes } from 'react-router'
import Home from '../src/components/Home'
import AboutUs from '../src/components/AboutUs'
import Timeline from '../src/components/Timeline'
import Sponsors from '../src/components/Sponsors'
import FAQs from '../src/components/FAQs'
import ContactUs from '../src/components/ContactUs'
import SignIn from '../src/components/SignIn'
import SignUp from '../src/components/SignUp'
import VerifyUser from '../src/components/VerifyUser'
import TeamDashboard from '../src/components/Team/TeamDashboard'
import CreateTeam from '../src/components/Team/CreateTeam'
import JoinTeam from '../src/components/Team/JoinTeam'

function App() {
  const Front = () => {
    return (
      <>
      <Home/>
        <AboutUs/>
        <Timeline/>
        <Sponsors/>
        <FAQs/>
        <ContactUs/></>
    )
  }
  return (
    
    <>
      <Routes>
        <Route path='/' element={Front()}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
        <Route path="verifyuser" element={<VerifyUser />}></Route>
        <Route path="TeamDashboard" element={<TeamDashboard />}></Route>
        <Route path="CreateTeam" element={<CreateTeam />}></Route>
        <Route exact path="JoinTeam/:code" element={<JoinTeam />}></Route>
      </Routes>
    </>
  )
}

export default App
