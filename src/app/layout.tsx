import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { LoadoutDrawer, FloatingCartButton } from "@/components/ui/loadout-drawer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neo-Noir Commerce",
  description: "A high-end e-commerce experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        <CartProvider>
          {children}
          <LoadoutDrawer />
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}
