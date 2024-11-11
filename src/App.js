import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './pages/Aboutus';
import Category from './pages/Category';
import Certifications from './pages/Certifications';
import Contactus from './pages/Contactus';
import Thankyou from './pages/Thankyou';
import Alualucoldfoil from './pages/Alualucoldfoil';
import Tropicalblister from './pages/Tropicalblister';
import Tropicalfoil from './pages/Tropicalfoil';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 

  const setMobileMenuOpenfn = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if(!mobileMenuOpen){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    
  }

  return (
    <Router>
    <div >
       <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpenfn={setMobileMenuOpenfn} />
       <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpenfn}/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/Certifications' element={<Certifications />} />
          <Route path='/Contact-Us' element={<Contactus />} />
          <Route path='/thank-you' element={<Thankyou />} />
          <Route path='/Category/Alu-Alu-Cold-From-Foil' element={<Alualucoldfoil />} />
          <Route path='/Category/Tropical-Blister-Foil' element={<Tropicalblister />} />
          <Route path='/Category/Tropical-Foil' element={<Tropicalfoil />} />
       </Routes>
    </div>
    <Footer/>
    <a className='fixed bottom-6 right-6 text-white hidden md:flex' href='https://web.whatsapp.com/send/?phone=9643102253&text&type=phone_number&app_absent=0' target='_blank'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' className='w-16 h-16' ></img>
    </a>

    <a className='fixed rounded-full bottom-6 right-6 text-white md:hidden flex' href='https://wa.me/9643102253' target='_blank'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' className='w-16 h-16' ></img>
    </a>
    </Router>
  );

}

export default App;
