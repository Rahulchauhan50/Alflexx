import React from "react";
import vid from '../assets/Final_alflexx VDO.mp4'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { staggerContainer } from "../utils/motion";


function Whoweare() {
    return (
        <div>
            
            <div className="pt-[40px] pb-[30px]">
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`sm:px-16 px-6 sm:py-10 py-10 max-w-7xl mx-auto relative z-0`}
            >
            <motion.div variants={textVariant()}>
                <p className="font-[600] justify-center flex md:text-[55px] text-[32px] md:leading-[83px]">Who we are</p>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className='font-normal justify-center flex App text-[#828282] md:text-[16px] text-[12px] leading-[24px]'>
            Alflexx is a trusted legacy partner excelling in the manufacturing of aluminium-based laminates <br></br>tailored for pharmaceutical packaging. We aim to deliver pharmaceutical packaging solutions with the <br></br>utmost quality and care.
            </motion.p>
                {/* <p className="font-normal justify-center flex App text-[#828282] md:text-[16px] text-[12px] leading-[24px]">Alflexx is a trusted legacy partner excelling in the manufacturing of aluminium-based laminates <br></br>tailored for pharmaceutical packaging.We aim to deliver pharmaceutical packaging solutions with the <br></br>utmost quality and care.</p> */}
                </motion.section>
            </div>
           <div className="">
           <video autoPlay={true} loop={true} muted={true} className=" relative min-w-full ">
                <source src={vid} type="video/mp4"/>
            </video>
           </div>
           
        </div>
    )
}

export default Whoweare


