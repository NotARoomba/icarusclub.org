import type { Metadata } from "next";
import "./globals.css";
import "@hackclub/theme/fonts/reg-ital-bold.css";

export const metadata: Metadata = {
  title: "Icarus Club - Barranquilla, Colombia",
  description:
    "Icarus Club es un club tecnológico con sede en Barranquilla, Colombia, liderado por estudiantes que forman parte de Hack Club. Nuestro objetivo es que niñas, niños y jóvenes de todo Colombia participen y mostrar a Barranquilla como la capital tecnológica para las futuras generaciones.",
  openGraph: {
    title: "Icarus Club - Barranquilla, Colombia",
    description:
      "Un club tecnológico para jóvenes creadores y programadores en Barranquilla, Colombia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
