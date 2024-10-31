import BentoGridSection from "@/components/HomePage/BentoGridSection";
import FeaturedComments from "@/components/HomePage/FeaturedComments";
import HomePageHero from "@/components/HomePage/HomePageHero";
import OurFeatures from "@/components/HomePage/OurFeatures";
import Registration from "@/components/HomePage/Registration";

export default function HomeView() {


    return (
        <>

                <HomePageHero/>
            
                <OurFeatures/>
                       
                <FeaturedComments/>
             
                <BentoGridSection/>
                       
                <Registration/>
            
        </>
    )
}