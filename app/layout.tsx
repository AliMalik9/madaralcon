import type { Metadata } from "next";

// Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
// Font Awesome 6
import "@/public/icons/css/all.min.css";
// Modal video styles
import "yet-another-react-lightbox/styles.css";
// Main SCSS styles
import "@/public/scss/main.scss";

export const metadata: Metadata = {
  title: "Madar Alcon | مكيفات وغسالات - صيانة محترفة في جدة",
  description:
    "Madar Alcon تقدم خدمات صيانة مكيفات الهواء والغسالات بجودة عالية داخل مدينة جدة. زيارات منزلية سريعة، تشخيص دقيق، وأسعار مناسبة من قبل فريق سعودي موثوق بقيادة محمد أحمد محبوب.",
  keywords: [
    // Arabic Keywords
    "صيانة مكيفات جدة",
    "صيانة غسالات جدة",
    "شركة صيانة جدة",
    "فني مكيفات جدة",
    "فني غسالات جدة",
    "Madar Alcon",
    "صيانة منزلية",
    "غسالات",
    "مكيفات",
    "زيارات منزلية",
    "خدمة فورية",
    "تصليح مكيفات",
    "تصليح غسالات",

    // English Keywords
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
      name: "Muhammad Ahmad Mahboob",
      url: "https://madaralcon.com",
    },
  ],
  openGraph: {
    title: "Madar Alcon | مكيفات وغسالات - صيانة محترفة في جدة",
    description:
      "خدمة صيانة موثوقة لجميع أنواع المكيفات والغسالات في جدة. بقيادة محمد أحمد محبوب وفريق متخصص، نصل إليك بسرعة أينما كنت داخل المدينة.",
    url: "https://madaralcon.com",
    siteName: "Madar Alcon",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://madaralcon.com/images/og-image.jpg", // update with your real OG image path
        width: 1200,
        height: 630,
        alt: "Madar Alcon - صيانة المكيفات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madar Alcon | مكيفات وغسالات - صيانة محترفة في جدة",
    description:
      "صيانة مكيفات الهواء والغسالات في جدة بسرعة وكفاءة بواسطة فريق سعودي متخصص بقيادة محمد أحمد محبوب.",
    images: [
      "/opengraph-image.png", // update with your real image path
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
