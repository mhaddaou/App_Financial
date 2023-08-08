const Pricing = () =>{
    return (
        <section id="how-it-works" className="bg-color-primary-light">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="capitalize font-bold text-color-secondary mb-4">how it works</h4>
                    <h1 className="capitalize title">grow up your money saving</h1>
                </div>
                <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                    <div className="text-center cursor-pointer">
                        <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer
                        hover:bg-color-secondary ease-in duration-200">
                            <p className="text-6xl lg:after:content-[''] lg:after:flex  lg:after:bg-[url('../img/line.png')]
                             lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat
                            lg:after:h-7 lg:after:w-52">1</p>
                        </div>
                        <h3 className="capitalize text-xl font-bold py-4">install the app</h3>
                        <p className="leading-relaxed text-lg text-center">We use an appliccation designed a testing</p>

                    </div>
                    <div className="text-center cursor-pointer">
                        <div className="relative bg-color-secondary inline-block px-6 py-3 rounded-lg cursor-pointer
                        hover:bg-color-primary-dark ease-in duration-200">
                            <p className="text-6xl lg:after:content-[''] lg:after:flex  lg:after:bg-[url('../img/line-bottom.png')]
                             lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat
                            lg:after:h-7 lg:after:w-52">2</p>
                        </div>
                        <h3 className="capitalize text-xl font-bold py-4">setup your profile</h3>
                        <p className="leading-relaxed text-lg">We use an appliccation designed a testing</p>

                    </div>
                    <div className="text-center cursor-pointer">
                        <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer
                        hover:bg-color-secondary ease-in duration-200">
                            <p className="text-6xl">3</p>
                        </div>
                        <h3 className="capitalize text-xl font-bold py-4">enjoy the features!</h3>
                        <p className="leading-relaxed text-lg">We use an appliccation designed a testing</p>

                    </div>
                </div>

            </div>

        </section>
    );

}
export default Pricing;