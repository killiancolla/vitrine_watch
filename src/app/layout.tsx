import type { Metadata } from "next";
import { Bebas_Neue, Poppins, Raleway } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"], variable: "--font-bebas" });
const raleway = Raleway({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}