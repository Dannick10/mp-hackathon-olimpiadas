import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hackathon das Olimpíadas Paris 2024 - Projeto de Daniel Rocha",
  description: "Desenvolvido por Daniel Rocha, frontend, este projeto é uma aplicação para o hackathon das Olimpíadas Paris 2024, utilizando a API oficial para criar uma solução inovadora.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className} data-theme="mytheme">
        <Header />
        <div className="py-24">
          {children}</div>
      </body>
    </html>
  );
}
