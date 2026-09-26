import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { PageTransitions } from "@/components/page-transitions";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabinet = localFont({
  variable: "--font-cabinet",
  display: "swap",
  src: [
    { path: "./fonts/CabinetGrotesk-Medium.woff2", weight: "500" },
    { path: "./fonts/CabinetGrotesk-Bold.woff2", weight: "700" },
    { path: "./fonts/CabinetGrotesk-Extrabold.woff2", weight: "800" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Madhav Pande",
  authors: [{ name: "Madhav Pande", url: SITE_URL }],
  creator: "Madhav Pande",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Madhav",
    lastName: "Pande",
    url: "/",
    siteName: "Madhav Pande",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cabinet.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply a saved theme before first paint so dark-mode visitors never see a light flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-[100dvh] font-sans">
        {children}
        <PageTransitions />
      </body>
    </html>
  );
}
