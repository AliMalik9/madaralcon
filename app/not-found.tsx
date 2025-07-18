import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ErrorArea from "@/components/containers/ErrorArea";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import WhatsappWidget from "@/components/layout/WhatsappWidget";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="404 Error" />
      <ErrorArea />
      <Footer />
      <WhatsappWidget />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
