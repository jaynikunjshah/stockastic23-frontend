import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={Home.jsx}></Route>
        <Route path='about' element={AboutUs.jsx}></Route>
        <Route path='timeline' element={Timeline.jsx}></Route>
        <Route path='cta' element={CTA.jsx}></Route>
        <Route path='sponsors' element={Sponsors.jsx}></Route>
        <Route path='faqs' element={FAQs.jsx}></Route>
        <Route path='contactus' element={ContactUs.jsx}></Route>
      </Routes>
    </>
  )
}

export default App
