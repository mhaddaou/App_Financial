import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// @noFastRefresh

const TwoPricing = () =>{
    const [check, setcheck] = useState(false);
    return (
        <section id="twoPricing" className=" bg-color-primary-light">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <div className="mb-5">
                        <h4 className="capitalize font-bold text-color-secondary mb-4">Pricing</h4>
                        <h1 className="capitalize title">get in reasonable price</h1>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <p className="capitalize text-lg font-semibold">bill monthly</p>
                        <input type="checkbox" onClick={() =>setcheck(!check)} defaultChecked={check} className={`toggle toggle-lg ${check === true ? 'bg-color-secondary' : 'bg-black'} text-white`}/>
                        <p className="capitalize text-lg font-semibold">bill anuallly</p>
                    </div>

                </div>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="card relative h-auto w-auto ">
                        <div className={`front px-7 py-11 rounded-2xl  border-2 border-solid border-color-gray h-full w-full ${check === false ? 'block' : 'hidden'}`}>
                            <div className="relative">
                                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    20<span className="text-sm font-semibold tracking-widest">/per month</span>
                                </p>

                            </div>
                            <div  className="py-10">
                                <h3 className=" text-xl font-bold bp-3">
                                    Basic
                                </h3>
                                <p className=" leading-relaxed capitalize">for beginner who want to scale business globaly</p>
                            </div>
                            <ul className="space-y-4 pb-10">
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Expence Managment</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button className="card_btn">Get Started</button>
                        </div>
                        <div className={`front px-7 py-11 rounded-2xl  border-2 border-solid border-color-gray h-full w-full ${check === true ? 'block' : 'hidden'}`}>
                            <div className="relative">
                                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    120<span className="text-sm font-semibold tracking-widest">/per year</span>
                                </p>

                            </div>
                            <div  className="py-10">
                                <h3 className=" text-xl font-bold bp-3">
                                    Basic
                                </h3>
                                <p className=" leading-relaxed capitalize">for beginner who want to scale business globaly</p>
                            </div>
                            <ul className="space-y-4 pb-10">
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Expence Managment</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button className="card_btn">Get Started</button>
                        </div>
                        
                    </div>
                    <div className="card relative h-auto w-auto ">
                        <div className={`front px-7 py-11 rounded-2xl  border-2 border-solid border-color-gray h-full w-full ${check === false ? 'block' : 'hidden'}`}>
                            <div className="relative">
                                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    50<span className="text-sm font-semibold tracking-widest">/per month</span>
                                </p>

                            </div>
                            <div  className="py-10">
                                <h3 className=" text-xl font-bold bp-3">
                                    Standard
                                </h3>
                                <p className=" leading-relaxed capitalize">for beginner who want to scale business globaly</p>
                            </div>
                            <ul className="space-y-4 pb-10">
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Expence Managment</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button className="card_btn">Get Started</button>
                        </div>
                        <div className={`front px-7 py-11 rounded-2xl  border-2 border-solid border-color-gray h-full w-full ${check === true ? 'block' : 'hidden'}`}>
                            <div className="relative">
                                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    150<span className="text-sm font-semibold tracking-widest">/per year</span>
                                </p>

                            </div>
                            <div  className="py-10">
                                <h3 className=" text-xl font-bold bp-3">
                                Standard
                                </h3>
                                <p className=" leading-relaxed capitalize">for beginner who want to scale business globaly</p>
                            </div>
                            <ul className="space-y-4 pb-10">
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Expence Managment</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-gray"/>
                                    <span className="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button className="card_btn">Get Started</button>
                        </div>
                        
                    </div>
                    <div className="card relative h-auto w-auto ">
                        <div className={`front px-7 py-11 rounded-2xl  border-2 border-solid border-color-gray h-full w-full ${check === false ? 'block' : 'hidden'}`}>
                            <div className="relative">
                                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    100<span className="text-sm font-semibold tracking-widest">/per month</span>
                                </p>

                            </div>
                            <div  className="py-10">
                                <h3 className=" text-xl font-bold bp-3">
                                    Premium
                                </h3>
                                <p className=" leading-relaxed capitalize">for beginner who want to scale business globaly</p>
                            </div>
                            <ul className="space-y-4 pb-10">
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Expence Managment</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button className="card_btn">Get Started</button>
                        </div>
                        <div className={`front px-7 py-11 rounded-2xl  border-2 border-solid border-color-gray h-full w-full ${check === true ? 'block' : 'hidden'}`}>
                            <div className="relative">
                                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    500<span className="text-sm font-semibold tracking-widest">/per year</span>
                                </p>

                            </div>
                            <div  className="py-10">
                                <h3 className=" text-xl font-bold bp-3">
                                    Premium
                                </h3>
                                <p className=" leading-relaxed capitalize">for beginner who want to scale business globaly</p>
                            </div>
                            <ul className="space-y-4 pb-10">
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Expence Managment</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faBookmark} className="text-color-secondary"/>
                                    <span className="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button className="card_btn">Get Started</button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}
export default TwoPricing;