import React, { useEffect } from 'react'
import imgg from '../assets/contact-04 1.png'
import { useLocation, useNavigate } from 'react-router-dom';

function Thankyou() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    document.title = "Thank You - Alflexx"
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    if (!location.state?.submitted) {
      navigate('/');  // Redirect to the form if not submitted
    }
  }, [location.state, navigate]);

  return (
    <div className='mt-[100px] md:mt-[120px] flex justify-center'>
        <div className='max-w-[1296px] w-[80vw] flex justify-center flex-col'>
            <div className='flex justify-center' >
                <img alt='backgroud' src={imgg} className='w-[768px]' ></img>

            </div>
            <div className='flex justify-center flex-col text-center my-4'>
                <p className='font-[700] md:text-[55px] text-[24px] md:leading-[82px] my-4'>Thank you for <span className='text-[#1884C7]'>your quote</span> request!</p>
                <p className='md:w-[690px] text-[16px] mx-auto my-4' >We’re currently reviewing your needs and will get back to you shortly. We appreciate your consideration and look forward to the opportunity to work together!</p>
            </div>

        </div>
     
    </div>
  )
}

export default Thankyou
