import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import Solutions from "@/components/containers/home/Solutions";
import WorkProcess from "@/components/containers/home/WorkProcess";
import WorkArea from "@/components/containers/home-two/WorkArea";
import Pricing from "@/components/containers/home-two/Pricing";
import Faq from "@/components/containers/home/Faq";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import WhatsappWidget from "@/components/layout/WhatsappWidget";


export const metadata: Metadata = {
  title: "من نحن | مدار ألكون - صيانة المكيفات والغسالات في جدة",
  description:
    "تعرف على مدار ألكون، رسالتنا، وفريقنا السعودي المحترف الذي يقدم خدمات صيانة المكيفات والغسالات بجدة بكفاءة عالية وسرعة واستجابة موثوقة بقيادة محمد أحمد محبوب.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "من نحن مدار ألكون",
    "صيانة مكيفات جدة",
    "صيانة غسالات جدة",
    "شركة صيانة جدة",
    "فني مكيفات جدة",
    "فني غسالات جدة",
    "مدار ألكون",
    "تصليح مكيفات جدة",
    "تصليح غسالات جدة",
    "خدمات منزلية جدة",

    // English keywords
    "About Madar Alcon",
    "AC repair Jeddah",
    "washing machine repair Jeddah",
    "home appliance services Jeddah",
    "professional maintenance",
    "Saudi technicians",
    "trusted AC services",
    "washing machine services",
    "Madar Alcon team",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "من نحن | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "اكتشف قصة مدار ألكون وتعرّف على فريقنا المتخصص في صيانة المكيفات والغسالات بمدينة جدة. خدمات موثوقة وسريعة بقيادة محمد أحمد محبوب.",
    url: "https://madaralcon.com/about",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://madaralcon.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "من نحن - مدار ألكون - صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "تعرّف على فريق مدار ألكون السعودي المحترف الذي يقدم خدمات صيانة المكيفات والغسالات بجدة بسرعة وكفاءة عالية.",
    images: [
      "https://madaralcon.com/opengraph-image.png",
    ],
  },
  metadataBase: new URL("https://madaralcon.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="من نحن" />
      <Solutions addClass={true} />
      <WorkProcess addClass={true} />
      <WorkArea />
      <Pricing />
      <Faq />
      <Footer />
            <WhatsappWidget />

      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
