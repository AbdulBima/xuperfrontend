import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Xaper",
  description: "Analytics Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-[100vw] overflow-hidden">{children}</body>
    </html>
  );
}
