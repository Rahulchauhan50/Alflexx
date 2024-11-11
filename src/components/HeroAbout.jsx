import React, { useEffect, useState } from 'react'
import backgroundImage from '../assets/Rectangle 764.png';

function HeroAbout() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className={`${imageLoaded ? 'bg-aboutus-image' : 'bg-gray-200'} md:h-[530px] h-[230px] justify-center items-end flex `}>
      {!imageLoaded && <div className="loader "></div>}
      {imageLoaded && (
        <div className=' flex justify-center flex-col md:justify-start items-start md:items-center container md:p-0 p-7 md:mb-24'>
          <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once font-bold text-white md:text-[54px] text-[28px] md:leading-[82px]  flex  md:max-w-[1296px] w-[80vw]'>Pharmaceutical&nbsp;
            <svg className='md:w-6 md:h-6 w-3 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="19.3359" height="19.3359" fill="#1884C7" />
            </svg>

          </p>
          <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once md:ml-[-66px] font-bold text-[28px] text-white md:text-[54px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw] items-start'>
            <svg className='md:w-6 md:h-6 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="19.3359" height="19.3359" fill="#1884C7" />
            </svg>
            &nbsp;<span className='text-[#1884C7]' >Packaging</span>&nbsp;Perfected</p>


        </div>)}
    </section>
  )
}

export default HeroAbout
