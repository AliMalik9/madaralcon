import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import Projects from "@/components/containers/project/Projects";
import Contact from "@/components/containers/home/Contact";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

export const metadata: Metadata = {
  title: "مشاريعنا | مدار ألكون - صيانة المكيفات والغسالات في جدة",
  description:
    "استعرض أحدث مشاريع مدار ألكون في صيانة المكيفات والغسالات بمدينة جدة. خبرة طويلة وجودة عالية يقدمها فريق سعودي محترف بقيادة محمد أحمد محبوب.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "مشاريع مدار ألكون",
    "أعمال صيانة مكيفات جدة",
    "أعمال صيانة غسالات جدة",
    "أعمال شركة مدار ألكون",
    "فني مكيفات جدة",
    "فني غسالات جدة",
    "مدار ألكون",
    "شركة صيانة جدة",
    "خدمات صيانة جدة",
    "أحدث المشاريع جدة",

    // English keywords
    "Madar Alcon projects",
    "AC repair projects Jeddah",
    "washing machine repair projects Jeddah",
    "Madar Alcon works",
    "AC maintenance Jeddah",
    "washing machine maintenance Jeddah",
    "Saudi technicians",
    "professional maintenance Jeddah",
    "home appliance repair projects",
    "trusted AC services Jeddah",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "مشاريعنا | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "اطلع على مشاريع مدار ألكون المتميزة في جدة في مجال صيانة المكيفات والغسالات. فريق سعودي محترف يقدم حلولاً بجودة عالية وسرعة تنفيذ بقيادة محمد أحمد محبوب.",
    url: "https://madaralcon.com/projects",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://qskz3k3ndax6ixp5yyjrfheyle.srv.us/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "مشاريع مدار ألكون - صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاريعنا | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "تعرف على أبرز مشاريع مدار ألكون في مجال صيانة المكيفات والغسالات بجدة. جودة عالية وخبرة فريق سعودي محترف بقيادة محمد أحمد محبوب.",
    images: [
      "https://qskz3k3ndax6ixp5yyjrfheyle.srv.us/opengraph-image.png",
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
      <BreadCrumb title="مشاريعنا" />
      <Projects />
      <Contact addClass={true} />
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
