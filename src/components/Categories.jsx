import React from 'react'
import imgg from '../assets/image (3).png'
import imgg2 from '../assets/image (4).png'
import imgg1 from '../assets/image (5).png'
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { Link } from 'react-router-dom';

function Categories() {
    return (
        <div className='flex justify-center flex-col items-center md:py-24 py-12'>
            <div className='border-[1.28px] border-[#E2E2E2] flex flex-col md:flex-row max-w-[1296px] w-[80vw] justify-between items-center pb-4 md:pb-0'>
                <div className='md:order-[-1] order-1 mx-4 md:mx-0'>
                    <motion.div
                        variants={staggerContainer()}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.25 }}
                        className={`md:w-[650px] pt-4`}
                    >

                        <motion.div variants={fadeIn("", "", 0.1, 1)} className='md:pl-16 py'>

                            <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>Alu Alu Cold Form Foil</p>
                            <div className='md:my-4 my-2'>
                                <p className='md:w-[471px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' >Alu Alu Cold Form Foil is ideal for primary pharmaceutical blister packaging. It is highly suitable for moisture-sensitive products like capsules and tablets. This foil is specifically designed for pharmaceutical and generic medicines that are highly hygroscopic or light-sensitive and cannot be packed with barrier plastic films.</p>

                            </div>
                            <div className='pt-3'>
                            <Link to='/Category/Alu-Alu-Cold-From-Foil'  className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">More info</Link>
                            </div>

                        </motion.div>
                    </motion.div>
                </div>
                <div >

                    <img alt='background-image' className='w-[600px]' src={imgg}></img>

                </div>

            </div>




            <div className='border-[1.28px] border-[#E2E2E2] flex flex-col md:flex-row max-w-[1296px] w-[80vw] justify-between items-center my-20 pb-4 md:pb-0 bg-[#f1f8fc]'>
                <div >

                    <img alt='background-image' className='w-[690px]' src={imgg2}></img>

                </div>
                <div className=''>
                    <motion.div
                        variants={staggerContainer()}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.25 }}
                        className={`md:w-[600px] pt-4 md-mx-0 mx-4`}
                    >

                        <motion.div variants={fadeIn("", "", 0.1, 1)} className='md:pl-16 py'>

                            <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>Aluminium <span className='text-[#1884C7]'>Blister</span>  Foil</p>
                            <div className='md:my-4 my-2'>
                                <p className='md:w-[471px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' >Manufactures a range of hard Aluminium in a completely hygienic condition which can effectively protect from moisture, micro-organisms, light, oxygen, and other gases making it a primary material in the protective packaging of tablets, Capsules & injectables.</p>

                            </div>
                            <div className='pt-3'>
                            <Link to='/Category/Tropical-Blister-Foil'  className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">More info</Link>
                            </div>

                        </motion.div>
                    </motion.div>
                </div>


            </div>


 
            <div className='border-[1.28px] border-[#E2E2E2] flex flex-col md:flex-row max-w-[1296px] w-[80vw] justify-between items-center pb-4 md:pb-0'>
                <div className='md:order-[-1] order-1 mx-4 md:mx-0'>
                    <motion.div
                        variants={staggerContainer()}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.25 }}
                        className={`md:w-[650px] pt-4`}
                    >

                        <motion.div variants={fadeIn("", "", 0.1, 1)} className='md:pl-16 py'>

                            <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>Tropical Foil</p>
                            <div className='md:my-4 my-2'>
                                <p className='md:w-[471px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' > Tropical Foil is a laminate that helps to enhance the barrier of conventional thermoform blister. The layer is added as a secondary base web, so it has no direct product contact but helps to increase shelf life.</p>

                            </div>
                            <div className='pt-3'>
                            <Link to='/Category/Tropical-Foil' className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">More info</Link>
                            </div>

                        </motion.div>
                    </motion.div>
                </div>
                <div >

                    <img alt='background-image' className='w-[600px]' src={imgg1}></img>

                </div>

            </div>

        </div>
    )
}

export default Categories
