import React, { useEffect, useState } from 'react'
import product from '../assets/image11.png'
import chk from '../assets/prime_check-circle.svg'
import backgroundImage from '../assets/alualu.png';



function Tropicalfoil() {
    const [imageLoaded, setImageLoaded] = useState(false);


    useEffect(() => {
        document.title = "Alu Alu Cold Form Foil - Alflexx"

        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = backgroundImage;
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <div className='mt-[40px] md:mt-[120px] '>
            <section className={`${imageLoaded ? 'bg-alulau-image' : 'bg-gray-200'}  md:h-[530px] h-[230px] justify-center items-end flex `}>
                {!imageLoaded && <div className="loader "></div>}
                {imageLoaded && (
                    <div className=' flex justify-center flex-col md:justify-start items-start md:items-center container md:p-0 p-7 md:mb-24'>
                        <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once md:ml-[-66px] font-bold text-[28px] text-white md:text-[54px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw] items-start'>
                            <svg className='md:w-6 md:h-6 w-3 h-3 hidden md:flex mt-16' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="19.3359" height="19.3359" fill="#1884C7" />
                            </svg>
                            &nbsp;Tropical Foil &nbsp;<svg className='md:w-6 md:h-6 w-3 h-3 hidden md:flex' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="19.3359" height="19.3359" fill="#1884C7" />
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
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] text-justify' >Tropical Foil is a laminate that helps to enhance the barrier of conventional thermoform blister. The layer is added as a secondary base web, so it has no direct product contact but helps to increase shelf life.
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

            <section className='flex  justify-center'>
                <div className='max-w-[1296px] w-[80vw] justify-between items-start flex md:mb-10  flex-col md:flex-row'>
                    <div className='md:w-[600px]'>
                        <div>
                            <p className='font-[600] md:text-[50px] text-[28px] md:leading-[75px]'>Features, Advantages and Benefits</p>
                            <ul className='my-8'>
                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Impermeable barrier to moisture/light/oxygen and other gases</p>
                                </li>

                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Maximum fracture-free forming capabilities</p>
                                </li>

                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Versatility with a selection of stiffness</p>
                                </li>

                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Additional print surface and colours</p>
                                </li>

                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Perforation flexibility</p>
                                </li>

                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Lowest Solvent Retention</p>
                                </li>

                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Complies with the international limits for global migration and RVCM content</p>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
            </section>

            <section className='flex  justify-center'>
                <div className='max-w-[1296px] w-[80vw] justify-between items-start flex flex-col md:flex-row'>
                    <div className='md:w-[700px]'>
                        <div>
                            <p className='font-[600] md:text-[50px] text-[28px] md:leading-[75px]'>Features, Advantages and Benefits</p>
                            <table className="w-full text-sm text-left rtl:text-right text-black md:my-10 my-6">
                                <thead className="text-xs text-black bg-[#CECECE]  ">
                                    <tr>
                                        <th scope="col" className="md:px-6 px-1 py-3 md:text-[18px] text-[14px] md:leading-[20px] md:w-[228px] text-wrap font-[500] border border-black">
                                        Property
                                        </th>
                                        <th scope="col" className="md:px-6 px-1 py-3 md:text-[18px] text-[14px] md:leading-[20px] font-[500] border border-black text-center">
                                        Test Method
                                        </th>
                                        <th scope="col" className="md:px-6 px-1 py-3 md:text-[18px] text-[14px] md:leading-[20px] font-[500] border border-black text-center">
                                        Unit
                                        </th>
                                        <th scope="col" className="md:px-6 px-1 py-3 md:text-[18px] text-[14px] md:leading-[20px] font-[500] border border-black text-center">
                                        Specifications
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#E7E6E9] border-b ">
                                        <th scope="row" className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] md:w-[228px] text-wrap leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                        Total thickness of foil
                                        </th>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        Standard
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        micron
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        91.00 to 111.00
                                        </td>

                                    </tr>

                                    <tr className="bg-[#E7E6E9] border-b ">
                                        <th scope="row" className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] md:w-[228px] text-wrap font-[500] text-gray-900 whitespace-nowrap border border-black">
                                        Thickness of OPA Layer</th>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        DIN 53370
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        micron
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        22.50 to 27.50  
                                        </td>


                                    </tr>

                                    <tr className="bg-[#E7E6E9] border-b ">
                                        <th scope="row" className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] md:w-[228px] text-wrap font-[500] text-gray-900 whitespace-nowrap border border-black">
                                        Thickness of Aluminium Foil
                                        </th>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        EN 546-3
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        micron
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        58.50 to 71.50
                                        </td>

                                    </tr>

                                    <tr className="bg-[#E7E6E9] border-b ">
                                        <th scope="row" className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] md:w-[228px] text-wrap font-[500] text-gray-900 whitespace-nowrap border border-black">
                                        Average coating GSM
                                        </th>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        Standard
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        g/m2
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] border border-black text-center">
                                        5 to 7
                                        </td>


                                    </tr>
                                    <tr className="bg-[#E7E6E9] border-b ">
                                        <th scope="row" className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap md:w-[228px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                        Total GSM
                                        </th>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap leading-[20px] font-[500] border border-black text-center">
                                        EN 546-3
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap leading-[20px] font-[500] border border-black text-center">
                                        g/m2
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap leading-[20px] font-[500] border border-black text-center">
                                        194.85 to 238.15
                                        </td>

                                    </tr>
                                    <tr className="bg-[#E7E6E9] border-b ">
                                        <th scope="row" className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px]  md:w-[228px] text-wrap leading-[20px] font-[500] text-gray-900 whitespace-nowrap border border-black">
                                        Heat Sealability Test (with PVC at 190°C for 1 sec)
                                        </th>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap leading-[20px] font-[500] border border-black text-center">
                                        Standard
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap leading-[20px] font-[500] border border-black text-center">
                                        kg/cm
                                        </td>
                                        <td className="md:px-6 px-1 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap leading-[20px] font-[500] border border-black text-center">
                                        0.3 minimum
                                        </td>


                                    </tr>
                                   

                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Tropicalfoil
