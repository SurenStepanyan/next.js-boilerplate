import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Next.js boilerplate</title>
      <body>{children}</body>
    </html>
  );
}
