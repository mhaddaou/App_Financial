import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {PiCopyright} from 'react-icons/pi'

const Footer = () =>{
    return (
        <section id="footer">
            <div className="bg-color-primary-dark relative">
                <div>
                    <div className=" py-10 px-20 ">
                    <div className="grid gap-10 md:gap-20 md:grid-cols-3 pb-10 border-b-2">
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg capitalize">about app</h4>
                            <p className=" leading-relaxed capitalize text-lg">this should be used to tell as story and include any testimonials you might have about product or service for your client</p>
                            <div className=" flex gap-4 items-center">
                                <div>
                                    <p className="font-semibold">Follow Us</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                <Link href="https://github.com/mhaddaou" target="_blank">
                                <BsGithub className="h-7 w-7 " />
                                </Link>
                                <Link href="">
                                    <FaFacebookF className="h-6 w-7 " />
                                </Link>
                                <Link href="https://www.linkedin.com/in/mohamed-haddaoui-26b28423a/" target="_blank">
                                    <FaLinkedinIn className="h-6 w-7 "/>
                                </Link>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="flex ">
                            <div className="space-y-6 w-1/2">
                                <div >
                                    <h4 className="font-bold text-lg capitalize">quick links</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300  ease-in-out " href="#">Home</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300  ease-in-out " href="#">Features</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300  ease-in-out " href="#">Testimonial</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300  ease-in-out " href="#">Pricing</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300  ease-in-out " href="#">Blog</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300  ease-in-out " href="#">Contact</Link>

                                </div>
                            </div>
                            <div className="w-1/2 space-y-6">
                                <div >
                                    <p className="font-bold text-lg ">Help</p>
                                </div>
                                <div className=" flex flex-col gap-2">
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300 ease-in-out" href="#">About Us</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300 ease-in-out" href="#">Partners</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300 ease-in-out" href="#">Career</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300 ease-in-out" href="#">Reviews</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300 ease-in-out" href="#">Terms & Conditions</Link>
                                    <Link className="font-semibold underline hover:text-color-secondary hover:no-underline transition-all duration-300 ease-in-out" href="#">Help</Link>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div >
                                <p className="font-bold text-lg">Newsletter</p>
                            </div>
                            <div className="space-y-5">
                                <p className=" leading-relaxed capitalize text-lg ">subscribe with email and loads of news will be sent to you</p>
                                <div className="w-[80%] h-12 bg-white rounded-md flex">
                                    <div className="h-full w-[85%]">
                                        <input className="h-full w-full bg-white rounded-l-md text-slate-800 font-semibold px-2 focus:outline-none" 
                                        type="text" placeholder="Enter Your Email"
                                         />
                                    </div>
                                    <div className=" h-full w-[15%] bg-color-secondary cursor-pointer flex justify-center rounded-r-md items-center">
                                        <button><FaGreaterThan className="bg-color-secondary h-full"/></button>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                           
                        </div>

                    </div>

                </div>
                </div>
                
                <div className=" md:w-1/2  m-auto text-center pb-10">
                    <p className=" font-semibold">2023 <PiCopyright className=" inline text-lg"/> Mhaddaou, All Righte Reserved</p>
                </div>

            </div>
        </section>
    );
}

export default Footer;