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
           </div>

        </section>
    );
}
export default Blog;

