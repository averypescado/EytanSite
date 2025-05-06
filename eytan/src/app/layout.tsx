import type { Metadata } from "next";
import "./globals.css";
import { fira } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Eytan Boclin",
  description: "The personal website of Eytan Boclin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
