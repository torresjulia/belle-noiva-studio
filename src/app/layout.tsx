import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Belle Noiva Studio | Penteados e Maquiagem para Noivas em São João da Boa Vista",
  description:
    "Especialistas em penteados e maquiagem para noivas, madrinhas e festas. Mais de 8 anos de experiência e 200 noivas atendidas. Agende sua consulta!",
  keywords:
    "penteado noiva, maquiagem noiva, salão de beleza noivas, são joão da boa vista, madrinha, casamento",
  authors: [{ name: "Belle Noiva Studio" }],
  openGraph: {
    title: "Belle Noiva Studio | Especialistas em Noivas",
    description: "O penteado perfeito para o dia mais especial da sua vida",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
