import ReactQueryProvider from "./providers/ReactQueryProvider";
import Header from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "admin panel",
  description: "admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-col container md:flex-row">
          <Sidebar />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
