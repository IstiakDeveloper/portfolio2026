import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Istiak Hossain | Laravel & React Developer — Business Automation Systems",
  description: "I build custom business automation systems using Laravel and React — inventory, accounting, and operations software that replaces spreadsheets and paperwork for growing businesses.",
  keywords: [
    "Laravel developer",
    "React developer",
    "business automation",
    "custom software",
    "inventory management system",
    "accounting software",
    "Bangladesh developer",
    "remote developer"
  ],
  verification: {
    google: "mryqNFD8ES0-Z_fcysPW8hkaIwp5vtTZYWlycjDCyU8",
  },
  authors: [{ name: "Istiak Hossain" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var activeTheme = theme || systemTheme;
                  if (activeTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col theme-transition bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
