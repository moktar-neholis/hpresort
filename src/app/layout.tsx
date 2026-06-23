import type { Metadata } from "next";
import "../../assets/css/plugins/bootstrap.min.css";
import "../../assets/css/plugins/cookit.min.css";
import "../../assets/css/plugins/gdpr-cookie.css";
import "../../assets/css/plugins/jaralux.min.css";
import "../../assets/css/plugins/jquery-ui.min.css";
import "../../assets/css/plugins/magnific-popup.css";
import "../../assets/css/plugins/meanmenu.css";
import "../../assets/css/plugins/nice-select.css";
import "../../assets/css/plugins.min.css";
import "../../assets/fonts/flaticon_bokinn.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import "../../assets/css/style.css";
import "react-datepicker/dist/react-datepicker.css";
import 'aos/dist/aos.css';
import Script from 'next/script';
import { LanguageProvider } from './context/LanguageContext';

export const metadata: Metadata = {
  title: "HOTEL HP RESORT",
  description: "Vivez le luxe et le confort à l’HOTEL HP RESORT",
  openGraph: {
    title: "HOTEL HP RESORT",
    description: "Vivez le luxe et le confort à l’HOTEL HP RESORT",
    images: ["/assets/images/logo/hp_logo.png"],
  },
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Script src="/assets/js/smoothscroll.js" strategy="afterInteractive"/>
      </body>
    </html>
  );
}
