import { Route, Routes } from 'react-router'
import Home from '../src/components/Home'
import AboutUs from '../src/components/AboutUs'
import Timeline from '../src/components/Timeline'
import CTA from '../src/components/CTA'
import Sponsors from '../src/components/Sponsors'
import FAQs from '../src/components/FAQs'
import ContactUs from '../src/components/ContactUs'
import SignIn from '../src/components/SignIn'
import SignUp from '../src/components/SignUp'
import VerifyUser from '../src/components/VerifyUser'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<AboutUs />}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
        <Route path='timeline' element={<Timeline />}></Route>
        <Route path='cta' element={<CTA />}></Route>
        <Route path='sponsors' element={<Sponsors />}></Route>
        <Route path='faqs' element={<FAQs />}></Route>
        <Route path='contactus' element={<ContactUs />}></Route>
        <Route path="verifyuser" element={<VerifyUser />}></Route>
      </Routes>
    </>
  )
}

export default App
