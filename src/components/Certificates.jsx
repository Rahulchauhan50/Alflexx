import React from 'react'
import imgg from '../assets/SHAKTI FOAMS OHSMS.png'
import img2 from '../assets/SHAKTI FOAMS QMS.png'
import img3 from '../assets/Shakti Foams - 15378 2017_page-0001 1.png'
import img4 from '../assets/Shakti Foams GMP_page-0001 (1) 1.png'
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

function Certificates() {
    return (
        <div className='flex justify-center'>


            <div className='max-w-[1296px] w-[80vw] '>
                <div className='flex justify-start md:flex-row flex-col md:items-center items-start py-12 '>
                    <div className='md:mr-24 '>
                        <img alt='background-image' src={imgg} className='md:w-auto w-full'></img>
                    </div>
                    <div className='flex flex-col'>
                        <motion.div
                            variants={staggerContainer()}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true, amount: 0.25 }}
                            className={``}
                        >
                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='text-[#1884C7] font-semibold md:text-[26px] text-[14px] leading-10'>Certificate Of Registration</p>
                            </motion.div>




                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>IOS 45001 : 2018</p>

                                <div className='md:my-10 my-2'>
                                    <p className='md:w-[751px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' >This is to certify that “Shakti Foams Private Limited” at Harphala, Mohala Road, Harphala Sikri-Ballabgarh, Faridabad, 121004, Haryana, India has been assessed by RAPL and found to comply with the requirements of ISO 45001:2018 Occupational Health and Safety Management Systems for the following scope of activities: Manufacturing of PU Foam, Mattresses, Pet Chips, PP Monofilament, Pet Mona-filament, Pharma Primary Packaging Material.</p>

                                </div>

                                <a href={`https://${window.location.hostname}/assets/PDF2.pdf`} download="IOS 45001 : 2018" style={{textDecoration: "none", color: "white"}}>
                                    <button className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">Download PDF</button>
                                </a>

                            </motion.div>
                        </motion.div>
                    </div>





                </div>
                <div className='flex justify-start md:flex-row flex-col md:items-center items-start py-12 '>
                    <div className='md:mr-24'>
                        <img alt='background-image' src={img2}></img>
                    </div>
                    <div className='flex flex-col'>
                        <motion.div
                            variants={staggerContainer()}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true, amount: 0.25 }}
                            className={``}
                        >
                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='text-[#1884C7] font-semibold md:text-[26px] text-[14px] leading-10'>Certificate Of Registration</p>
                            </motion.div>




                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>IOS 9001 : 2015</p>
                                <div className='md:my-10 my-2'>
                                    <p className='md:w-[751px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' >This is to certify that “Shakti Foams Private Limited” at Harphala, Mohala Road, Harphala Sikri-Ballabgarh, Faridabad, 121004, Haryana, India has been independently assessed by RAPL and found to comply with the requirements of ISO 9001:2015 Quality Management Systems for the following scope of activities: Manufacturing of PU Foam, Mattresses, Pet Chips, PP Monofilament, Pet Mona-filament, Pharma Primary Packaging Material.</p>

                                </div>
                                <a href={`https://${window.location.hostname}/assets/PDF1.pdf`} download="IOS 9001 : 2015" style={{textDecoration: "none", color: "white"}}>
                                    <button className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">Download PDF</button>
                                </a>
                            </motion.div>
                        </motion.div>

                    </div>





                </div>

                <div className='flex justify-start md:flex-row flex-col md:items-center items-start py-12 '>
                    <div className='md:mr-24'>
                        <img alt='background-image' src={img3}></img>
                    </div>
                    <div className='flex flex-col'>
                        <motion.div
                            variants={staggerContainer()}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true, amount: 0.25 }}
                            className={``}
                        >
                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='text-[#1884C7] font-semibold md:text-[26px] text-[14px] leading-10'>Euroswiss Certification</p>
                            </motion.div>




                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>IOS 15378 : 2017</p>
                                <div className='md:my-10 my-2'>
                                    <p className='md:w-[751px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' >This is to certify that “Shakti Foams Private Limited” at Harphala, Mohala Road, Harphala Sikri-Ballabgarh, Faridabad, 121004, Haryana, India has been assessed by ECI and found to comply with the requirements of ISO 15378:2017 Primary Packaging Materials for Medicinal Products Particular Requirements. For the following activities: "Manufacturing of Primary Pharma Packaging"</p>

                                </div>
                                <a href={`https://${window.location.hostname}/assets/PDF3.pdf`} download="IOS 15378 : 2017" style={{textDecoration: "none", color: "white"}}>
                                    <button className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">Download PDF</button>
                                </a>
                            </motion.div>
                        </motion.div>

                    </div>





                </div>
                <div className='flex justify-start md:flex-row flex-col md:items-center items-start py-12 '>
                    <div className='md:mr-24'>
                        <img alt='background-image' src={img4}></img>
                    </div>
                    <div className='flex flex-col'>
                        <motion.div
                            variants={staggerContainer()}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true, amount: 0.25 }}
                            className={``}
                        >
                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='text-[#1884C7] font-semibold md:text-[26px] text-[14px] leading-10'>Euroswiss Certification</p>
                            </motion.div>




                            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                                <p className='font-semibold text-[28px] md:text-[50px] md:leading-[75px] leading-[40px]'>Good Manufacturing Practice</p>
                                <div className='md:my-10 my-2'>
                                    <p className='md:w-[751px] text-[#828282] font-normal md:text-[16px] text-[12px] md:leading-[24px] leading-[20px] text-justify' >This is to certify that “Shakti Foams Private Limited” at Harphala, Mohala Road, Harphala Sikri-Ballabgarh, Faridabad, 121004, Haryana, India has been assessed by ECI and found to comply with the requirements of GMP [Guidelines for Good Manufacturing Practice (GMP)]. For the following activities: Manufacturing of PU Foam, Mattresses, PET Chips, PP Monofilament, PET Monofilament, Pharma Primary Packaging Material.</p>

                                </div>
                                <a href={`https://${window.location.hostname}/assets/PDF4.pdf`} download="Good Manufacturing Practice" style={{textDecoration: "none", color: "white"}}>
                                    <button className="text-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-[#1884C7]  focus:outline-none focus:ring-blue-800">Download PDF</button>
                                </a>
                            </motion.div>
                        </motion.div>

                    </div>





                </div>
            </div>
        </div>
    )
}

export default Certificates
