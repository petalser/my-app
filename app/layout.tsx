import Head from "next/head";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export const metadata = {
  title: "ZODIAKK",
  icons: {
    icon: "/icon.svg?",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        {children}
      </html>
    </StoreProvider >
  );
}
