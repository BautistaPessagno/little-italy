import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Italy · Pastas y salsas proteicas congeladas",
  description:
    "Pastas y salsas proteicas congeladas, listas para tu freezer. Del congelador a la mesa en minutos: simple, rico y saludable.",
  keywords: [
    "pastas proteicas",
    "salsas proteicas",
    "comida congelada saludable",
    "Little Italy",
    "comida lista",
  ],
  openGraph: {
    title: "Little Italy · Pastas y salsas proteicas congeladas",
    description:
      "Comé rico, comé sano y en minutos. Pastas y salsas proteicas congeladas para tu día a día.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
