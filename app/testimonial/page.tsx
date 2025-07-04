import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import TestimonialArea from "@/components/containers/TestimonialArea";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

export const metadata: Metadata = {
  title: "آراء العملاء | مدار ألكون - صيانة المكيفات والغسالات في جدة",
  description:
    "تعرف على تجارب وآراء عملاء مدار ألكون حول خدمات صيانة المكيفات والغسالات بجدة. رضا العملاء دليل على جودة خدماتنا وسرعتنا واحترافية فريقنا السعودي بقيادة محمد أحمد محبوب.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "آراء العملاء مدار ألكون",
    "تقييمات مدار ألكون",
    "آراء عملاء صيانة مكيفات",
    "آراء عملاء صيانة غسالات",
    "تجارب العملاء جدة",
    "مدار ألكون",
    "شركة صيانة جدة",
    "فني مكيفات جدة",
    "فني غسالات جدة",
    "خدمات منزلية جدة",

    // English keywords
    "Madar Alcon testimonials",
    "Madar Alcon reviews",
    "customer experiences Jeddah",
    "AC repair testimonials Jeddah",
    "washing machine repair testimonials Jeddah",
    "trusted Saudi technicians",
    "professional maintenance Jeddah",
    "fast home service Jeddah",
    "customer feedback Madar Alcon",
    "service reviews Jeddah",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "آراء العملاء | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "اطلع على آراء وتقييمات عملاء مدار ألكون حول خدمات صيانة المكيفات والغسالات بجدة. التزامنا بالجودة والسرعة ينعكس في رضا عملائنا.",
    url: "https://madaralcon.com/testimonial",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://qskz3k3ndax6ixp5yyjrfheyle.srv.us/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "آراء العملاء - مدار ألكون - صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آراء العملاء | مدار ألكون - صيانة المكيفات والغسالات في جدة",
    description:
      "تعرف على تجارب وآراء عملاء مدار ألكون حول خدمات صيانة المكيفات والغسالات بجدة. جودة واحترافية يشهد بها عملاؤنا.",
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
      <BreadCrumb title="آراء العملاء" />
      <TestimonialArea />
      <SubscribeArea />
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
