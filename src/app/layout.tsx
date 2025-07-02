import '@/styles/globals.css';
import { checkTheme } from '@/lib/check-theme'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zack Paton's Portfolio",
  description: "Zack Paton's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: checkTheme }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
