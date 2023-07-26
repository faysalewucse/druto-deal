import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AllProvider from "@/providers/AllProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Druto Deal",
  description: "Mens Wear Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AllProvider>
        <body className={inter.className}>
          <Navbar />
          <Container>{children}</Container>
          <Footer />
        </body>
      </AllProvider>
    </html>
  );
}
