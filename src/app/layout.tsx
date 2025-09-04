import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Bassett — Portfolio",
  description: "CS + Math @ UMD. Frontend-focused engineer.",
  openGraph: {
    title: "Kevin Bassett — Portfolio",
    description: "CS + Math @ UMD. Frontend-focused engineer.",
    url: "https://your-deploy-url.vercel.app",
    siteName: "Kevin Bassett",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
