import React, { useEffect, useRef, useState } from 'react'
import img from '../assets/Rectangle 740 B.png'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import backgroundImage from '../assets/Rectangle 733.png';


function Contactus() {
  const form = useRef();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [Nerror, NsetError] = useState(false);
  const [Perror, PsetError] = useState(false);
  

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


  useEffect(()=>{
    document.title = "Contact Us - Alflexx"
    window.scrollTo(0,0)
  },[])


  

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className='mt-[40px] md:mt-[120px]'>
      <section className={`${imageLoaded ? 'bg-custom3-image' : 'bg-gray-200'}  md:h-[714px] h-screen justify-center items-center flex`}>  {!imageLoaded && <div className="loader "></div>}
      {imageLoaded && (
        <div className='max-w-[1296px] w-[80vw]'>
          <div className='flex justify-center'>

            <p className='animate-fade-right animate-duration-[1500ms] justify-center animate-delay-300 animate-once font-bold text-white md:text-[54px] text-[28px] md:leading-[82px]  flex  md:max-w-[1296px] w-[80vw]'> <svg className='md:w-6 md:h-6 w-3 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg className='md:w-6 md:h-6 w-3 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="19.3359" height="19.3359" fill="#1884C7" />
              </svg>
            </svg>Contact Us&nbsp;
              <svg className='md:w-6 md:h-6 w-3 h-3' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="19.3359" height="19.3359" fill="#1884C7" />
              </svg>

            </p>
          </div>


          <div className='my-12'>
                    <div className="flex md:flex-row flex-col">
                        <div className="md:w-[45%] bg-white">
                        <form ref={form} className='flex flex-col md:px-16 md:py-8 p-6' autoComplete='true' autoFocus>
                                <label className='md:text-[16px] text-sm leading-6 font-semibold my-4'>We would love to address your queries and partner with you.</label>
                                <input required={true} type='text' onInput={()=>{NsetError(false)}}  name='name' placeholder='your name' className={`outline-1 outline-black md:text-[16px] text-sm ${Nerror?"border-red-500":"border-slate-500"} border-[1px] p-2 my-2 rounded-md`}></input>
                                <input required type='email' name='email' onInput={()=>{setError(false)}} placeholder='your email' className={`outline-1 ${error?"border-red-500":"border-slate-500"} outline-black md:text-[16px] text-sm  border-[1px] p-2 my-2 rounded-md`}></input>
                                <input required type='number' name='tel' onInput={()=>{PsetError(false)}}  placeholder='Phone number' className={`outline-1 outline-black md:text-[16px] text-sm ${Perror?"border-red-500":"border-slate-500"} border-[1px] p-2 my-2 rounded-md`}></input>
                                <input type='text' name='company' placeholder='Company name' className={`outline-1 outline-black md:text-[16px] text-sm border-slate-500 border-[1px] p-2 my-2 rounded-md`}></input>
                                <button onClick={sendEmail} className={`text-white focus:ring-4 font-medium rounded-md text-sm py-2.5 my-4 mb-2 bg-black  focus:outline-none focus:ring-blue-800`}>Get In Touch</button>
                            </form>
                        </div>
                        <div className="md:w-[55%] ">
                           
                                <img alt='background-image' className='h-full' src={img} ></img>

                        </div>
                    </div>
                </div>

        </div>
      )}
      </section>
    </div>
  )
}

export default Contactus
