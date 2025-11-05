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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional&icon_names=arrow_top_left"
        />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
