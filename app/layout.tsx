import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";

// استيراد ملفات CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/icons/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "@/public/scss/main.scss";

// Load Noto Sans Arabic from next/font/google
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],            
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madar Alcon | مدار ألكون - مكيفات وغسالات - صيانة محترفة في جدة",
  description:
    "مدار ألكون تقدم خدمات صيانة مكيفات الهواء والغسالات بجودة عالية داخل مدينة جدة. زيارات منزلية سريعة، تشخيص دقيق، وأسعار مناسبة من قبل فريق سعودي موثوق بقيادة محمد أحمد محبوب.",
  keywords: [
    // كلمات مفتاحية بالعربي
    "صيانة مكيفات جدة",
    "صيانة غسالات جدة",
    "شركة صيانة جدة",
    "فني مكيفات جدة",
    "فني غسالات جدة",
    "مدار ألكون",
    "صيانة منزلية",
    "غسالات",
    "مكيفات",
    "زيارات منزلية",
    "خدمة فورية",
    "تصليح مكيفات",
    "تصليح غسالات",

    // English keywords
    "AC repair Jeddah",
    "washing machine repair Jeddah",
    "home appliance maintenance Jeddah",
    "AC technician Jeddah",
    "washing machine technician Jeddah",
    "fast home service",
    "Saudi technician",
    "professional repair services",
    "home service Jeddah",
    "air conditioner repair Saudi Arabia",
  ],
  authors: [
    {
      name: "محمد أحمد محبوب",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "Madar Alcon | مدار ألكون - مكيفات وغسالات - صيانة محترفة في جدة",
    description:
      "خدمة صيانة موثوقة لجميع أنواع المكيفات والغسالات في جدة. بقيادة محمد أحمد محبوب وفريق متخصص، نصل إليك بسرعة أينما كنت داخل المدينة.",
    url: "https://madaralcon.com",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://madaralcon.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "مدار ألكون - صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madar Alcon | مدار ألكون - مكيفات وغسالات - صيانة محترفة في جدة",
    description:
      "صيانة مكيفات الهواء والغسالات في جدة بسرعة وكفاءة بواسطة فريق سعودي متخصص بقيادة محمد أحمد محبوب.",
    images: ["https://madaralcon.com/opengraph-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ...existing meta tags... */}
        <script type="application/ld+json" suppressHydrationWarning>
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Madar Alcon",
              "url": "https://madaralcon.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://madaralcon.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {`
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": ["الرئيسية", "الخدمات", "من نحن", "الأسئلة الشائعة", "اتصل بنا"],
              "url": [
                "https://madaralcon.com/",
                "https://madaralcon.com/services",
                "https://madaralcon.com/about",
                "https://madaralcon.com/faq",
                "https://madaralcon.com/contact"
              ]
            }
          `}
        </script>
      </head>
      <body className={notoSansArabic.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
