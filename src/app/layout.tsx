import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";
import SpotifyWidget from "@/components/spotify-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koln Laviste — Full Stack Developer",
  description:
    "I'm Koln, a full-stack developer from Cebu City, Philippines. I build modern web and mobile applications with a focus on clean code and great user experience.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Frontend",
    "Backend",
    "React",
    "Next.js",
    "TypeScript",
    "Philippines",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-stone-50 dark:bg-[#0a0a0a] text-stone-900 dark:text-[#f0f0f0] antialiased transition-colors">
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <SpotifyWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
