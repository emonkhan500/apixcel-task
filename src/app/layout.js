import { Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";

// Lexend font
const lexend = Lexend({
  variable: "--font-lexend", 
  subsets: ["latin"],
});

// Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apixcel ",
  description: "Landing page built with Next.js, Tailwind, and DaisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${geistMono.variable} bg-[#191919] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
