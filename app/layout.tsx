import '@mantine/core/styles.css';

import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import '@/sass/main.scss';
import Header from "./_components/Header/Header";
import { Footer } from './_components/Footer/Footer';

export const metadata: Metadata = {
  title: "Blog website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
