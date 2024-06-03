import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
