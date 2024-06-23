import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import TestmonialCards from "@/components/TestmonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home(){
  return(
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection/> 
     <FeaturedCourses/>
     <WhyChooseUs/>
     <TestmonialCards/>
     <UpcomingWebinars/>
     <Instructors/>
     <Footer/>
   </main>
  )
}