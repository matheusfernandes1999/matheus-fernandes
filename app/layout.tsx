import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

// Initialize Inter font
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand", // Define a CSS variable for Inter
});

export const metadata: Metadata = {
  title: "Matheus Fernandes",
  description: "Webdeisgner, Frontend Developer, and UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body className={`${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
