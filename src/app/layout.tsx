import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";

const nohemi = localFont({
  src: [
    {
      path: './fonts/Nohemi-Thin.woff2',
      weight: "100",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-ExtraLight.woff2',
      weight: "200",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-Light.woff2',
      weight: "300",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-Regular.woff2',
      weight: "400",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-Medium.woff2',
      weight: "500",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-Semibold.woff2',
      weight: "600",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-Bold.woff2',
      weight: "700",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-ExtraBold.woff2',
      weight: "800",
      style: "normal",
    },
    {
      path: './fonts/Nohemi-Black.woff2',
      weight: "900",
      style: "normal",
    },
  ]
})

export const metadata: Metadata = {
  title: {
    default: "Altermate",
    template: `Altermate | %s`
  },
  description: "Altermate stands for project bases learning, collaborating with community, learning, building projects, mentorship, students, mentors, innovation, ideas",
  icons: {
    icon: {
      url: "@/public/logo-icon.svg",
      pathname: "@/public/logo-icon.svg",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(nohemi.className, "antialiased")}
      >
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
