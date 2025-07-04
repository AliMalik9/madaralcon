import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ProjectDetails from "@/components/containers/project/ProjectDetails";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Project Details" />
      <ProjectDetails />
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
