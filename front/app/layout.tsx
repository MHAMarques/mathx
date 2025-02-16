import type { Metadata } from "next";
import { AppProvider } from "@/app/context";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Math Math X - Puzzle Game",
  description: "Um jogo de matemática básica com operações de adição, subtração e multiplicação de números inteiros positivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
