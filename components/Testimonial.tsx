import cash from './../img/hero3.png'
import Image from 'next/image';
const Testimonial =()=>{
    return (
        <section id="testimonial" className='relative'>
            <div className="   z-10 w-96 h-96  bg-color-blob absolute top-0 left-32 2xl:w-[500px] 2xl:h-[500px] 2xl:left-52 blur-2xl  opacity-30 overflow-hidden rounded-full"></div>
            <div className="   z-10 w-96 h-96 bg-orange-500 absolute bottom-0 right-40 2xl:w-[500px] 2xl:h-[500px] 2xl:right-60 blur-2xl opacity-25 overflow-hidden rounded-full"></div>
            <div className="container py-20 z-30">
                <div className="flex flex-col md:flex-row items-center gap-24">
                    <div className="md:w-1/2">
                        <Image src={cash} alt='img' />
                    </div>
                    <div className="md:w-1/2 text-center md:text-start">
                        <h3 className='text-color-secondary font-extrabold capitalize text-lg py-6'>saving money</h3>
                        <p className='title capitalize pb-6'>best financing app to save your money</p>
                        <p className=' leading-snug text-lg pb-6'>best financing app ever in the world. Easy to use and very user friendly for mobile banking. You can control
                            your card easily and send money some one just one click
                        </p>
                        <button className="mybtn">read more</button>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Testimonial;