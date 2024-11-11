import React, { useEffect } from 'react'
import HeroAbout from '../components/HeroAbout'
import AboutAlflexx from '../components/AboutAlflexx'
import EfficiencyAbout from '../components/EfficiencyAbout'
import Qualityabout from '../components/Qualityabout'
import { useLocation } from 'react-router-dom'

function Aboutus() {

  // useEffect(()=>{
  //   document.title = "About Us - Alflexx"
  //   window.scrollTo(0,0)
  // },[])

  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL
    document.title = "About Us"
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove the '#' from the hash
      if (element) {
        // Calculate the position of the element
        const top = element.getBoundingClientRect().top + window.scrollY- 30;

        // Scroll to the element's position
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }else{
      window.scrollTo(0,0)
    }
  }, [location]);

  return (
    <div className='mt-[40px] md:mt-[120px]'>
      <HeroAbout/>
      <AboutAlflexx/>
      <div id="mission"></div>
      <EfficiencyAbout />
      <div id='vision' ></div>
      <Qualityabout/>
    </div>
  )
}

export default Aboutus
