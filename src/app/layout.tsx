import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "smolgardn",
  description: "smolgardn",
  icons: {
    icon: "/1.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
