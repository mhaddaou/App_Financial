const Contact = () =>{
    return (
        <section id="contact">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="capitalize font-bold text-color-secondary mb-4">have a question</h4>
                    <h1 className="capitalize title">Get In touch</h1>    
                </div>
                <form >
                    <div className="w-full  md:w-1/2 m-auto text-center">
                        <div className="grid md:grid-cols-2 gap-6 text-color-primary mb-6 place-items-center">
                            <input type="text" placeholder="Name" className="input input-bordered input-primary bg-white sm:w-full max-w-xs" />
                            <input type="text" placeholder="Email" className="input input-bordered input-primary bg-white sm:w-full max-w-xs" />
                            <input type="text" placeholder="Phone" className="input input-bordered input-primary bg-white sm:w-full max-w-xs" />
                            <input type="text" placeholder="Company" className="input input-bordered input-primary bg-white sm:w-full max-w-xs" />
                        </div>
                        <div className="py-6">
                        <textarea className="textarea textarea-primary textarea-lg w-full text-slate-800 bg-white" placeholder="Message"></textarea>
                        </div>
                        <div>
                        <button className="mybtn">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;