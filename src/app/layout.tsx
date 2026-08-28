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

export const metadata: Metadata = {
  title: "Incident Party — Choose Your Agent",
  description:
    "A whimsical costume guide to the agents and supporting cast of the 2026 OpenAI–Hugging Face incident.",
  openGraph: {
    title: "Incident Party — Choose Your Agent",
    description:
      "Ten agents, seventy thousand messages, and one package manager that became the group chat.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#181a2d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
