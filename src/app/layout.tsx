import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {ApolloProvider} from "@apollo/client";
import createApolloClient from '../../apollo-client'

export const metadata: Metadata = {
  title: "Красоты Таганрога",
  description: "Мы теперь знаем, куда ты пойдешь гулять",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ApolloProvider client={createApolloClient()}>
          <ThemeProvider theme={theme}>
            <body>{children}</body>
          </ThemeProvider>
        </ApolloProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
