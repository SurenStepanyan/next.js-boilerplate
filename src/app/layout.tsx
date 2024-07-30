import './globals.css';
import CustomChakraProvider from '@/providers/chakra-ui/CustomChakraProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Next.js boilerplate</title>
      <body>
        <CustomChakraProvider>{children}</CustomChakraProvider>
      </body>
    </html>
  );
}
