import React from 'react'
import vt1 from '../assets/Frame2.svg'
import vt2 from '../assets/Frame.svg'
import vt3 from '../assets/Frame1.svg'
import rect1 from '../assets/Rectangle 12358.svg'
import rect2 from '../assets/Rectangle 12359.svg'
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

function Qualityabout() {
    return (
        <div  className='justify-center flex md:py-24 py-14 flex-col items-center'>
             <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`container max-w-[1296px] w-[80vw] `}
            >
        
                <div className="flex flex-col md:flex-row mb-8">

                <motion.div variants={textVariant()} className="md:w-[50%] font-[600] md:text-[50px] text-[28px] md:leading-[68px]">
                    
                        <div>
                            <p className='text-[#1884C7] font-semibold md:text-[28px] text-[16px] md:leading-10 leading-3'>Our Mission</p>
                        </div  >
                        Quality and Customer satisfaction
                        <img alt='background-image' src={rect2} className='pt-12 md:flex hidden'>
                        </img>
                    
                    </motion.div>
                    <motion.div variants={fadeIn("", "", 0.1, 1)} className="md:w-[40%] text-[#828282] font-[400] md:text-[16px] text-[14px] md:leading-[24px] mt-10 md:my-0 text-justify">
                        <img alt='background-image' src={rect1} className='mx-12 md:flex hidden'></img>
                        Over the years, we have put our efforts into research and development of pharmaceutical packaging. We set our standards and start the production process to achieve perfection. We ensure controlled humidity and temperature in our production warehouse and our machinery is placed in safe and hygienic working conditions to meet the standards of our organisation. We guarantee superior production and high-quality products.
                        </motion.div>
                    <div className="md:w-[10%] flex justify-end items-end mb-12"><img alt='background-image' src={rect2} className='md:flex hidden'></img></div>
                </div>

                </motion.section>

            <div className='flex md:flex-row flex-col gap-8 max-w-[1296px] w-[80vw]  justify-between'>


                <div className="w-full max-w-sm bg-white border group hover:bg-[#002037] border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img  className="rounded-t-lg " width={100} src={vt1} alt="product" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white  text-gray-900 ">Unrivalled partner</p>

                    </div>
                </div>
                <div className="w-full group hover:bg-[#002037] max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img alt='background-i' className="rounded-t-lg " width={100} src={vt2} />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white text-gray-900 ">Unmatched CSAT</p>

                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border group hover:bg-[#002037] border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img className="rounded-t-lg " width={100} src={vt3} alt="pro" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white text-gray-900 ">Unsurpassed quality</p>

                    </div>
                </div>


            </div>






        </div>
    )
}

export default Qualityabout
