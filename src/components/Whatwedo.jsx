import React from 'react'
import img1 from '../assets/image.png'
import img2 from '../assets/image (1).png'
import img3 from '../assets/image (2).png'
import rect1 from '../assets/Rectangle 12358.svg'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

import { staggerContainer } from "../utils/motion";
import { Link } from 'react-router-dom'



function Whatwedo() {

   

    return (
        <div className='flex justify-center flex-col items-center bg-[#002037] pt-10 pb-16'>
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={` max-w-7xl relative z-0`}
            >
                <div className='container pb-16 max-w-[1296px] w-[80vw] '>
                    <div>
                        <motion.div variants={textVariant()}>
                            <h2 className=' sm:text-[50px] xs:text-[40px] font-bold text-white md:text-[50px] text-[32px] leading-9 md:leading-[68px] my-4'><img alt='background-image' src={rect1} className='ml-[17rem] mb-4 md:flex hidden'></img>What we do.
                            
                            </h2>
                        </motion.div>
                        <div className='md:w-[600px] flex flex-row'>
                       
                            <img alt='background-image' src={rect1} className='ml-[-33px] mr-3 md:flex hidden'></img>

                            <motion.p variants={fadeIn("", "", 0.1, 1)} className='font-[200] text-[#DCDCDC] md:text-[16px] text-sm md:leading-[24px] text-justify'
                            >We are breaking the stereotypes of pharmaceutical packaging. In our research, we have found that Aluminium foil material blocks moisture, gas, light, and germs. It protects the medicines from environmental factors such as oxygen and moisture. The coverage that aluminium foil provides to the medical leaf results in increased efficacy and shelf-life of pharmaceutical products.
                            </motion.p>
                        </div>
                    </div>
                </div>
                {/* <div className='flex max-w-[1296px] w-[80vw] flex-col md:flex-row gap-8 justify-between'>

                <div className=" bg-[#051727] border rounded-lg shadow  border-gray-700 md:w-[368px]">
                    <a href="#">
                        <img className="rounded-t-lg" src={img1} alt="" />
                    </a>
                    <div className="justify-center pt-2">

                        <p className="mb-3 App font-normal text-gray-700 dark:text-gray-400">Alu Alu Cold Form Foil (Plain)</p>

                    </div>
                </div>


                <div className=" bg-[#051727] border rounded-lg shadow  border-gray-700 md:w-[368px]">
                    <a href="#">
                        <img className="rounded-t-lg" src={img2} alt="" />
                    </a>
                    <div className="justify-center pt-2">

                        <p className="mb-3 App font-normal text-gray-700 dark:text-gray-400">Aluminium Blister Foils</p>

                    </div>
                </div>



                <div className=" bg-[#051727] border rounded-lg shadow  border-gray-700 md:w-[368px]">
                    <a href="#">
                        <img className="rounded-t-lg" src={img3} alt="" />
                    </a>
                    <div className="justify-center pt-2">

                        <p className="mb-3 App font-normal text-gray-700 dark:text-gray-400">Tropical Foils</p>

                    </div>
                </div>


            </div> */}

                <>

                    <div className='flex max-w-[1296px] w-[80vw] flex-col md:flex-row gap-8 justify-between'>

    
                        <div className='xs:w-[250px] w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'>
                            <motion.div
                                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                                className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                            >
                                <div className=" bg-[#051727] border rounded-lg shadow  border-gray-700 md:w-[368px]">
                                    <Link to='/Category/Alu-Alu-Cold-From-Foil' >
                                        <img className="rounded-t-lg w-full" src={img1} alt="" />
                                    </Link>
                                    <div className="justify-center pt-2">

                                        <p className="mb-3 App font-normal text-gray-700 dark:text-gray-400">Alu Alu Cold Form Foil (Plain)</p>

                                    </div>
                                </div>


                            </motion.div>
                        </div>
                        <div className='xs:w-[250px] w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'>
                            <motion.div
                                variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}
                                className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                            >
                                <div className=" bg-[#051727] border rounded-lg shadow  border-gray-700 md:w-[368px]">
                                    <Link to='/Category/Tropical-Blister-Foil' >
                                        <img className="rounded-t-lg w-full" src={img2} alt="" />
                                    </Link>
                                    <div className="justify-center pt-2">

                                        <p className="mb-3 App font-normal text-gray-700 dark:text-gray-400">Aluminium Blister Foils</p>

                                    </div>
                                </div>


                            </motion.div>
                        </div>
                        <div className='xs:w-[250px] w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'>
                            <motion.div
                                variants={fadeIn("right", "spring", 3 * 0.5, 0.75)}
                                className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                            >
                                <div className=" bg-[#051727] border rounded-lg shadow  border-gray-700 md:w-[368px]">
                                    <Link to='/Category/Tropical-Foil'>
                                        <img className="rounded-t-lg w-full" src={img3} alt="" />
                                    </Link>
                                    <div className="justify-center pt-2">

                                        <p className="mb-3 App font-normal text-gray-700 dark:text-gray-400">Tropical Foils</p>

                                    </div>
                                </div>


                            </motion.div>
                        </div>

                    </div>
                </>
            </motion.section>

        </div>
    )
}

export default Whatwedo
