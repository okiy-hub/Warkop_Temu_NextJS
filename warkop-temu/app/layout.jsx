import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Warkop Temu | Cerita Bertemu di Sini",
    template: "%s | Warkop Temu",
  },
  description: "Warkop Temu adalah website company profile warkop dengan menu kopi, makanan, dan cerita hangat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
