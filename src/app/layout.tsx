import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haunted Atlas",
  description:
    "Point your camera at a printed page and watch the places in it come alive on a map.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
