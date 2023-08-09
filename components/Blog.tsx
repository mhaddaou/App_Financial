import Link from 'next/link';
import blog1 from '../img/blog1.jpg'
import blog2 from '../img/blog2.jpg'
import blog3 from '../img/blog3.jpg'
import Image from 'next/image';
const Blog = () =>{
    return (
        <section id="blog" className=" bg-color-primary-light">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="capitalize font-bold text-color-secondary mb-4">inovation and quality improvement</h4>
                    <h1 className="capitalize title">latest updates, solutions and company news</h1>    
                </div>
                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
                    {/* //card num 1 */}
                    <div>
                        <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden '>
                            <Image src={blog1} alt='img' className='lg:h-full w-full hover:scale-125 transition duration-300 cursor-pointer ease-in-out'/>

                        </div>
                        <div>
                            <div className='flex items-center gap-5 py-5'>
                                <p>20 August 2022</p>
                                <p>1 min read</p>
                            </div>
                            <Link href="#blog" className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline'>
                                Four ways to cheer yoursel up on Blue Monday!
                            </Link>
                            <p className=' leading-relaxed my-5'>
                                On the second edtion of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Bob debate...
                            </p>
                            <Link className=' inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out'
                            href="#blog">
                                <span className=' tracking-wider capitalize underline hover:no-underline'>
                                    Read more
                                </span>
                            </Link>
                        </div>
                        
                    </div>
                     {/* //card num 1 */}
                     <div>
                        <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden '>
                            <Image src={blog2} alt='img' className='lg:h-full w-full hover:scale-125 transition duration-300 cursor-pointer ease-in-out'/>

                        </div>
                        <div>
                            <div className='flex items-center gap-5 py-5'>
                                <p>16 Mai 2023</p>
                                <p>1 min read</p>
                            </div>
                            <Link href="#blog" className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline'>
                                How to Organize Your budget for Maximum Productivity?
                            </Link>
                            <p className=' leading-relaxed my-5'>
                                Global provider conneccted products for consumers, and enterprises worldwide, supply chain control is everything...
                            </p>
                            <Link className=' inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out'
                            href="#blog">
                                <span className=' tracking-wider capitalize underline hover:no-underline'>
                                    Read more
                                </span>
                            </Link>
                        </div>
                        
                    </div>
                     {/* //card num 1 */}
                     <div>
                        <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden '>
                            <Image src={blog3} alt='img' className='lg:h-full w-full hover:scale-125 transition duration-300 cursor-pointer ease-in-out'/>

                        </div>
                        <div>
                            <div className='flex items-center gap-5 py-5'>
                                <p>15 July 2022</p>
                                <p>1 min read</p>
                            </div>
                            <Link href="#blog" className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline'>
                                Should Small Businesses Be Entitled to system?
                            </Link>
                            <p className=' leading-relaxed my-5'>
                                Our tem provides skilled & experienced managers who know the intricacies of this verical and focus...
                            </p>
                            <Link className=' inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out'
                            href="#blog">
                                <span className=' tracking-wider capitalize underline hover:no-underline'>
                                    Read more
                                </span>
                            </Link>
                        </div>
                        
                    </div>
                    
          

           </div>
           </div>
          

        </section>
    );
}
export default Blog;

