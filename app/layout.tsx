import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evan Taylor",
  description:
    "Computer Science student at Cal Poly, San Luis Obispo. Building software and exploring technology.",
  other: {
    "apple-mobile-web-app-title": "Evan Taylor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
