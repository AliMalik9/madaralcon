import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ContactArea from "@/components/containers/ContactArea";
// import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

export const metadata: Metadata = {
  title: "تواصل معنا | مدار ألكون - خدمات صيانة المكيفات والغسالات في جدة",
  description:
    "تواصل مع فريق مدار ألكون المتخصص في صيانة المكيفات والغسالات داخل جدة. خدمات منزلية سريعة وموثوقة يقدمها فريق سعودي محترف بقيادة محمد أحمد محبوب.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "تواصل مع مدار ألكون",
    "صيانة مكيفات جدة",
    "صيانة غسالات جدة",
    "فني مكيفات جدة",
    "فني غسالات جدة",
    "خدمات منزلية جدة",
    "شركة صيانة جدة",
    "مدار ألكون",
    "تصليح مكيفات",
    "تصليح غسالات",
    "اتصل بنا مدار ألكون",

    // English Keywords
    "Contact Madar Alcon",
    "AC repair Jeddah",
    "washing machine repair Jeddah",
    "contact AC technician Jeddah",
    "contact washing machine technician",
    "Saudi AC services",
    "home appliance repair Jeddah",
    "Madar Alcon contact",
    "fast home services Jeddah",
    "professional maintenance",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "تواصل معنا | مدار ألكون - خدمات صيانة المكيفات والغسالات في جدة",
    description:
      "تواصل مع فريق مدار ألكون المتخصص في تقديم خدمات صيانة المكيفات والغسالات بجدة. سرعة في الخدمة، ودقة في العمل، وفريق سعودي موثوق بقيادة محمد أحمد محبوب.",
    url: "https://madaralcon.com/contact",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://madaralcon.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "تواصل مع مدار ألكون - خدمات صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا | مدار ألكون - خدمات صيانة المكيفات والغسالات في جدة",
    description:
      "تواصل مع مدار ألكون للحصول على خدمات صيانة المكيفات والغسالات بسرعة وكفاءة في جدة بواسطة فريق سعودي متخصص بقيادة محمد أحمد محبوب.",
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
      <BreadCrumb title="تواصل معنا" />
      <ContactArea />
      {/* <SubscribeArea /> */}
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
