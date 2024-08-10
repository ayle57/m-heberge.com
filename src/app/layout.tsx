import type { Metadata } from "next";
import React from "react";
import '../styles/application.scss';

export const metadata: Metadata = {
  title: "M-Heberge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
