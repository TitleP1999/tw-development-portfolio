"use client";

import {
  ArrowRight, Bug, Code2, Database, ExternalLink, Github,
  Layers3, Mail, Menu, Phone, Rocket, Server, Smartphone, X
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Code2, title: "Web Development", text: "พัฒนาเว็บไซต์และ Web Application ที่ใช้งานได้ดีทั้ง Desktop และ Mobile" },
  { icon: Bug, title: "Bug Fix & Improvement", text: "ตรวจสอบ แก้ไข Bug และพัฒนาต่อยอดระบบเดิมโดยไม่จำเป็นต้องเริ่มใหม่" },
  { icon: Server, title: "Backend & API", text: "พัฒนา Backend, REST API และเชื่อมต่อระบบภายนอกตามความต้องการ" },
  { icon: Smartphone, title: "Android Application", text: "พัฒนา Android Application ด้วย Kotlin และ Jetpack Compose" },
  { icon: Database, title: "Database", text: "ออกแบบและเชื่อมต่อ PostgreSQL, MySQL รวมถึงจัดการข้อมูลของระบบ" },
  { icon: Rocket, title: "Deploy & Docker", text: "ช่วยนำระบบขึ้นใช้งานจริง จัดการ Docker และ Deployment workflow" },
];

const stack = ["React", "Next.js", "TypeScript", "Python", "FastAPI", "Kotlin", "PostgreSQL", "MySQL", "Docker", "Git"];

const projects = [
  { tag: "FULL STACK", title: "Management Dashboard", text: "ตัวอย่างระบบ Dashboard สำหรับจัดการข้อมูล ผู้ใช้งาน และรายงาน", tech: "Next.js • FastAPI • PostgreSQL" },
  { tag: "BACKEND", title: "REST API System", text: "ตัวอย่าง Backend API ที่ออกแบบโครงสร้างสำหรับระบบจริงและรองรับการขยายต่อ", tech: "Python • FastAPI • Docker" },
  { tag: "ANDROID", title: "Android Application", text: "ตัวอย่าง Application สำหรับ workflow ทางธุรกิจและการเชื่อมต่อ API", tech: "Kotlin • Jetpack Compose" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const email = "twdev.contact@gmail.com";
  const phone1 = "0892019192";
  const phone2 = "0616591993";

  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050b16]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/25"><Code2 size={22}/></span>
            <span className="text-xl">TW <span className="text-blue-400">Development</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#stack">Tech Stack</a>
            <a className="hover:text-white" href="#projects">Portfolio</a>
            <a href="#contact" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">ติดต่อเรา</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <div className="border-t border-white/10 bg-[#050b16] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {["services","stack","projects","contact"].map(x => <a key={x} onClick={()=>setOpen(false)} href={`#${x}`} className="capitalize">{x}</a>)}
          </div>
        </div>}
      </nav>

      <section className="grid-bg relative flex min-h-screen items-center pt-20">
        <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400"/> WEB & SOFTWARE DEVELOPMENT
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Build. Solve.<br/><span className="text-blue-500">Improve.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              รับพัฒนาเว็บไซต์ แก้ไข Bug พัฒนา Backend & API และ Android Application
              ตั้งแต่งานเล็กไปจนถึงการพัฒนาระบบใหม่
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-500">ปรึกษางานกับเรา <ArrowRight size={19}/></a>
              <a href="#services" className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold hover:bg-white/10">ดูบริการของเรา</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-xs text-slate-400">
              {["Frontend","Backend","API","Android","Database","Deployment"].map(x => <span key={x} className="rounded-full border border-white/10 px-3 py-2">{x}</span>)}
            </div>
          </div>

          <div className="glow relative rounded-3xl border border-white/10 bg-white/[.045] p-5">
            <div className="rounded-2xl border border-white/10 bg-[#071120] p-6">
              <div className="mb-6 flex gap-2"><i className="h-3 w-3 rounded-full bg-red-400"/><i className="h-3 w-3 rounded-full bg-yellow-400"/><i className="h-3 w-3 rounded-full bg-green-400"/></div>
              <pre className="overflow-hidden text-sm leading-7 text-slate-300"><code>{`const team = {
  focus: "Quality Software",
  services: [
    "Web Development",
    "Bug Fix",
    "Backend & API",
    "Android App"
  ],
  mission: "Build • Solve • Improve"
};

export default team;`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-bold text-blue-400">OUR SERVICES</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">เราช่วยคุณพัฒนาระบบได้อย่างไร</h2>
        <p className="mt-5 max-w-2xl leading-7 text-slate-400">รับทั้งโปรเจกต์ใหม่ งานพัฒนาต่อ และงานแก้ปัญหาระบบเดิม สามารถส่งรายละเอียดมาให้ประเมินก่อนได้</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({icon: Icon,title,text}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[.035] p-7 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[.06]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"><Icon/></div>
              <h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="border-y border-white/10 bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div><p className="font-bold text-blue-400">TECH STACK</p><h2 className="mt-3 text-4xl font-black">Tools we work with.</h2><p className="mt-5 leading-7 text-slate-400">เลือกใช้เทคโนโลยีให้เหมาะกับงาน เพื่อให้ระบบดูแลต่อได้และพร้อมสำหรับการพัฒนาในอนาคต</p></div>
            <div className="flex flex-wrap gap-3">
              {stack.map(x => <span key={x} className="rounded-xl border border-white/10 bg-[#091425] px-5 py-4 font-bold text-slate-200">{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-bold text-blue-400">PORTFOLIO</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-4xl font-black md:text-5xl">Selected projects</h2>
          <span className="text-sm text-slate-500">Demo projects — replace with your real work later</span>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map(p => <article key={p.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.035]">
            <div className="grid-bg flex h-48 items-center justify-center border-b border-white/10">
              <Layers3 size={64} className="text-blue-500/70"/>
            </div>
            <div className="p-7">
              <span className="text-xs font-black tracking-widest text-blue-400">{p.tag}</span>
              <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{p.text}</p>
              <p className="mt-5 text-sm text-slate-500">{p.tech}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="glow mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/20 to-white/[.03] p-8 md:p-14">
          <p className="font-bold text-blue-300">LET'S WORK TOGETHER</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">มีโปรเจกต์หรือระบบที่กำลังมีปัญหา?</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">ส่งรายละเอียดงาน ปัญหาที่พบ หรือ Error มาให้เราช่วยประเมินขอบเขตและค่าใช้จ่ายก่อนได้ครับ</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${email}`} className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950"><Mail size={18}/>{email}</a>
            <a href={`tel:${phone1}`} className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold"><Phone size={18}/>{phone1}</a>
            <a href={`tel:${phone2}`} className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold"><Phone size={18}/>{phone2}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 TW Development. Build • Solve • Improve • Together.
      </footer>
    </main>
  );
}
