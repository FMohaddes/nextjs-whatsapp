import './globals.css'
import { Inter } from 'next/font/google'
import { AppContextProvider } from "../context/AppContextProvider";

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = "Next13 - PWA";
const APP_DESCRIPTION = "Next13 with PWA";

export const metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],

  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  
  openGraph: {
    type: "website",
    url: "https://whatsapp-test.netlify.app",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [{
      url: "https://whatsapp-test.netlify.app/next-pwa.png",
    }],
  },
  
  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/favicon.ico" },
  ],
}
export default function RootLayout({ children }) {
  return (
      
         <AppContextProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
         </AppContextProvider>
      
  )
}
