import React from 'react'
import vt1 from '../assets/Vector1.svg'
import vt2 from '../assets/vector2.svg'
import vt3 from '../assets/vector3.svg'
import vt4 from '../assets/vector4.svg'
import vt5 from '../assets/vector5.svg'
import vt6 from '../assets/vector6.svg'
import rect1 from '../assets/Rectangle 12358.svg'
import rect2 from '../assets/Rectangle 12359.svg'

function Corestrength() {
    return (
        <div className='justify-center flex py-16 flex-col items-center'>
            <div className='container max-w-[1296px] w-[80vw] '>
                <div className="flex flex-col md:flex-row mb-8">
                    <div className="md:w-[40%] font-[600] md:text-[50px] text-[32px] leading-[68px]">Core Strengths <img alt='background-image' src={rect2} className='pt-12 md:flex hidden'></img></div>
                    <div className="md:w-[50%] text-[#828282] font-[400] text-[16px] leading-[24px] text-justify">
                        <img alt='background-image' src={rect1} className='mx-12 md:flex hidden'></img>
                        Alflexx aims to set new benchmarks in the pharmaceutical industry. Our services and products hold the integrity of our actions. Following are the solid reasons that help us stand apart from the competition:</div>
                    <div className="md:w-[10%] flex justify-end items-end mb-12"><img alt='background-image' src={rect2} className='md:flex hidden'></img></div>
                </div>

            </div>

            <div className='flex md:flex-row flex-col gap-8 max-w-[1296px] w-[80vw]  justify-between'>


                <div className="w-full max-w-sm bg-white border group hover:bg-[#002037] border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img className="rounded-t-lg " width={100} src={vt1} alt="g" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white  text-gray-900 ">Exclusive manufacturing process</p>

                    </div>
                </div>
                <div className="w-full group hover:bg-[#002037] max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img  className="rounded-t-lg " width={100} src={vt2} alt="prod" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white text-gray-900 ">High-speed production</p>

                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border group hover:bg-[#002037] border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img className="rounded-t-lg " width={100} src={vt3} alt="product im" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white text-gray-900 ">Strict quality control policy</p>

                    </div>
                </div>


            </div>

            <div className='flex md:flex-row flex-col gap-8 max-w-[1296px] w-[80vw]  md:my-16 my-8 justify-between'>


                <div className="w-full group hover:bg-[#002037] max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img className="rounded-t-lg " width={100} src={vt4} alt="pimage" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white text-gray-900 ">Technically expert manpower</p>

                    </div>
                </div>
                <div className="w-full group hover:bg-[#002037] max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img className="rounded-t-lg " width={100} src={vt5} alt="productimage" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white text-gray-900 ">Strong network </p>

                    </div>
                </div>
                <div className="w-full group hover:bg-[#002037] max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl flex items-center p-8 justify-center flex-col">

                    <img className="rounded-t-lg " width={100} src={vt6} alt="prodimage" />
                    <div className="px-5 pb-5">
                        <p className="text-[24px] leading-[36px] font-[700] App tracking-tight group-hover:text-white text-gray-900 ">Continuous Research & Development</p>

                    </div>
                </div>


            </div>


          


        </div>
    )
}

export default Corestrength
