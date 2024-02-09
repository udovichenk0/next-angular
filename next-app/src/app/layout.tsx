'use client'
import "./globals.css";
import { useEffect } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/**@ts-ignore */}
        <app-root style={{display: 'none'}}></app-root>
        {children}
      </body>
    </html>
  );
}
