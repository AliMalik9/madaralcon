import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import FaqArea from "@/components/containers/FaqArea";
import Contact from "@/components/containers/home/Contact";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | مدار ألكون - صيانة المكيفات والغسالات في جدة",
  description:
    "اطلع على الأسئلة الأكثر شيوعًا حول خدمات مدار ألكون في صيانة المكيفات والغسالات بمدينة جدة. تعرف على التفاصيل المهمة وأجوبة استفساراتك من فريقنا السعودي المحترف بقيادة محمد أحمد محبوب.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "الأسئلة الشائعة مدار ألكون",
    "أسئلة شائعة صيانة مكيفات",
    "أسئلة شائعة صيانة غسالات",
    "خدمات صيانة جدة",
    "شركة صيانة جدة",
    "فني مكيفات جدة",
    "فني غسالات جدة",
    "مدار ألكون",
    "صيانة مكيفات",
    "صيانة غسالات",

    // English keywords
    "Madar Alcon FAQ",
    "AC repair FAQ Jeddah",
    "washing machine repair FAQ Jeddah",
    "home appliance services Jeddah",
    "AC technician Jeddah",
    "washing machine technician Jeddah",
    "professional maintenance",
    "Saudi technicians",
    "trusted AC services",
    "washing machine services Jeddah",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "الأسئلة الشائعة | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "اكتشف الإجابات على أكثر الأسئلة الشائعة حول خدمات مدار ألكون لصيانة المكيفات والغسالات في جدة. فريق سعودي محترف يجيب على جميع استفساراتك بسرعة واحترافية.",
    url: "https://madaralcon.com/faq",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://madaralcon.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "الأسئلة الشائعة - مدار ألكون - صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الأسئلة الشائعة | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "تعرف على الأسئلة الأكثر شيوعًا حول خدمات صيانة المكيفات والغسالات من مدار ألكون في جدة. إجابات موثوقة يقدمها فريق سعودي محترف.",
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
      <BreadCrumb title="الأسئلة الشائعة" />
      <FaqArea />
      <Contact addClass={true} />
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
