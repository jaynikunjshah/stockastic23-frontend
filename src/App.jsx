import { Route, Routes } from 'react-router'
import Home from '../src/components/Home'
import AboutUs from '../src/components/AboutUs'
import Timeline from '../src/components/Timeline'
import CTA from '../src/components/CTA'
import Sponsors from '../src/components/Sponsors'
import FAQs from '../src/components/FAQs'
import ContactUs from '../src/components/ContactUs'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<AboutUs />}></Route>
        <Route path='timeline' element={<Timeline />}></Route>
        <Route path='cta' element={<CTA />}></Route>
        <Route path='sponsors' element={<Sponsors />}></Route>
        <Route path='faqs' element={<FAQs />}></Route>
        <Route path='contactus' element={<ContactUs />}></Route>
      </Routes>
    </>
  )
}

export default App
