import React from 'react'
import logo from '../assets/Image.svg'
import phone from '../assets/ph_phone.svg'
import ic from '../assets/ic_outline-mail.svg'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'



function Header({mobileMenuOpen, setMobileMenuOpen}) {
    return (
        <div >
            <header>
                <nav className="fixed top-0 z-[100] w-screen bg-[#002037]  px-4 lg:px-6 py-2.5 h-[74px] md:h-[120px] ">
                    <div className="flex h-full flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to='/' className="flex items-center">
                            <img src={logo} className="mr-3 md:h-[55px]  h-[38px]" alt="Flowbite Logo" />
                        </Link>
                       <div className='flex flex-row'>
                       <div className="md:flex hidden items-center lg:order-2">
                            
                            <a href='tel:+91 9643102253' className="text-white focus:ring-4  font-medium rounded-lg text-sm px-1 lg:px-1 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">
                                <img alt='background-image' height={34} width={34} src={phone}></img>
                            </a>
                            <a href='mailto:dev@alflexx.com'  className="text-white focus:ring-4  font-medium rounded-lg text-sm px-1 lg:px-1 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">
                                <img alt='background-image' height={34} width={34} src={ic}></img>
                            </a>

                        </div>
                        {mobileMenuOpen ? (<RiCloseLine onClick={() => setMobileMenuOpen(false)} className='w-6 h-6 md:hidden text-white mr-2' />) : (<HiOutlineMenu onClick={() => setMobileMenuOpen(true)} className='w-6 h-6 md:hidden text-white mr-2' />)}
                       
                        <div className="mr-12 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                                <li>
                                    <Link to='/about-us' className="block py-2 pr-4 pl-3  border-b   lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-100 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">About Us</Link>
                                </li>
                                <li>
                                    <Link to='/Category' className="block py-2 pr-4 pl-3  border-b   lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-100 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">Category</Link>
                                </li>
                                <li>
                                    <Link to='/Certifications' className="block py-2 pr-4 pl-3  border-b   lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-100 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">Certifications</Link>
                                </li>
                                <li>
                                    <Link to='/Contact-Us' className="block py-2 pr-4 pl-3  border-b   lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-100 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">Contact Us</Link>
                                </li>
                            </ul>

                        </div>
                       </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
