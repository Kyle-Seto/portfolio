import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Seto | Software Engineer",
  description: "Portfolio of Kyle Seto, a Full-Stack Developer and Statistics Graduate specializing in innovative data-driven solutions and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons8-handshake-color-96.png" sizes="any" />
        {/* If you're using a PNG, you can specify additional sizes */}
        {/* <link rel="icon" href="/icon.png" type="image/png" /> */}
        {/* For Apple devices */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
