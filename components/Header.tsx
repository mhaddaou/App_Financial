import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";


const Header = () =>{
    return (
        <nav className=" container flex justify-between items-center">
            <div className="w-20 py-5 text-color-secondary font-bold text-3xl ">
                <Link href="/"><span className="text-color-white">Mha</span>ddaou.</Link>
            </div>
            <div >
                <ul className="hidden lg:flex items-center space-x-6">
                    <li> <Link href="#" className="links">  Home </Link></li>
                    <li> <Link href="#" className="links">  Features </Link></li>
                    <li> <Link href="#" className="links">  Testimonial </Link></li>
                    <li> <Link href="#" className="links">  Pricing </Link></li>
                    <li> <Link href="#" className="links">  Blog </Link></li>
                    <li> <Link href="#" className="links">  Contact </Link></li>
                    <li> <button className="mybtn ">  Free trial </button></li>
                </ul>
            </div>
            <div className="dropdown lg:hidden dropdown-left cursor-pointer">    
                <FontAwesomeIcon tabIndex={0} className=" " icon={faBars}  />
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 bg-white text-slate-700">
                <li> <Link href="/" className="links">  Home </Link></li>
                    <li> <Link href="#" className="links">  Features </Link></li>
                    <li> <Link href="#" className="links">  Testimonial </Link></li>
                    <li> <Link href="#" className="links">  Pricing </Link></li>
                    <li> <Link href="#" className="links">  Blog </Link></li>
                    <li> <Link href="#" className="links">  Contact </Link></li>
                    <li> <button className="mybtn text-white ">  Free trial </button></li>
                
                </ul>
            </div>
           

        </nav>
    );
}

export default Header;
