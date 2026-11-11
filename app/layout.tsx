import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const redHatDisplay = localFont({
  src: "./fonts/red-hat-display.woff2",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imanco.net"),
  icons: { icon: "/images/imanco-logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  );
}
