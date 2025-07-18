import { Toaster } from "react-hot-toast";
import "../styles/globals.scss";
import Footer from "@/view/splice-homepage/component/footer";
import Navbar from "@/view/splice-homepage/component/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="open_sans">
        <Navbar />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
