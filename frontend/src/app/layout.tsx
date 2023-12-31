import type { Metadata } from "next";
import "@/styles/globals.css";
import { lato } from "@/app/fonts";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Or Rodrigez",
  description: "Or Rodrigez's protfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div style={{ overflowX: "hidden" }}>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
