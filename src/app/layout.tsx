import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-creative",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-creative-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-minimal",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-minimal-mono",
  subsets: ["latin"],
});

import { profileData } from "@/content"

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} — ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.seoDescription,
  keywords: profileData.metaKeywords,
  openGraph: {
    title: `${profileData.name} — ${profileData.role}`,
    description: profileData.seoDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — ${profileData.role}`,
    description: profileData.seoDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
