import type { Metadata } from "next";
import { SiteShell } from "./components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victrix | Shaping the Future of African Progress",
  description:
    "A modern, premium website for Victrix, a think tank focused on family health, nutrition, and community transformation in Kicukiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth antialiased">
      <body className="min-h-full transition-colors duration-300">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
