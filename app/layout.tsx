import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "./components/nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskman",
  description: "Taskman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Nav />
            <main className="flex justify-center py-6">
              <div className="w-full max-w-[1024px]">{children}</div>
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
