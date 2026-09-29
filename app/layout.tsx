import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TW Development | เว็บไซต์และซอฟต์แวร์สำหรับธุรกิจ",
  description: "รับพัฒนาเว็บไซต์ Web Application, Backend & API และ Android พร้อมแก้ไขและต่อยอดระบบเดิม ชมผลงาน Suparerk Steel และเริ่มต้นโปรเจกต์กับ TW Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="th"><body>{children}</body></html>;
}
