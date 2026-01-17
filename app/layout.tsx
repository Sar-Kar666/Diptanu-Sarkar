import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/DotPattern";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "http://media.licdn.com/dms/image/v2/D5603AQESt-giQjdFLw/profile-displayphoto-scale_400_400/B56ZnXTiFOI4Ag-/0/1760253847742?e=1770249600&v=beta&t=eti-5kzvfUhqkICyspFaEs0VPMUY0kG1yJ-O8pLbews",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <DotPattern className="absolute inset-0 -z-10 opacity-50 dark:opacity-30" />
            <main className="flex-1">{children}</main>
            <Navbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
