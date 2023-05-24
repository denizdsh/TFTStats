import { Metadata } from "next";

import "@styles/globals.css";
import "@styles/core/theme.css";
import styles from "@styles/mainLayout.module.css";
import config from "@src/config.mjs";
import Header from "@src/components/Header/Header";
import { roboto } from "@src/fonts";

export const metadata: Metadata = {
  title: config.APP_NAME,
  description: config.APP_DESCRIPTION,
  applicationName: config.APP_NAME,
  manifest: "/manifest.json",
  viewport: {
    height: "device-height",
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
  },
  icons: [
    { rel: "shortcut icon", url: "/images/icons/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/icons/favicon-16x16.png",
    },
    { rel: "mask-icon", url: "/images/icons/apple-touch-icon.png" },
    {
      rel: "apple-touch-icon",
      url: "/images/icons/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/images/icons/icon-512x512.png",
      sizes: "512x512",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/images/icons/icon-2048x2048.jpg",
      sizes: "2048x2048",
    },
  ],
  themeColor: "#0E1D2D",
  formatDetection: { telephone: false, email: false, url: true },
  openGraph: {
    type: "website",
    title: config.APP_NAME,
    description: config.APP_DESCRIPTION,
    siteName: config.APP_NAME,
    images: [`${config.APP_URL}/images/icons/icon-2048x2048.jpg`],
    url: config.APP_URL,
  },
  appleWebApp: {
    title: config.APP_NAME,
    capable: true,
    statusBarStyle: "default",
    startupImage: `${config.APP_URL}/images/icons/icon-2048x2048.jpg`,
  },
  twitter: {
    card: "summary",
    title: config.APP_NAME,
    description: config.APP_DESCRIPTION,
    images: [`${config.APP_URL}/images/icons/icon-2048x2048.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" /> */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" /> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0E1D2D" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body
        className={`on-background-text min-h-screen overflow-x-hidden bg-set-bg-color bg-set-bg bg-no-repeat ${styles.main}`}
      >
        <Header />
        <main className="background m-auto min-h-screen max-w-screen-2xl p-5">
          {children}
        </main>
      </body>
    </html>
  );
}

/*
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

<link rel="mask-icon" href="" color="#0E1D2D" />

<meta name="twitter:url" content="https://yourdomain.com" />
<meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
<meta name="twitter:creator" content="" />

<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />
*/
