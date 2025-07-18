import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ServiceArea from "@/components/containers/service/ServiceArea";
import Contact from "@/components/containers/home/Contact";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import WhatsappWidget from "@/components/layout/WhatsappWidget";

export const metadata: Metadata = {
  title: "خدماتنا | مدار ألكون - صيانة المكيفات والغسالات في جدة",
  description:
    "استعرض خدمات مدار ألكون في صيانة المكيفات والغسالات بجدة. فريق سعودي محترف يقدم أفضل الحلول بأعلى جودة وسرعة بقيادة محمد أحمد محبوب.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "خدمات مدار ألكون",
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
    "Madar Alcon services",
    "AC repair Jeddah",
    "washing machine repair Jeddah",
    "AC maintenance Jeddah",
    "washing machine maintenance Jeddah",
    "Saudi technicians",
    "professional maintenance Jeddah",
    "home appliance repair Jeddah",
    "fast home service Jeddah",
    "trusted AC services",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "خدماتنا | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "تعرف على جميع خدمات مدار ألكون لصيانة المكيفات والغسالات داخل جدة. نقدم أفضل الحلول بجودة عالية وفريق سعودي محترف بقيادة محمد أحمد محبوب.",
    url: "https://madaralcon.com/services",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://madaralcon.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "خدمات مدار ألكون - صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خدماتنا | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "استعرض خدمات مدار ألكون في جدة لصيانة المكيفات والغسالات بأعلى جودة وسرعة. فريق سعودي موثوق بقيادة محمد أحمد محبوب.",
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
      <BreadCrumb title="خدماتنا" />
      <ServiceArea />
      <Contact addClass={true} />
      <Footer />
      <WhatsappWidget />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
