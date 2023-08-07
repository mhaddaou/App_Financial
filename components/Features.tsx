import { faCalendarDays, faChartColumn, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () =>{
    return (
        <section id="features">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className=" capitalize font-extrabold text-color-secondary mb-4 ">our future</h4>
                    <h1 className="capitalize title ">Easy to manage your all payments by our app</h1>
                </div>
                <div  className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                        <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark  ease-in duration-200">
                            <div className=" bg-color-secondary rounded-2xl inline-block py-5 px-6">
                                <FontAwesomeIcon className=" text-4xl"  icon={faCalendarDays}  />
                            </div>
                            <h3 className="text-2xl font-bold py-4 capitalize">expense trackering</h3>
                            <p className=" leading-relaxed text-lg">Effortlessly manage expenses, gain budget mastery, and reach financial goals with Expense Tracking.</p>
                        </div>
                        <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark  ease-in duration-200">
                            <div className=" bg-color-secondary rounded-2xl inline-block py-5 px-6">
                                <FontAwesomeIcon className=" text-4xl"  icon={faChartColumn}  />
                            </div>
                            <h3 className="text-2xl font-bold py-4 capitalize"> finance snapshot</h3>
                            <p className=" leading-relaxed text-lg">Get a quick, detailed overview of your finances with Finance Snapshot</p>
                        </div>
                        <div className="  border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark  ease-in duration-200">
                            <div className=" bg-color-secondary rounded-2xl inline-block py-5 px-6">
                            <FontAwesomeIcon className="text-4xl" icon={faPhone} />
                            </div>
                            <h3 className="text-2xl font-bold py-4 ">Support 24/7 </h3>
                            <p className=" leading-relaxed text-lg">Always there for you, our 24/7 support ensures swift assistance round the clock. Whatever you need, we've got you covered day and night.</p>
                        </div>
                    
                </div>
            </div>

        </section>
    );
}
export default Features;