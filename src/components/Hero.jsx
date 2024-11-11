import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import backgroundImage from '../assets/Rectangle 731.png';

function Hero() {

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className={`md:h-[634px] justify-center items-center flex ${imageLoaded ? 'bg-custom-image' : 'bg-gray-200'} `}>
      {!imageLoaded && <div className="loader "></div>}
      {imageLoaded && (
        <div className=' flex justify-center flex-col md:justify-start items-start md:items-center container md:p-0 p-7'>
          <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once font-bold text-white md:text-[54px] text-[28px] md:leading-[82px]  flex  md:max-w-[1296px] w-[80vw]'>Welcome To Alflexx ,&nbsp;
            <svg className='md:w-6 md:h-6 w-3 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="19.3359" height="19.3359" fill="#1884C7" />
            </svg>

          </p>
          <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once font-bold text-[#1884C7] md:text-[54px] text-[28px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw]'>Premium&nbsp;<span className='text-white'>Foil,&nbsp;</span> <span className='text-[#1884C7]'>Secure</span></p>
          <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once md:ml-[-66px] font-bold text-[28px] text-white md:text-[54px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw] items-end'>
            <svg className='md:w-6 md:h-6 w-3 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="19.3359" height="19.3359" fill="#1884C7" />
            </svg>
            &nbsp;Pharma</p>
          <div className='my-8'>
            <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 font-normal text-white md:text-[16px] leading-[24px] text-[14px] justify-start flex  md:max-w-[1296px] w-[80vw]' >
            Leading Partner in manufacturing aluminium foil based </p>
            <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 font-normal text-white md:text-[16px] leading-[24px] text-[14px] justify-start flex  md:max-w-[1296px] w-[80vw]'>laminates for the pharmaceutical industry</p>
          </div>
          <div className='justify-start flex  md:max-w-[1296px] w-[80vw]'>
            <Link to='/about-us' type="button" className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">Read more</Link>

          </div>
        </div>)}
    </section>
  )
}

export default Hero
