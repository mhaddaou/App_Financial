import Link from "next/link";
import ios from  '../img/ios-store-dark.png'
import android from '../img/g-play-dark.png'
import Image from "next/image";
import useDarkModeDetection from "./CheckDark";
const DownloadApp = () =>{
    useDarkModeDetection();
    
    return (
        <section id="download-app" className="bg-color-primary-light pb-5">
            <div className="container h-[80vh] grid place-items-center">
                <div className="text-center md:w-2/3 m-auto">
                    <h1 className="title capitalize">download app now and save your money</h1>
                    <p className="leading-relaxed pt-5">Serving an impressive list of long-term money with experience and expertise in multiple industries.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
                    <Link href="#" className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                        <Image src={ios} alt="img" />
                    </Link>
                    <Link href="#" className="bg-color-white dark:bg-white dark:text-white    h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                        <Image src={android} alt="img" />
                    </Link>
                    </div>
                </div>
                
            </div>
            

        </section>
    );
}

export default DownloadApp;