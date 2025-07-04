import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ErrorArea from "@/components/containers/ErrorArea";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

export const metadata: Metadata = {
  title: "404 - الصفحة غير موجودة | مدار ألكون",
  description:
    "عذرًا، الصفحة التي تبحث عنها غير موجودة. يمكنك الرجوع إلى الصفحة الرئيسية أو تصفح خدمات مدار ألكون في صيانة المكيفات والغسالات في جدة.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "404 خطأ",
    "الصفحة غير موجودة",
    "مدار ألكون",
    "خدمات صيانة جدة",
    "مكيفات",
    "غسالات",
    "فني صيانة جدة",
    "شركة صيانة جدة",

    // English keywords
    "404 error page",
    "page not found",
    "Madar Alcon",
    "AC repair Jeddah",
    "washing machine repair Jeddah",
    "maintenance services Jeddah",
    "home appliance services",
    "Saudi technician",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "404 - الصفحة غير موجودة | مدار ألكون",
    description:
      "لم يتم العثور على الصفحة المطلوبة. اكتشف خدماتنا في صيانة المكيفات والغسالات بجدة أو عد إلى الصفحة الرئيسية.",
    url: "https://madaralcon.com/404",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://qskz3k3ndax6ixp5yyjrfheyle.srv.us/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "مدار ألكون - الصفحة غير موجودة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - الصفحة غير موجودة | مدار ألكون",
    description:
      "يبدو أنك ضللت الطريق! لا تقلق، يمكنك العودة إلى الصفحة الرئيسية أو التعرف على خدمات مدار ألكون.",
    images: [
      "https://qskz3k3ndax6ixp5yyjrfheyle.srv.us/opengraph-image.png",
    ],
  },
  metadataBase: new URL("https://madaralcon.com"),
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
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
      <BreadCrumb title="404 - الصفحة غير موجودة" />
      <ErrorArea />
      <SubscribeArea />
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
