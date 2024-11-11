import React, { useEffect, useState } from 'react'
import backgroundImage from '../assets/Rectangle 7312.png';

function Herocertificate() {
    const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

    return (
        <section className={`${imageLoaded ? 'bg-custom2-image' : 'bg-gray-200'}    md:h-[530px] h-[270px]  justify-center items-end flex `}>
             {!imageLoaded && <div className="loader "></div>}
             {imageLoaded && ( <>
            <div className='hidden md:flex justify-center flex-col md:justify-start items-start md:items-center container md:p-0 p-7 md:mb-24'>
                <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once font-bold text-white md:text-[54px] text-[28px] md:leading-[82px]  flex  md:max-w-[1296px] w-[80vw]'>We are recognised and&nbsp;


                </p>
                <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once  font-bold text-[28px] text-white md:text-[54px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw] items-start'>certified by
                    &nbsp;<span className='text-[#1884C7] inline' >WHO</span>&nbsp;, IST,
                </p>


                <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once  font-bold text-[28px] text-white md:text-[54px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw] items-start'>and
                    &nbsp;<span className='text-[#1884C7]' >other</span>&nbsp;leading<span className='text-[#1884C7]' >&nbsp;global</span>
                </p>

                <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once font-bold text-white md:text-[54px] text-[28px] md:leading-[82px]  flex  md:max-w-[1296px] w-[80vw]'>standards


                </p>


            </div>
            <div className='md:hidden justify-center flex-col md:justify-start items-start md:items-center container md:p-0 p-7 md:mb-24'>
                <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once font-bold text-white md:text-[54px] text-[28px] md:leading-[82px]  md:max-w-[1296px] w-[80vw]'>We are recognised and certified by <span className='text-[#1884C7] inline' >WHO</span>, IST, and <span className='text-[#1884C7] inline'>other</span> leading <span className='text-[#1884C7] inline'>global</span> standards&nbsp;
                </p>

            </div></>)}
        </section>
    )
}

export default Herocertificate
