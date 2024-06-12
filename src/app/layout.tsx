import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/src/mui/theme";
import { NavBar } from "./ui/NavBar";

export const metadata: Metadata = {
  title: "Movies App",
  description: "Challenge Movies App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <main>
              <Container>
                {children}
              </Container>
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
