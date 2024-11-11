import React, { useEffect } from 'react'
import Herocertificate from '../components/Herocertificate'
import Certificates from '../components/Certificates'


function Certifications() {
  useEffect(()=>{
     document.title = "Certifications - Alflexx"
    window.scrollTo(0,0)
  },[])
  return (
    <div className='mt-[40px] md:mt-[120px] '>
      <Herocertificate/>
      <Certificates/>
    </div>
  )
}

export default Certifications
