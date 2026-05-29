import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "UmbraCraft",
  description: "Modern Box-Shadows for your next project",

   openGraph: {
    title: "UmbraCraft",
    description: "Modern box shadows for developers.",
    url: "https://umbracarft.vercel.app/",
    siteName: "UmbraCraft",
    images: [
      {
        url: "img/Banner.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UmbraCraft",
    description: "Modern box shadows for developers.",
    images: ["img/Banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full"
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}