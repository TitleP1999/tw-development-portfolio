"use client";

import { ArrowDown, ArrowRight, ArrowUpRight, Bug, Check, Code2, Database, Globe, Mail, Menu, Phone, Server, Smartphone, X } from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Globe, title: "Web development", description: "เว็บไซต์และ Web Application ที่ดูดี ใช้งานง่าย และรองรับทุกหน้าจอ", tags: "REACT / NEXT.JS", number: "01" },
  { icon: Server, title: "Backend & API", description: "วางระบบเบื้องหลังและเชื่อมต่อบริการต่าง ๆ ให้ทำงานร่วมกัน", tags: "PYTHON / FASTAPI", number: "02" },
  { icon: Smartphone, title: "Android application", description: "แอปพลิเคชัน Android ที่ออกแบบให้เข้ากับการทำงานของธุรกิจ", tags: "KOTLIN / JETPACK COMPOSE", number: "03" },
  { icon: Bug, title: "Fix & improve", description: "แก้ Bug ปรับปรุงระบบเดิม และต่อยอดไอเดียให้ไปได้ไกลกว่าเดิม", tags: "DEBUG / OPTIMIZE / DEPLOY", number: "04" },
];
const process = [
  ["01", "เริ่มจากการคุยกัน", "เล่าไอเดีย ปัญหา หรือสิ่งที่อยากพัฒนาให้เราฟัง"],
  ["02", "วางแผนให้ชัดเจน", "สรุปขอบเขตงาน แนวทาง ระยะเวลา และค่าใช้จ่าย"],
  ["03", "ลงมือสร้าง & ทดสอบ", "พัฒนา ตรวจสอบ และปรับรายละเอียดร่วมกัน"],
  ["04", "พร้อมใช้งานจริง", "นำระบบขึ้นใช้งาน พร้อมส่งมอบรายละเอียดที่จำเป็น"],
];
const projectUrl = "https://sp-steel-six.vercel.app/";

function ProjectVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`project-visual ${compact ? "compact" : ""}`}>
    <div className="preview-top"><span className="preview-brand">S<span>∕</span>P <small>SUPARERK STEEL</small></span><span>WEBSITE PROJECT <ArrowUpRight size={13}/></span></div>
    <div className="preview-content"><span className="preview-eyebrow">SUPARERK STEEL CO., LTD.</span><h3>ครบเครื่อง<br/><em>เรื่องเหล็ก</em></h3><p>เหล็กสำหรับงานก่อสร้างและอุตสาหกรรม</p><span className="preview-button">สำรวจสินค้า <ArrowRight size={13}/></span></div>
    <div className="preview-bottom"><span>SUPARERKWEB</span><span>DESIGN & DEVELOPMENT ↗</span></div>
  </div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  return <main id="top">
    <a className="skip-link" href="#content">ข้ามไปยังเนื้อหา</a>
    <header className="header"><nav className="container nav" aria-label="เมนูหลัก">
      <a className="logo" href="#top" aria-label="TW Development หน้าแรก"><span className="logo-symbol"><Code2 size={23}/></span>tw<span className="logo-light">development</span><i/></a>
      <div className="desktop-nav"><a href="#projects">ผลงานของเรา</a><a href="#services">บริการ</a><a href="#process">ขั้นตอนการทำงาน</a></div>
      <a className="nav-contact" href="#contact">คุยเรื่องโปรเจกต์ <ArrowUpRight size={17}/></a>
      <button className="menu-toggle" aria-label={menu ? "ปิดเมนู" : "เปิดเมนู"} aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </nav>{menu && <div id="mobile-menu" className="mobile-nav">{[["projects", "ผลงานของเรา"], ["services", "บริการ"], ["process", "ขั้นตอนการทำงาน"], ["contact", "ติดต่อเรา"]].map(([id, title]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{title}<ArrowUpRight size={16}/></a>)}</div>}</header>

    <section id="content" className="hero container">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> IDEAS INTO REAL-WORLD SOFTWARE</p>
        <h1>Good ideas.<br/>Great <span>digital<br className="desktop-break"/> experiences.</span><span className="hero-asterisk" aria-hidden="true">✳</span></h1>
        <p className="hero-description">เปลี่ยนไอเดียให้เป็นเว็บไซต์และซอฟต์แวร์ที่ใช้งานได้จริง<br className="desktop-break"/> เราช่วยออกแบบ พัฒนา และแก้ปัญหาให้ธุรกิจของคุณ</p>
        <div className="hero-actions"><a className="button button-dark" href="#projects">ดูผลงานของเรา <ArrowUpRight size={19}/></a><a className="text-link" href="#contact">เริ่มต้นโปรเจกต์ด้วยกัน <ArrowRight size={17}/></a></div>
        <div className="hero-note"><span className="note-line"/> WEB DEVELOPMENT <span>·</span> BACKEND & API <span>·</span> ANDROID</div>
      </div>
      <div className="hero-art"><div className="art-caption"><span>BUILT WITH PURPOSE.</span><span>01 / SELECTED WORK</span></div><a href={projectUrl} target="_blank" rel="noopener noreferrer" className="hero-preview" aria-label="เปิดเว็บไซต์ Suparerk Steel ในแท็บใหม่"><ProjectVisual compact/></a><div className="floating-label"><span><Check size={17}/></span><div>From concept to launch<small>ใส่ใจตั้งแต่ไอเดียจนถึงวันใช้งานจริง</small></div><ArrowUpRight size={21}/></div><div className="art-footer"><span>DESIGN. DEVELOP. DELIVER.</span><a href="#projects" aria-label="เลื่อนไปยังผลงาน"><ArrowDown size={20}/></a></div></div>
    </section>

    <div className="stack-strip"><div className="container stack-inner"><span className="stack-label">OUR TOOLKIT</span>{["Next.js", "React", "TypeScript", "Python", "Kotlin", "PostgreSQL", "Docker"].map(t => <span key={t}>{t}</span>)}</div></div>

    <section id="projects" className="section container"><div className="section-heading"><div><p className="eyebrow">01 — SELECTED WORK</p><h2>งานที่เราตั้งใจ<span className="accent">สร้าง.</span></h2></div><p>จากความต้องการของธุรกิจ<br/>สู่ประสบการณ์บนโลกดิจิทัล</p></div>
      <article className="featured-project"><a className="work-image" href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label="ดูผลงาน suparerkweb บนเว็บไซต์จริง"><ProjectVisual/><span className="open-project"><ArrowUpRight size={25}/></span></a><div className="work-details"><div className="project-meta"><span>FEATURED PROJECT</span><span className="live-badge"><span/> WEBSITE</span></div><h3>Suparerk Steel<span>suparerkweb</span></h3><p>เว็บไซต์บริษัทศุภฤกษ์ สตีล จัดแสดงสินค้าเหล็ก ข้อมูลบริษัท และสาขา ให้ลูกค้าค้นหาสินค้าและติดต่อขอใบเสนอราคาได้สะดวก</p><div className="tags"><span>Corporate website</span><span>Product catalog</span><span>Responsive design</span></div><div className="project-scope"><span>WHAT WE BUILT</span><p>เว็บไซต์ธุรกิจ · แคตตาล็อกสินค้า · ช่องทางติดต่อ</p></div><a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-link project-link">เยี่ยมชมเว็บไซต์จริง <ArrowUpRight size={19}/></a></div></article>
    </section>

    <section id="services" className="services-section"><div className="container section"><div className="section-heading"><div><p className="eyebrow">02 — WHAT WE DO</p><h2>เทคโนโลยีที่ใช่<br/>สำหรับ<span className="accent">งานของคุณ.</span></h2></div><p>สร้างใหม่ แก้ไข หรือต่อยอด<br/>เราเริ่มจากความต้องการของคุณเสมอ</p></div><div className="services-grid">{services.map(({ icon: Icon, title, description, tags, number }) => <article className="service-card" key={number}><div className="service-top"><Icon size={27} strokeWidth={1.5}/><span>{number}</span></div><h3>{title}</h3><p>{description}</p><span className="service-tags">{tags}</span></article>)}</div><div className="services-note"><Database size={17}/><span>พร้อมดูแล Database, Docker และการนำระบบขึ้นใช้งานจริง</span><ArrowUpRight size={18}/></div></div></section>

    <section id="process" className="section container"><div className="section-heading"><div><p className="eyebrow">03 — HOW WE WORK</p><h2>ทำงานด้วยกัน<span className="accent">ง่าย ๆ.</span></h2></div><p>คุยกันตรงไปตรงมา<br/>เห็นภาพเดียวกันในทุกขั้นตอน</p></div><div className="process-grid">{process.map(([n, title, description]) => <article key={n}><div className="process-number"><span>{n}</span><ArrowRight size={20}/></div><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section id="contact" className="contact-section"><div className="container contact-inner"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>มาเริ่มสร้าง<br/>สิ่งดี ๆ <span>ด้วยกัน.</span><ArrowUpRight className="contact-arrow" aria-hidden="true"/></h2><p>มีไอเดีย หรือมีปัญหาที่อยากให้เราช่วย?<br/>ส่งรายละเอียดมาคุยและประเมินขอบเขตงานกันก่อนได้ครับ</p></div><div className="contact-links"><a href="mailto:twdev.contact@gmail.com"><span><Mail size={20}/> EMAIL US</span><strong>twdev.contact@gmail.com</strong><ArrowUpRight size={22}/></a><a href="tel:0892019192"><span><Phone size={19}/> CALL US</span><strong>089 201 9192</strong><ArrowUpRight size={22}/></a><a href="tel:0616591993"><span><Phone size={19}/> CALL US</span><strong>061 659 1993</strong><ArrowUpRight size={22}/></a></div></div></section>
    <footer className="container footer"><a className="logo" href="#top">tw<span className="logo-light">development</span><i/></a><span>© 2026 TW Development. Made with intention.</span><a href="#top">กลับด้านบน <ArrowUpRight size={15}/></a></footer>
  </main>;
}
