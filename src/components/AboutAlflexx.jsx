import React from 'react'
import imgg from '../assets/img.png'
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

function AboutAlflexx() {
    return (
        <div className='flex justify-center flex-col items-center md:py-24 py-12'>
            <div className='flex flex-col md:flex-row max-w-[1296px] w-[80vw]'>
                <div className=''>
                <motion.div
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`md:w-[640px]`}
            >
                 <motion.div variants={fadeIn("", "", 0.1, 1)}>
                 <p className='text-[#1884C7] font-semibold md:text-[28px] text-[16px] leading-10'>About Alflexx</p>
            </motion.div>
                   
            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                        
                        <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>We are where innovation meets reliability.</p>
                        <div className='md:my-10 my-2'>
                            <p className='md:w-[471px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' >Alflexx owns a legacy of delivering excellence in manufacturing aluminums-based laminates used for packaging specifically in the pharmaceutical industry. Our cutting-edge packaging solutions make sure of unrivalled protection against moisture, light, and contaminants. Our products guarantee enhanced efficacy and shelf-life of the products. Leveraging over 25 years of business expertise, our mission is to deliver packaging solutions that meet the highest standards of safety and reliability.</p>
        
                        </div>
                    </motion.div>
                    </motion.div>
                </div>
                <div >
                    
                    <img alt='background-image' className='w-[600px]' src={imgg}></img>

                </div>

            </div>
        </div>
    )
}

export default AboutAlflexx
