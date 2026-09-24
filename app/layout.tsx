import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TW Development | Web & Software Development",
  description: "รับพัฒนาเว็บไซต์ แก้ไข Bug พัฒนา Backend, API และ Android Application",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
