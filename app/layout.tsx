import type {Metadata} from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Just Auth",
  description: "Roll your own auth",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    {children}
    </body>
    </html>
  );
}
