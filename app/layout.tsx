/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemini Chat Pro - Your personal Gemini Pro Chat Bot",
  description:
    "Gemini Chat Pro is an open source Gemini Pro chat bot powered by Google Gemini AI models. You can use it to chat with texts and images for free.",
  alternates: {
    canonical: "https://gemini-chat.pro/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "Gemini Chat Pro",
    statusBarStyle: "default",
  },
  applicationName: "Gemini Chat Pro",
  robots: {
    index: process.env.IS_PUBLIC === "true",
    follow: process.env.IS_PUBLIC === "true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
