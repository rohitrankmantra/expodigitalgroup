import { Syne, Karla } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expo Digital Group | Exhibition Stand Builder",
  description:
    "Expo Digital Group delivers bespoke exhibition stands, modular systems, quick build booths, and turnkey event solutions across the Middle East.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${karla.variable} font-sans bg-white text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
