import React, { useEffect, useState } from 'react'
import chk from '../assets/prime_check-circle.svg'
import product from '../assets/image 12.png'
import backgroundImage from '../assets/alualu.png';


function Alualucoldfoil() {
  const [imageLoaded, setImageLoaded] = useState(false);


    useEffect(()=>{
    document.title = "Alu Alu Cold Form Foil - Alflexx"

        window.scrollTo(0,0)
      },[])

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
                    <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once font-bold text-white md:text-[54px] text-[28px] md:leading-[82px]  flex  md:max-w-[1296px] w-[80vw]'>Alu Alu&nbsp;<span className='text-[#1884C7]' >Cold</span  > &nbsp;From&nbsp;
                        <svg className='md:w-6 md:h-6 w-3 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="19.3359" height="19.3359" fill="#1884C7" />
                        </svg>

                    </p>
                    <p className='animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-once md:ml-[-66px] font-bold text-[28px] text-white md:text-[54px] md:leading-[82px] justify-start flex  md:max-w-[1296px] w-[80vw] items-start'>
                        <svg className='md:w-6 md:h-6 w-3 h-3 hidden md:flex' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="19.3359" height="19.3359" fill="#1884C7" />
                        </svg>
                        Foil</p>


                </div>)}
            </section>

            <section className='flex justify-center md:pt-0 pt-8' >

                <div className='max-w-[1296px] w-[80vw] justify-between items-start flex md:mt-20 flex-col md:flex-row'>
                    <div className='md:w-[600px]'>
                        <div>
                            <p className='font-[600] md:text-[50px] text-[28px] md:leading-[75px]'>Features, Advantages and Benefits</p>
                            <ul className='my-8'>
                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Efficient & Effective barrier to moisture and oxygen, even after cold forming.</p>
                                </li>
                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >High mechanical properties.</p>
                                </li>
                              
                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Various three-dimensional draw ratios are possible, including applications with extremely deep draw requirements</p>
                                </li>
                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Total barrier to light.</p>
                                </li>
                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >Specifically adapted performance of each layer makes the foil extremely cold-formable.</p>
                                </li>
                                <li className='flex flex-row my-6'>
                                    <span className='mr-4'>
                                        <img src={chk} ></img>
                                    </span>
                                    <p className='font-[400] text-[16px] leading-[24px] text-[#828282] md:w-[525px] w-[65vw]' >High dimensional stability after cold forming. Optimum protection is guaranteed even under extreme conditions of climate.</p>
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
            <div className='max-w-[1296px] w-[80vw] justify-start items-start flex md:mb-20 my-10 flex-col md:flex-row '>
                    <div className='md:w-[600px]'>
                        <div>
                            <p className='font-[600] md:text-[50px] text-[28px] md:leading-[75px]'>Product Technical Specifications</p>
                           

<div className="md:w-[705px] my-6">
    <table className="w-full text-sm text-left rtl:text-right text-black ">
        <thead className="text-xs text-black bg-[#CECECE]  ">
            <tr>
                <th scope="col" className="md:px-6 md:py-3 md:text-[18px] text-[14px] md:leading-[20px] px-3 py-3 font-[500] border border-black">
                Raw Material
                </th>
                <th scope="col" className="md:px-6 md:py-3 md:text-[18px] text-[14px] md:leading-[20px] px-1 py-3 font-[500] border border-black text-center">
                μ(Microns)
                </th>
                <th scope="col" className="md:px-6 md:py-3 md:text-[18px] text-[14px] md:leading-[20px] px-1 py-3 font-[500] border border-black text-center">
                μ(Microns)
                </th>
                <th scope="col" className="md:px-6 md:py-3 md:text-[18px] text-[14px] md:leading-[20px] px-1 py-3 font-[500] border border-black text-center">
                μ(Microns)
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-[#E7E6E9] border-b ">
                <th scope="row" className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] text-black whitespace-nowrap border border-black">
                OPA
                </th>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                    25
                </td>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                    25
                </td>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                    25
                </td>
            </tr>

            <tr className="bg-[#E7E6E9] border-b ">
                <th scope="row" className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] text-gray-900 whitespace-nowrap border border-black">
                Aluminium Foil                </th>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                    40
                </td>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                    45
                </td>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                    50
                </td>
            </tr>

            <tr className="bg-[#E7E6E9] border-b ">
                <th scope="row" className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] text-wrap font-[500] text-gray-900 whitespace-nowrap border border-black">
                PVC Film
                </th>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                  60
                </td>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                  60
                </td>
                <td className="md:px-6 px-1 md:py-4 py-3 md:text-[16px] text-[12px] md:leading-[20px] font-[500] border border-black text-center">
                  60
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

export default Alualucoldfoil
