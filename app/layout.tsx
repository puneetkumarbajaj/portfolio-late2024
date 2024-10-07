import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Puneet Bajaj - Full Stack Developer & Software Engineer",
  description: "Explore the portfolio of Puneet Bajaj, a software engineer specializing in full stack development, AI integration, and digital solutions.",
  keywords: ["Puneet Bajaj", "Software Engineer", "Full Stack Developer", "AI Integration", "Digital Solutions", "Portfolio", "Georgia State University", "Projects"],
  authors: [{name: "Puneet Bajaj"}],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh w-full max-w-screen px-6 md:px-10 py-10 relative font-mono`}
      >
        <div className="absolute inset-x-0 top-0 px-8 md:px-12 py-20 z-50">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
