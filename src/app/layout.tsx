import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo-round.png",
    apple: "/images/logo-round.png",
  },
  title: "AA Innovación Médica | Instrumentos Quirúrgicos · Medellín",
  description:
    "Fabricantes de instrumentos quirúrgicos de alta precisión para cirujanos plásticos y clínicas de cirugía. Diseñados y fabricados en Medellín, Colombia.",
  keywords: [
    "instrumentos quirúrgicos",
    "cánulas liposucción",
    "cirugía plástica",
    "fabricantes Medellín",
    "kit mamoplastia",
    "kit abdominoplastia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
