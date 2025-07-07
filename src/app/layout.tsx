import "@/styles/globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata = {
  title: "Serra Arnold",
  description: "My Portfolio",
  icons: {
    icon: "/logo_default.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
