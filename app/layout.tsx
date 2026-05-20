import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vale Glow Hair | Nutrición capilar 100% natural",
  description:
    "Tratamientos capilares 100% naturales para nutrir, reparar y resaltar la belleza de tu cabello. Especial para rizos y todo tipo de cabello. Envíos disponibles.",
  keywords: "tratamiento capilar natural, nutrición capilar, rizos, cabello sano, Vale Glow Hair",
  openGraph: {
    title: "Vale Glow Hair | Nutrición capilar 100% natural",
    description: "Haz brillar tu cabello desde la raíz con productos 100% naturales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
