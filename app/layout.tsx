import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Armast Store",
  description: "Happiness is not in money, but in shopping. Enjoy!",
  keywords: ["store", "shopping", "armast"],
};

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "400", "700"],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
