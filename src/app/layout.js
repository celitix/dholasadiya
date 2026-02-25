import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: "Dhola Sadiya Bridge | Dhola Bridge | Bridges In India | Longest Bridge",
  description: "Dhola sadiya bridge is the longest bridge amongst all the bridges in India, having the length of 9.5 kilo meters. The Dhola Bridge is all set to become...",
  alternates: {
    canonical: "https://dholasadiya.com/"
  },
  icons: {
    icon: [
      { url: '/dholsadiya-150x150.png', sizes: '32x32', type: 'image/png' },
      { url: '/dholsadiya-300x300.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/dholsadiya-300x300.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
