import React, { useRef, useState } from 'react'
import logo from '../assets/Image.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import img from '../assets/Rectangle 740 B.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

function Footer() {
    const form = useRef();
    const [error, setError] = useState(false);
    const [Nerror, NsetError] = useState(false);
    const [Perror, PsetError] = useState(false);
    
    const location = useLocation()
    

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
       if(!regex.test(email)){
        setError(true)
       }

    };

    const validateName = (name) => {
       if(name.length < 3){
        NsetError(true)
       }
    };

    const validatePhone = (Phone) => {
        if(Phone.length < 1){
            PsetError(true)
           }
    };

    
    

    const sendEmail = (e) => {
        e.preventDefault();

       validateEmail(form.current.email.value)
       validateName(form.current.name.value)
       validatePhone(form.current.tel.value)



       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
       const errorMail = !regex.test(form.current.email.value)


       const errorName  = form.current.name.value.length < 3


       const errorPhone = form.current.tel.value.length < 1
       
     
        if (errorMail != true || errorName != true || errorPhone != true) {
           
           
            emailjs
          .sendForm('service_wnb1rb1', 'template_o13atyv', form.current, {
            publicKey: 'oFRAn9TtGOMUUJn3E',
          })
          .then(
            () => {
                navigate('/thank-you', { state: { submitted: true } });
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );


            
        }else{
            
        }
    
        
    };

    return (
        <div className='bg-[#002037] flex justify-center'>
            <footer className="relative max-w-[1296px] w-[80vw]  pt-8 pb-6">
            {
                    location.pathname === '/Contact-Us' || location.pathname === '/thank-you' ?"":
                <div className='my-12'>
                    <div className="flex md:flex-row flex-col">
                        <div className="md:w-[45%] bg-white">
                            <form ref={form} className='flex flex-col md:px-16 md:py-8 p-6' autoComplete='true' autoFocus>
                                <label className='md:text-[16px] text-sm leading-6 font-semibold my-4'>We would love to address your queries and partner with you.</label>
                                <input required={true} type='text' onInput={()=>{NsetError(false)}}  name='name' placeholder='your name' className={`outline-1 outline-black md:text-[16px] text-sm ${Nerror?"border-red-500":"border-slate-500"} border-[1px] p-2 my-2 rounded-md`}></input>
                                <input required type='email' name='email' onInput={()=>{setError(false)}} placeholder='your email' className={`outline-1 ${error?"border-red-500":"border-slate-500"} outline-black md:text-[16px] text-sm  border-[1px] p-2 my-2 rounded-md`}></input>
                                <input required type='number' name='tel' onInput={()=>{PsetError(false)}}  placeholder='Phone number' className={`outline-1 outline-black md:text-[16px] text-sm ${Perror?"border-red-500":"border-slate-500"} border-[1px] p-2 my-2 rounded-md`}></input>
                                <input type='text' name='company' placeholder='Company name' className={`outline-1 border-slate-500 outline-black md:text-[16px] text-sm  border-[1px] p-2 my-2 rounded-md`}></input>
                                <button onClick={sendEmail} className={`text-white focus:ring-4 font-medium rounded-md text-sm py-2.5 my-4 mb-2 bg-black  focus:outline-none focus:ring-blue-800`}>Get In Touch</button>
                            </form>
                            
                        </div>
                        <div className="md:w-[55%] ">

                            <img alt='background-image' className='md:h-full' src={img} ></img>

                        </div>
                    </div>
                </div>
}
              

                <div className="container mx-auto md:px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                            <div className="w-full lg:w-6/12 md:px-4">
                                <Link to='/'>
                                    <img alt='background-image' className='h-[40px] ' src={logo}></img>
                                </Link>
                                <div className="mt-6 lg:mb-0 mb-6">
                                    <p className='text-[#CECECE] text-[16px] font-[400] leading-[24px]'>A-62, 100 Feet Rd, Chawla Colony, <br></br>Ballabhgarh, Faridabad, Haryana 121004</p>
                                    <div className='flex flex-col md:flex-row my-6'>
                                        <div className='flex flex-row my-1 md:my-0'>
                                            <img alt='background-image' className='w-6 h-6' src={mail}></img><a href='mailto:dev@alflexx.com' className='text-[#CECECE] text-[16px] font-[400] leading-[24px] mx-2'>dev@alflexx.com</a>
                                        </div>
                                        <div className='flex flex-row md:mx-2 my-1 md:my-0' >
                                            <img alt='background-image' className='w-6 h-6' src={phone}></img><a href='tel:+91  9643102253' className='text-[#CECECE] text-[16px] font-[400] leading-[24px] mx-2'>+91 96431 02253</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 md:px-4">
                                <div className="flex flex-row md:flex-row flex-wrap md:justify-end justify-between md:gap-0 gap-6 items-top mb-6">
                                    <div className=" lg:w-4/12 md:px-4 ">
                                        <ul className="list-unstyled">
                                            <li>
                                                <p className="text-white hover:text-blueGray-800 font-[600] leading-6 block pb-2  " >About Alflexx</p>
                                            </li>
                                            <li>
                                                <Link className="text-[#CECECE] hover:text-blueGray-800 block pb-2 font-[400] text-[16px] leading-6" to="/about-us#mission">Our Vision</Link>
                                            </li>
                                            <li>
                                                <Link className="text-[#CECECE] hover:text-blueGray-800 block pb-2 font-[400] text-[16px] leading-6" to="/about-us#vision">Our Mission</Link>
                                            </li>
                                           

                                        </ul>
                                    </div>
                                    <div className=" lg:w-4/12 md:px-4">
                                        <span className="block uppercase text-white text-sm font-semibold mb-2">Quick LInks</span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className="text-[#CECECE] hover:text-blueGray-800 block pb-2 font-[400] text-[16px] leading-6" to='/Category' >Our Categories</Link>
                                            </li>
                                            <li>
                                                <Link className="text-[#CECECE] hover:text-blueGray-800 block pb-2 font-[400] text-[16px] leading-6" to='/Certifications' >Certifications</Link>
                                            </li>
                                            <li>
                                                <Link className="text-[#CECECE] hover:text-blueGray-800  block pb-2 font-[400] text-[16px] leading-6" to="/Contact-Us">Contact Us</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-blueGray-300" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 mx-auto text-center">
                                <div className="text-sm text-white py-1 font-[300]">
                                    Copyright © <span id="get-current-year">2024 Alflexx, All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                


            </footer>
        </div>
    )
}

export default Footer
