import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G.L. Sarmiento Portfolio",
  description:
    "A passionate All-around, Multifaceted, Lifelong Learner dedicated to innovation, technology, and continuous growth. Explore my projects, skills, and achievements.",
  openGraph: {
    title: "G.L. Sarmiento Portfolio",
    description:
      "A passionate All-around, Multifaceted, Lifelong Learner dedicated to innovation, technology, and continuous growth.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "G.L. Sarmiento Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G.L. Sarmiento Portfolio",
    description:
      "A passionate All-around, Multifaceted, Lifelong Learner dedicated to innovation, technology, and continuous growth.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/logo512.png",
    apple: "/logo512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
