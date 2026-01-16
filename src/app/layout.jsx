import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "FoodieFinds | Discover the Best Flavors",
    template: "%s | FoodieFinds" // Allows sub-pages to auto-format like "Menu | FoodieFinds"
  },
  description: "Explore our curated menu of hand-crafted dishes. From spicy entrees to sweet desserts, we bring the finest ingredients to your table.",
  keywords: ["food delivery", "restaurant", "fresh food", "online ordering", "local cuisine", "dinner"],
  authors: [{ name: "FoodieFinds Team" }],
  
  // Open Graph (For Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    title: "FoodieFinds | Fresh Food Delivered Fast",
    description: "Craving something delicious? Order now from FoodieFinds and get exclusive deals.",
    url: 'https://foodiefinds.vercel.app', // Replace with your actual deployed link
    siteName: 'FoodieFinds',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Delicious Food Platter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "FoodieFinds | Best Local Food",
    description: "Order fresh, hand-crafted dishes now.",
    images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
