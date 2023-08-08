import Image from "next/image";
import user1 from '../img/user1.jpg'
import user2 from '../img/user2.jpg'
import user3 from '../img/user3.jpg'
import user4 from '../img/user4.jpg'
import user5 from '../img/user5.jpg'
import { useState } from "react";
const par = `"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"!`;

interface arrTypes{
    para : string;
    name : string;
    job : string;
}
const arr : arrTypes[] = [{para : par, name : "Vera Duncan", job : "Flutter developer"}, {para: par, name :"Pirtle Karol",job:"Android developer" }, 
{para:par, name:"Markin Nesus", job:"IOS developer"}, {para:par, name:"Leila Domniuc", job: "Next Developer"}, {para:par, name:"Mark Joe",job:"React developer"}];

const ShowReview = ({num} : {num : number}) =>{
    num--;
    return(
        <div className="user-text">
            <p className="md:text-2xl mb-6">
                {arr[num].para}
            </p>
            <h4 className="font-extrabold text-color-secondary mb-1">{arr[num].name}</h4>
            <p>{arr[num].job}</p>
        </div>
    );
}

const TwoTesti = () =>{
    const [click, setClick] = useState(1);
    const circle = "border-4 border-solid border-color-secondary";
    return (
        <section id="twoTestimonial">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="capitalize font-bold text-color-secondary mb-4">user review</h4>
                    <h1 className="capitalize title">what clients say about our app after use it</h1>
                </div>
                <div className=" mt-8">
                    <div className="flex items-center justify-center flex-wrap">
                        <Image onClick={()=> setClick(1)} className={`client ${click === 1 ? circle : 'non' }`} src={user1} alt="" />
                        <Image onClick={()=> setClick(2)} className={`client ${click === 2 ? circle : 'non' }`} src={user2} alt="" />
                        <Image onClick={()=> setClick(3)} className={`client ${click === 3 ? circle : 'non' }`} src={user3} alt="" />
                        <Image onClick={()=> setClick(4)} className={`client ${click === 4 ? circle : 'non' }`} src={user4} alt="" />
                        <Image onClick={()=> setClick(5)} className={`client ${click === 5 ? circle : 'non' }`} src={user5} alt="" />
                    </div>
                    <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
                        <ShowReview num={click}/>
                    </div>
                </div>

            </div>

        </section>
    );
}
export default TwoTesti;