import React from "react";
import Header from "./HomePage/Header/Header";
import SlickSlider from "./Slider/Slider";
import HomepageForm from "./HomepageForm/HomepageForm";
import AboutSection from "./AboutSection/AboutSection";
import BestChoice from "./BestChoice/BestChoice";
import ProjectSlider from "./HomeProjectSlider/HomePageProjectSlider";
import PropertyShowcase from "./CompletionProjects/CompletionProjects";
import TestimonialSlider from "./Testimonial/Testimonial";
import MediaEventsSlider from "./MediaSlider/MediaSlider";
import Footer from "./Footer/Footer";
import FooterNavigation from "./Footer/FooterNav";



function Home() {
  return (
  <>
    <Header/>
   <SlickSlider/>
   <HomepageForm/>
   <AboutSection/>
    <BestChoice/>
    <ProjectSlider/>
    <PropertyShowcase/>
    <TestimonialSlider/>
    <MediaEventsSlider/>
    <Footer/>
    <FooterNavigation/>
  
  </>
  )
}

export default Home;
