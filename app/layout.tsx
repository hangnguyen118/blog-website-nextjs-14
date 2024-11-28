import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import '@/sass/main.scss';
import Header from "./_components/Header/Header";
import { Footer } from './_components/Footer/Footer';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import classes from './style.module.css';
import { ReduxProvider } from './_store/provider';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Blog Website</title>
      </head>
      <body className={classes.background}>
        <ReduxProvider>
          <MantineProvider>
            <Header />
            {children}
            <Footer />
            <Notifications />
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
