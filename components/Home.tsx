import hero from "./../img/hero4.png"
import Image from "next/image";
const Home = () =>{
    return (
        
        <section id="home" className="relative">
            <div className=" w-96 h-96  bg-color-blob absolute top-0 -left-5 blur-2xl  opacity-30 overflow-hidden rounded-full"></div>
            <div className=" w-80 h-80  bg-color-secondary absolute bottom-10 right-0 blur-2xl  opacity-30 overflow-hidden rounded-full"></div>
                <div className="container py-20">
                    <div className="flex flex-col md:flex-row items-center z-20 ">
                        <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                            <h1 className="title mb-4">Awesome App for Your Financial.</h1>
                            <p className="leading-relaxed mb-10">This should be used to tell a story and let your users know a little more about app and it's use, how can benefit them.</p>
                            <button className="mybtn">Download app</button>
                        </div>
                        <div className="md:w-1/2">
                            <Image src={hero} alt="img" />
                        </div>
                    </div>
                </div>

        </section>
    );
}
export default Home;