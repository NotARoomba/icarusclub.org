import type { Metadata } from "next";
import "./globals.css";
import "@hackclub/theme/fonts/reg-ital-bold.css";

export const metadata: Metadata = {
  title: "Icarus Club - Barranquilla, Colombia",
  description:
    "Icarus Club is a technology club based in Barranquilla, Colombia, led by students who are part of Hack Club. Our objective is to get children from all over Colombia to participate and to show Barranquilla as the capital of technology for children and young people of the future.",
  openGraph: {
    title: "Icarus Club - Barranquilla, Colombia",
    description:
      "A technology club for young makers and coders in Barranquilla, Colombia",
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
