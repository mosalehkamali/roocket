import ScrollToTop from "@/components/modules/scrollButton/ScrollToTop";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body suppressHydrationWarning={true}>
        {children}
        <ScrollToTop />
        </body>
    </html>
  );
}
