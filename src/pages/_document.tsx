import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="TFTStats" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TFTStats" />
        <meta name="description" content="Utility app for Riot Games' Teamfight Tactics" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" /> */}

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="mask-icon" href="/images/apple-touch-icon.png" color="#808281" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional" />

        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:url" content="https://yourdomain.com" /> */}
        <meta name="twitter:title" content="TFTStats" />
        <meta name="twitter:description" content="Utility app for Riot Games' Teamfight Tactics" />
        {/* <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" /> */}
        {/* <meta name="twitter:creator" content="" /> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TFTStats" />
        <meta property="og:description" content="Utility app for Riot Games' Teamfight Tactics" />
        <meta property="og:site_name" content="TFTStats" />
        {/* <meta property="og:url" content="https://yourdomain.com" /> */}
        {/* <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" /> */}

        <link rel='apple-touch-startup-image' href='/images/icon-2048x2048.jpg' sizes='2048x2048' />
        <link rel='apple-touch-startup-image' href='/images/icon-512x512.png' sizes='512x512' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
