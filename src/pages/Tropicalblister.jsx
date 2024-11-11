import React, { useEffect, useState } from 'react'
import product from '../assets/image33.png'
import product2 from '../assets/image 14.png'
import backgroundImage from '../assets/Rectangle 731.png';

function Tropicalblister() {

    const [imageLoaded, setImageLoaded] = useState(false);


    useEffect(() => {
        document.title = "Alu Alu Cold Form Foil - Alflexx"

        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = backgroundImage;
        img.onload = () => setImageLoaded(true);
    }, []);
    return (
        <div className='mt-[40px] md:mt-[120px] '>
            <section className={`${imageLoaded ? 'bg-t-image' : 'bg-gray-200'}   md:h-[530px] h-[230px] justify-center items-end flex `}>
                {!imageLoaded && <div className="loader "></div>}
                {imageLoaded && (
                    <div className=' flex justify-center flex-col md:justify-start items-start md:items-center container md:p-0 p-7 md:mb-24'>
                        <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once md:ml-[-66px] font-bold text-[28px] text-white md:text-[54px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw] items-start'>
                            <svg className='md:w-6 md:h-6 w-3 h-3 hidden md:flex mt-16' viewBox="0 0 20 20" fill="#248ACA" xmlns="http://www.w3.org/2000/svg">
                                <rect width="19.3359" height="19.3359" blackill="#CECECE" />
                            </svg>
                            Aluminium Blister Foil &nbsp;<svg className='md:w-6 md:h-6 w-3 hidden h-3 md:flex' viewBox="0 0 20 20" fill="#248ACA" xmlns="http://www.w3.org/2000/svg">
                                <rect width="19.3359" height="19.3359" blackill="#CECECE" />
                            </svg></p>


                    </div>)}
            </section>

            <section className='flex justify-center' >

                <div className='max-w-[1296px] w-[80vw] justify-between items-start flex md:mt-20 my-10 flex-col md:flex-row'>
                    <div className='md:w-[600px]'>
                        <div>
                            <p className='font-[600] md:text-[50px] text-[28px] md:leading-[75px]'>Description</p>
                            <ul className='my-8'>
                                <li className='flex flex-row my-6'>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] text-justify' >Manufactures a range of hard Aluminium in a completely hygienic condition which can effectively protect from moisture, micro-organisms, light, oxygen, and other gases making it a primary material in the protective packaging of tablets, Capsules & injectables.
                                    </p>
                                </li>


                            </ul>
                        </div>

                    </div>
                    <div>
                        <img src={product} ></img>

                    </div>
                </div>


            </section>

            <section className='flex  justify-center overflow-auto'>
                <div className='max-w-[1296px] w-[80vw] justify-between items-start flex md:mb-20 my-10 flex-col md:flex-row'>
                    <div className='md:w-[600px]'>
                        <div>
                            <p className='font-[600] md:text-[50px] text-[28px] md:leading-[75px]'>Product Technical Specifications</p>
                            <div className="md:w-[705px] my-6">
                                <table className="w-full text-sm text-left rtl:text-right text-black ">
                                    <thead className="text-xs text-black bg-[#CECECE]  ">
                                        <tr>
                                            <th scope="col" colSpan={3} className="md:px-6 md:py-3 md:text-[18px] text-[14px] md:leading-[20px] px-1 py-3 font-[500] border border-black">
                                                Composition of Aluminium Foil:
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                                Thickness of Aluminium Foil (in micron)
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                20
                                            </td>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                25
                                            </td>

                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                                Thickness Tolerance (+/-8%) : in micron                </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                1.6-18.4
                                            </td>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                27-23
                                            </td>

                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                                Al. Foil weight (gsm)
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                54.2(+/-8%)
                                            </td>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                67.75(+/-8%)
                                            </td>

                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                                Pinholes in Al. (no/sqm) max.
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                5
                                            </td>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                                3
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                                <table className="w-full text-sm text-left rtl:text-right text-black my-16">
                                    <thead className="text-xs text-black bg-[#CECECE]  ">
                                        <tr>
                                            <th scope="col" colSpan={2} className="md:px-6 md:py-3 md:text-[18px] text-[14px] md:leading-[20px] px-1 py-3 font-[500] border border-black">
                                            For all Aluminium Foil Thickness:
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Aluminium Foil Alloy
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            AA8011
                                            </td>
                                           
                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Aluminium Foil Finish</th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            Dull/Bright
                                            </td>
                                          

                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Temper (Soft/ Hard)
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            Hard (Full Hard)
                                            </td>
                                         
                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            HSL Coating Surface
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            Dull/ Bright
                                            </td>
                                          

                                        </tr>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Sealing Strength
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            450 grams/ 15 mm.
                                            </td>
                                           
                                        </tr>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Sealing Strength
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            600 grams/ 15 mm.
                                            </td>
                                          

                                        </tr>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Sealing Surface
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            Foil to PVC, PVC/PVDC. Alu-Alu base films.
                                            </td>
                                         
                                        </tr>

                                    </tbody>
                                </table>

                                <table className="w-full text-sm text-left rtl:text-right text-black ">
                                    <thead className="text-xs text-black bg-[#CECECE]  ">
                                        <tr>
                                            <th scope="col" colSpan={2} className="md:px-6 md:py-3 md:text-[18px] text-[14px] md:leading-[20px] px-1 py-3 font-[500] border border-black">
                                            Dimensions:
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Reel Width (Unprinted. Printed)
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            60-980 mm. 60-520 mm
                                            </td>
                                           
                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Width Tolerance</th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            +/-0.5 mm
                                            </td>
                                          

                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Core Material
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            Aluminium/Plastic/Paper
                                            </td>
                                         
                                        </tr>

                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Core Diameter
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            76 mm
                                            </td>
                                          

                                        </tr>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Reel Diameter/ Reel OD
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            250-300 mm (standard)
                                            </td>
                                           
                                        </tr>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Reel OD Tolerance
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            +/-5 mm
                                            </td>
                                          

                                        </tr>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Type of Joint
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            Single Butt/Double Butt/Lap Joint
                                            </td>
                                         
                                        </tr>
                                        <tr className="bg-[#E7E6E9] border-b ">
                                            <th scope="row" className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap md:w-[387px] leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                            Type of tape used for Joint
                                            </th>
                                            <td className="md:px-6 md:py-3 md:text-[16px] text-[12px] md:leading-[20px] px-1 py-3 text-wrap leading-[20px] font-[500] border border-black text-center">
                                            Paper Tape/ Plastic Tape (Red, Brown or Black color)
                                            </td>
                                         
                                        </tr>

                                    </tbody>
                                </table>
                                
                            </div>
                        </div>

                    </div>


                </div>
            </section>



        </div>
    )
}

export default Tropicalblister
