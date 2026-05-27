import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Premium Portfolio",
  description: "A dynamic, stunning personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Topbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
