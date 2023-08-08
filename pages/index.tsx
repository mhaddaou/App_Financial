
import Header from "@/components/Header"
import Home from "@/components/Home"
import Features from "@/components/Features"
import Testimonial from "@/components/Testimonial"
import Pricing from "@/components/Pricing"
import TwoTesti from "@/components/TwoTesti"
import TwoPricing from "@/components/TwoPricing"
import Blog from "@/components/Blog"

export default function Index() {
  return (
    <main className="text-color-white bg-color-primary tracking-wider">
      <header>
        <Header />
      </header>
        <Home/>
        <Features />
        <Testimonial />
        <Pricing />
        <TwoTesti />
        <TwoPricing />
        <Blog />


    </main>
  
   
  )
}
