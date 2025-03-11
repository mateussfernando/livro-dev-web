import { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Press_Start_2P,
} from "next/font/google";
import "./reset.css";
import "./globals.css";
import NavBar from "@/components/layout/navBar";
import { MobileBottomNav } from "@/components/layout/mobile/MobileBottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Livro.dev - Recomendação de Livros para Desenvolvedores",
  description:
    "Encontre os melhores livros sobre Front-end, Back-end, Inteligência Artificial, Cybersegurança e muito mais para aprimorar suas habilidades em tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar></NavBar>
        {children}
        <MobileBottomNav></MobileBottomNav>
      </body>
    </html>
  );
}
