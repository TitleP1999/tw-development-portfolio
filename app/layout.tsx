import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"TW Development | Build • Solve • Improve",description:"Web, Backend, API and Android development."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body>{children}</body></html>}