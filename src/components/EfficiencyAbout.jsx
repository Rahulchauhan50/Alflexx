import React from 'react'
import rect from '../assets/Rectangle 12364.svg'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

import { staggerContainer } from "../utils/motion";

function EfficiencyAbout() {
    return (
        <div  className='flex justify-center flex-col items-center md:py-24 py-16 bg-[#002037]'>
             <motion.div
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`flex md:flex-row flex-col max-w-[1296px] w-[80vw] justify-between gap-8`}
            >
            
         
                <div className='md:w-[645px]'>
                <motion.div variants={textVariant()}>
                        <div className='ml-64'>
                        <img alt='background-image' className=' md:flex hidden ml-[-27px] md:w-5 md:h-6' src={rect}></img>
                        </div>
                        <p className='text-white font-semibold md:text-[28px] md:leading-10 text-[16px]'>Our Vision</p>
                        </motion.div >
                    <div>
                        
                    <motion.div className='flex flex-row' variants={textVariant()}>
                       
                        <img alt='background-image' className='md:flex hidden md:w-5 ml-[-23px]' src={rect}></img>
                        
                       <p className='font-semibold md:text-[50px] text-[28px] md:leading-[75px] text-white'>Efficiency, <span className='text-[#1884C7]'>Sustainability,</span> and Excellence</p>
                       <div className='flex justify-end items-end'>
                        <img alt='background-image' className='md:flex hidden md:w-6 md:h-6' src={rect}></img>
                       </div>
                      
                       </motion.div>


                       <motion.div variants={fadeIn("", "", 0.1, 1)} className='my-10'>
                            <p className=' text-[#D9D9D9] font-normal md:text-[16px] text-[14px] md:leading-[24px] text-justify' >We are ruling over the industry and breaking the traditional packaging stereotypes in the industry. We aim to revolutionise the packaging through innovation to meet the highest standards of protection and quality. We strive to be the global leader in pharmaceutical packaging solutions and our purpose is to set new and mind-blowing benchmarks in efficiency, sustainability, and excellence. We strive to safeguard the efficacy and integrity of medications worldwide.</p>

                            </motion.div>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <div className='bg-[#1884C72E] md:p-14 p-4 rounded-xl w-[510px]'>
                    <motion.div
                                variants={fadeIn("down", "spring", 1 * 0.5, 0.75)}
                               className='flex flex-row'
                            >
                        
                            <div className='py-4  mx-4'>
                                <p className='bg-[#1884C7] rounded-md px-3 py-2 text-white md:text-[24px] md:leading-[36px]  font-bold'>01</p>

                            </div>
                            <div>
                                <p className='p-2 text-white md:text-[20px] md:leading-[30px] text-[16px] font-[700]  md:font-[800]'>New and Mind-Blowing Benchmarks</p>
                                <p className='p-2 text-[#D9D9D9] md:text-[16px] md:leading-[24px] text-[14px] leading-4  font-[400]'>We are different in our approach.</p>
                            </div>
                            </motion.div>
                        
                       <motion.div
                                variants={fadeIn("down", "spring", 2 * 0.5, 0.75)}
                               className='flex flex-row'
                            >
                            <div className='py-4  mx-4'>
                                <p className='bg-[#1884C7] rounded-md px-3 py-2 text-white md:text-[24px] md:leading-[36px]  font-bold'>02</p>

                            </div>
                            <div>
                                <p className='p-2 text-white md:text-[20px] md:leading-[30px] text-[16px] font-[700]  md:font-[800]'>Safeguard the integrity of medications:</p>
                                <p className='p-2 text-[#D9D9D9] md:text-[16px] md:leading-[24px] text-[14px] leading-4  font-[400]'>Establishing the efficacy and sustainability.</p>
                            </div>
                            </motion.div>
                        
                       <motion.div
                                variants={fadeIn("down", "spring", 3 * 0.5, 0.75)}
                               className='flex flex-row'
                            >
                            <div className='py-4  mx-4'>
                                <p className='bg-[#1884C7] rounded-md px-3 py-2 text-white md:text-[24px] md:leading-[36px]  font-bold'>03</p>

                            </div>
                            <div>
                                <p className='p-2 text-white md:text-[20px] md:leading-[30px] text-[16px] font-[700]  md:font-[800]'>Revolutions in the pharmaceutical packaging:</p>
                                <p className='p-2 text-[#D9D9D9] md:text-[16px] md:leading-[24px] text-[14px] leading-4  font-[400]'>Continuous research and improvement in products.</p>
                            </div>
                            </motion.div>
                        
                    </div>
                </div>
            
            </motion.div>
        </div>
    )
}

export default EfficiencyAbout
