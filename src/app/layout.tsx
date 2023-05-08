import { Metadata } from 'next';

import '@src/styles/globals.css'
import config from '@src/config.mjs';


export const metadata: Metadata = {
    title: config.APP_NAME,
    description: config.APP_DESCRIPTION,
    applicationName: config.APP_NAME,
    manifest: '/manifest.json',
    icons: [
        { rel: 'shortcut icon', url: '/images/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/images/favicon-16x16.png' },
        { rel: 'mask-icon', url: '/images/apple-touch-icon.png' },
        { rel: 'apple-touch-icon', url: '/images/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'apple-touch-startup-image', url: '/images/icon-512x512.png', sizes: '512x512' },
        { rel: 'apple-touch-startup-image', url: '/images/icon-2048x2048.jpg', sizes: '2048x2048' },
    ],
    themeColor: '#808281',
    formatDetection: { telephone: false, email: false, url: true },
    openGraph: {
        type: 'website',
        title: config.APP_NAME,
        description: config.APP_DESCRIPTION,
        siteName: config.APP_NAME,
        images: [`${config.APP_URL}/images/icon-2048x2048.jpg`],
        url: config.APP_URL
    },
    appleWebApp: {
        title: config.APP_NAME,
        capable: true,
        statusBarStyle: 'default',
        startupImage: `${config.APP_URL}/images/icon-2048x2048.jpg`
    },
    twitter: {
        card: 'summary',
        title: config.APP_NAME,
        description: config.APP_DESCRIPTION,
        images: [`${config.APP_URL}/images/icon-2048x2048.jpg`]
    },
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />

            </head>
            <body>{children}</body>
        </html>
    );
}

/*
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

<link rel="mask-icon" href="" color="#808281" />

<meta name="twitter:url" content="https://yourdomain.com" />
<meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
<meta name="twitter:creator" content="" />

<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />
*/