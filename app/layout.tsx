import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "little italy — Pastas y salsas proteicas congeladas",
  description:
    "little italy: pastas y salsas proteicas congeladas, listas en minutos. Comida saludable, simple y de verdad casera.",
  openGraph: {
    title: "little italy — Pastas y salsas proteicas congeladas",
    description:
      "Pastas y salsas proteicas congeladas, listas en minutos. Simplicidad y comida saludable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
