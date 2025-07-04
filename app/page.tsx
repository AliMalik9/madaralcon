"use client"
import Header from "@/components/layout/header/Header";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import Services from "@/components/containers/home/Services";
import Solutions from "@/components/containers/home/Solutions";
import WorkProcess from "@/components/containers/home/WorkProcess";
import Faq from "@/components/containers/home/Faq";
import Team from "@/components/containers/home/Team";
// import Portfolio from "@/components/containers/home/Portfolio";
import Testimonial from "@/components/containers/home/Testimonial";
import Contact from "@/components/containers/home/Contact";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Gallery from "@/components/containers/home/Gallery";
import WhatsappWidget from "@/components/layout/WhatsappWidget";

const page = () => {
  return (
    <>
      <Header />
      <BannerTwo />
      <Services />
      <Solutions />
      <WorkProcess />
      <Faq />
      <Team />
      {/* <Portfolio /> */}
      <Gallery />
      <Testimonial />
      <Contact addClass={true} />
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
      <WhatsappWidget />
   </>
  );
};

export default page;
