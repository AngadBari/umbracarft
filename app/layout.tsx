import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "UmbraCraft",
  description: "Beautiful UI Components for Developers and Designers",

  openGraph: {
    title: "UmbraCraft",
    description: "Beautiful UI Components for Developers and Designers",
    url: "https://your-domain.com",
    siteName: "UmbraCraft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UmbraCraft",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UmbraCraft",
    description: "Beautiful UI Components for Developers and Designers",
    images: ["/og-image.png"],
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