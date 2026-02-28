import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Shilpa Girish Hiremath | Senior DevOps Engineer Portfolio",
  description: "Senior DevOps Engineer with over 4 years of experience specializing in AWS Cloud and DevOps practices.",
  keywords: ["DevOps", "AWS", "CI/CD", "Terraform", "Jenkins", "Cloud Computing"],
  authors: [{ name: "Shilpa Girish Hiremath", url: "https://www.linkedin.com/in/shilpa-girish-hiremath-4b935919b/" }],
  metadataBase: new URL("https://shilpa-girish-digital.vercel.app"),
  openGraph: {
    title: "Shilpa Girish Hiremath | Senior DevOps Engineer Portfolio",
    description: "Senior DevOps Engineer with over 4 years of experience specializing in AWS Cloud and DevOps practices.",
  },
  twitter: {
    title: "Shilpa Girish Hiremath | Senior DevOps Engineer Portfolio",
    description: "Senior DevOps Engineer with over 4 years of experience specializing in AWS Cloud and DevOps practices.",
  },
  alternates: {
    canonical: "https://shilpa-girish-digital.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased selection:bg-[#00d4ff] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
