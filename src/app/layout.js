import { yekan } from "@/core/utils/fonts";
import ReactToastify from "@/core/configs/ReactToastify";
import Header from "@/components/templates/layouts/Header";
import Footer from "@/components/templates/layouts/Footer";
import TanstackProvider from "@/components/partials/providers/TanstackProvider";

import "@/app/globals.css";

export const metadata = {
  title: "دیجی تور",
  description: "سایت خرید آنلاین تورهای گردشگری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekan.className}`}>
        <TanstackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ReactToastify />
        </TanstackProvider>
      </body>
    </html>
  );
}
