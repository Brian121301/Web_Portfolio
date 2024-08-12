import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brian Najera | Portfolio",
  description: "Brian Najera's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={`${inter.className} min-h-screen bg-cover bg-center`}
        style={{
          backgroundImage: `url('/minimal.jpg')`, // Use the relative path from the public directory
        }}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
