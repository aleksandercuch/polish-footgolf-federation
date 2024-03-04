// CORE
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

// COMPONENTS
import { MainNavigation } from "@/components/layout/main-navigation/MainNavigation";

// CONTEXT
import { AuthContextProvider } from "@/context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <div id="modal-root"></div>
            <div>
              {/* <AuthButtons /> */}
              <MainNavigation />
              {children}
            </div>
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
