"use client";
import {ArrowDown,ArrowRight,Bug,Code2,Database,ExternalLink,Layers3,Mail,Menu,Phone,Rocket,Server,Smartphone,Sparkles,X} from "lucide-react";
import {useEffect,useState} from "react";

const services=[
[Code2,"Web Development","เว็บไซต์และ Web Application ที่ responsive และพร้อมใช้งานจริง"],
[Bug,"Bug Fix & Improvement","แก้ปัญหาและต่อยอดระบบเดิม โดยไม่จำเป็นต้องเริ่มใหม่"],
[Server,"Backend & API","REST API, business logic และ integration กับระบบภายนอก"],
[Smartphone,"Android Application","Android ด้วย Kotlin และ Jetpack Compose"],
[Database,"Database","ออกแบบและจัดการ PostgreSQL / MySQL ให้เหมาะกับระบบ"],
[Rocket,"Deploy & Docker","Docker และ workflow สำหรับนำระบบขึ้นใช้งานจริง"]
] as const;
const tech=["REACT","NEXT.JS","TYPESCRIPT","PYTHON","FASTAPI","KOTLIN","POSTGRESQL","MYSQL","DOCKER","GIT"];
const projects=[
["01","MANAGEMENT DASHBOARD","Full-stack dashboard","ระบบตัวอย่างสำหรับจัดการข้อมูล ผู้ใช้งาน และรายงาน","Next.js • FastAPI • PostgreSQL"],
["02","REST API PLATFORM","Backend architecture","API structure สำหรับระบบที่ต้องการต่อยอดและเชื่อมต่อหลายบริการ","Python • FastAPI • Docker"],
["03","ANDROID WORKFLOW","Mobile operations","Application สำหรับ workflow ทางธุรกิจและการเชื่อมต่อ API","Kotlin • Jetpack Compose"]
];
export default function Home(){
 const [menu,setMenu]=useState(false); const [word,setWord]=useState(0);
 const words=["BUILD.","SOLVE.","IMPROVE."];
 useEffect(()=>{const x=setInterval(()=>setWord(v=>(v+1)%words.length),1800);return()=>clearInterval(x)},[]);
 return <main>
 <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#030712]/75 backdrop-blur-2xl">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
   <a href="#" className="flex items-center gap-3 text-lg font-black"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30"><Code2 size={21}/></span>TW<span className="-ml-2 text-blue-400">DEV</span></a>
   <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex"><a href="#services">Services</a><a href="#process">Process</a><a href="#projects">Projects</a><a href="#contact" className="rounded-xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 font-bold text-blue-300">Start a project ↗</a></div>
   <button className="md:hidden" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </div>
  {menu&&<div className="flex flex-col gap-5 border-t border-white/10 bg-[#030712] px-6 py-6 md:hidden">{["services","process","projects","contact"].map(x=><a key={x} href={"#"+x} onClick={()=>setMenu(false)}>{x}</a>)}</div>}
 </nav>

 <section className="noise grid relative flex min-h-screen items-center pt-20">
  <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]"/><div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]"/>
  <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
   <div className="reveal">
    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-[.18em] text-blue-300"><Sparkles size={14}/> DIGITAL PRODUCT DEVELOPMENT</div>
    <p className="text-sm font-bold tracking-[.3em] text-slate-500">WE DESIGN & DEVELOP SOFTWARE THAT WORKS.</p>
    <h1 className="mt-5 text-6xl font-black leading-[.95] tracking-[-.06em] sm:text-7xl lg:text-[96px]">WE <span key={word} className="inline-block text-blue-500 reveal">{words[word]}</span></h1>
    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">รับพัฒนาเว็บไซต์ แก้ Bug พัฒนา Backend & API และ Android Application — ตั้งแต่ปัญหาเล็ก ๆ ไปจนถึงระบบใหม่</p>
    <div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="group flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-black hover:bg-blue-500">START A PROJECT <ArrowRight className="transition group-hover:translate-x-1" size={19}/></a><a href="#projects" className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold hover:bg-white/10">VIEW WORK <ArrowDown size={18}/></a></div>
   </div>
   <div className="float glow rounded-[28px] border border-white/10 bg-white/[.045] p-4">
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07101e]">
     <div className="browserbar flex items-center gap-2 border-b border-white/10 px-5 py-4"><i className="bg-red-400"/><i className="bg-yellow-400"/><i className="bg-green-400"/><span className="ml-3 text-xs text-slate-600">twdev / build.ts</span></div>
     <pre className="overflow-auto p-7 text-sm leading-8 text-slate-300"><code><span className="text-purple-400">const</span>{` studio = {\n  services: [`}<span className="text-blue-400">"Web"</span>{`, `}<span className="text-blue-400">"API"</span>{`, `}<span className="text-blue-400">"Android"</span>{`],\n  mindset: `}<span className="text-emerald-400">"Solve problems"</span>{`,\n  quality: `}<span className="text-emerald-400">"Production ready"</span>{`\n};\n\n`}<span className="text-purple-400">export default</span>{` studio; `}<span className="blink text-blue-400">▋</span></code></pre>
    </div>
   </div>
   <a href="#services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-slate-600 lg:flex">SCROLL<ArrowDown size={15}/></a>
  </div>
 </section>

 <div className="overflow-hidden border-y border-white/10 bg-blue-600/5 py-5"><div className="marquee">{[...tech,...tech].map((t,i)=><span key={i} className="mx-7 whitespace-nowrap text-sm font-black tracking-[.18em] text-slate-400">{t}<b className="ml-14 text-blue-500">✦</b></span>)}</div></div>

 <section id="services" className="mx-auto max-w-7xl px-6 py-28">
  <div className="max-w-3xl"><p className="text-sm font-black tracking-[.25em] text-blue-400">01 / SERVICES</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">FROM IDEA TO<br/><span className="text-slate-600">PRODUCTION.</span></h2></div>
  <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon,title,text],i)=><div key={title} className="card rounded-2xl border border-white/10 bg-white/[.025] p-7 transition duration-300"><div className="mb-12 flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"><Icon/></div><span className="text-xs text-slate-600">0{i+1}</span></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></div>)}</div>
 </section>

 <section id="process" className="border-y border-white/10 bg-white/[.018]"><div className="mx-auto max-w-7xl px-6 py-28">
  <p className="text-sm font-black tracking-[.25em] text-blue-400">02 / PROCESS</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">CLEAR PROCESS.<br/><span className="text-slate-600">NO SURPRISES.</span></h2>
  <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">{[["01","DISCUSS","คุย Requirement"],["02","ESTIMATE","ประเมินขอบเขตและราคา"],["03","DEVELOP","เริ่มพัฒนา"],["04","TEST","ตรวจสอบและทดสอบ"],["05","DEPLOY","นำขึ้นใช้งานจริง"]].map(x=><div key={x[0]} className="bg-[#050a14] p-7"><span className="text-xs font-black text-blue-500">{x[0]}</span><h3 className="mt-10 font-black">{x[1]}</h3><p className="mt-2 text-sm text-slate-500">{x[2]}</p></div>)}</div>
 </div></section>

 <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
  <p className="text-sm font-black tracking-[.25em] text-blue-400">03 / SELECTED WORK</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">PROJECTS &<br/><span className="text-slate-600">EXPERIMENTS.</span></h2>
  <div className="mt-14 space-y-7">{projects.map((p,i)=><article key={p[0]} className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] transition hover:border-blue-500/30 lg:grid-cols-[1.15fr_.85fr]">
   <div className="grid min-h-[300px] place-items-center border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
    <div className="glow w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#07101e] transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
     <div className="browserbar flex gap-2 border-b border-white/10 px-4 py-3"><i className="bg-red-400"/><i className="bg-yellow-400"/><i className="bg-green-400"/></div>
     <div className="grid h-48 grid-cols-[.28fr_.72fr]"><div className="border-r border-white/10 p-4"><div className="h-3 w-16 rounded bg-blue-500/30"/><div className="mt-5 space-y-3">{[1,2,3,4].map(x=><div key={x} className="h-2 rounded bg-white/5"/>)}</div></div><div className="grid grid-cols-2 gap-3 p-5"><div className="rounded-lg bg-blue-500/10"/><div className="rounded-lg bg-white/5"/><div className="col-span-2 rounded-lg bg-white/5"/></div></div>
    </div>
   </div>
   <div className="flex flex-col justify-center p-8 lg:p-12"><span className="text-xs font-black tracking-[.2em] text-blue-400">{p[0]} / {p[1]}</span><h3 className="mt-5 text-3xl font-black">{p[2]}</h3><p className="mt-4 max-w-md leading-7 text-slate-400">{p[3]}</p><p className="mt-7 text-sm text-slate-600">{p[4]}</p><span className="mt-9 inline-flex items-center gap-2 font-bold text-slate-300">CASE STUDY COMING SOON <ExternalLink size={16}/></span></div>
  </article>)}</div>
 </section>

 <section id="contact" className="px-6 pb-20"><div className="glow relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-blue-400/20 bg-blue-600/10 p-8 sm:p-14">
  <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]"/>
  <div className="relative"><p className="text-sm font-black tracking-[.25em] text-blue-300">04 / CONTACT</p><h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">HAVE A PROBLEM?<br/><span className="text-blue-400">LET'S SOLVE IT.</span></h2><p className="mt-6 max-w-2xl leading-7 text-slate-300">ส่งรายละเอียดงาน Screenshot หรือ Error มาให้เราช่วยดูและประเมินขอบเขตก่อนได้ครับ</p>
  <div className="mt-10 flex flex-wrap gap-3"><a href="mailto:twdev.contact@gmail.com" className="flex items-center gap-2 rounded-xl bg-white px-5 py-4 font-black text-slate-950"><Mail size={18}/>twdev.contact@gmail.com</a><a href="tel:0892019192" className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-4 font-bold"><Phone size={18}/>089 201 9192</a><a href="tel:0616591993" className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-4 font-bold"><Phone size={18}/>061 659 1993</a></div></div>
 </div></section>
 <footer className="border-t border-white/10 px-6 py-9"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 text-xs text-slate-600"><span>© 2026 TW Development</span><span>BUILD • SOLVE • IMPROVE • TOGETHER</span></div></footer>
 </main>
}