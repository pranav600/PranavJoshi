import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/NavigationBar";
import SnowfallBackground from "@/components/ui/SnowfallBackground";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/providers/ThemeProvider";

// Geist Sans — primary UI font loaded from next/font/google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono — monospace font used for code snippets and tech labels
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav Joshi | Full Stack Developer",
  description:
    "Portfolio of Pranav Joshi, a Full Stack Developer building accessible, pixel-perfect, and performant web experiences.",
  icons: {
    icon: "https://lh3.googleusercontent.com/d/1RaEQ-VWHuaY7_RmByDdbKnLmZoDGZzQ3",
    shortcut: "https://lh3.googleusercontent.com/d/1RaEQ-VWHuaY7_RmByDdbKnLmZoDGZzQ3",
    apple: "https://lh3.googleusercontent.com/d/1RaEQ-VWHuaY7_RmByDdbKnLmZoDGZzQ3",
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/*
         * Inline theme script — runs before React hydration to prevent
         * flash-of-wrong-theme (FOWT) by reading localStorage and applying
         * the 'dark' class to <html> synchronously before first paint.
         */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <SnowfallBackground />
          <Analytics />
          <NavigationBar />
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
