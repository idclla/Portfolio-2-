import { useState, useEffect } from "react";
import myPhoto from "../assets/images/me (2).jpg";
import Works from "./Works";
import Resume from "./Resume";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Resume", href: "#resume" },
];

// ─── IMAGES ──────────────────────────────────────────────────────────────────
// Replace the `src` values below with your own image paths or imports.
// e.g.  import myPhoto from "../assets/photo.jpg"  then use  src: myPhoto
const IMAGES = {
    row1: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", w: 180 },
    ],
    row2: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", w: 180 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", w: 180 },
    ],
};
// ─────────────────────────────────────────────────────────────────────────────

// Duplicate for seamless loop
const makeLoop = (arr: { src: string; w: number }[]) => [...arr, ...arr];


export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const ROW_H = 100;
    const GAP = 12;

    const renderRow = (
        items: { src: string; w: number }[],
        dir: "left" | "right",
        duration: number
    ) => {
        const looped = makeLoop(items);
        const totalW = items.reduce((s: number, i: { w: number }) => s + i.w + GAP, 0);

        return (
            <div className="overflow-hidden w-full">
                <div
                    className="flex"
                    style={{
                        gap: `${GAP}px`,
                        width: "max-content",
                        animation: `${dir === "left" ? "scrollLeft" : "scrollRight"} ${duration}s linear infinite`,
                        "--scroll-width": `${totalW / 2}px`,
                    } as React.CSSProperties}
                >
                    {looped.map((item, idx) => (
                        <div
                            key={idx}
                            className="shrink-0 rounded-2xl overflow-hidden"
                            style={{ width: item.w, height: ROW_H }}
                        >
                            <div
                                className="w-full h-full flex items-center justify-center p-5 bg-white rounded-3xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <img
                                    src={item.src}
                                    alt="tech-icon"
                                    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div id="home" className="min-h-screen bg-[#f5f5f5]">

            {/* Floating Navbar */}
            <nav className="fixed top-5 left-0 right-0 z-50 px-0 md:px-6 mx-4 md:mx-24">
                <div
                    className={`flex items-center justify-between gap-1 w-full px-3 md:px-4 py-2 md:py-2.5 rounded-full transition-all duration-300 ${scrolled
                        ? "bg-white/70 backdrop-blur-lg shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-white/20"
                        : "bg-white/40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/40"
                        }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    <a
                        href="#home"
                        className="px-2 text-sm font-semibold tracking-tight text-black hover:text-black/70 transition-colors duration-200"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                        Dave Lacson
                    </a>
                    <div className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide text-black/60 hover:text-black hover:bg-black/5 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Bento Infinite Scroll */}
            <div className="relative pt-28 pb-12">
                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-40 z-10"
                    style={{ background: "linear-gradient(to right, #f5f5f5 0%, transparent 100%)" }} />
                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-40 z-10"
                    style={{ background: "linear-gradient(to left, #f5f5f5 0%, transparent 100%)" }} />

                <section
                    className="flex flex-col"
                    style={{ gap: `${GAP}px` }}
                >
                    {renderRow(IMAGES.row1, "left", 28)}
                    {renderRow(IMAGES.row2, "right", 34)}
                </section>
            </div>

            {/* Hero Section */}
            <section
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="mx-4 md:mx-24 pb-20"
            >
                <div className="flex flex-col md:flex-row gap-6 items-stretch">

                    {/* Introduction Box */}
                    <div className="flex-1 bg-white rounded-3xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-10 flex flex-col justify-center">
                        <span className="text-xs font-semibold tracking-widest text-black/40 uppercase mb-4">
                            About Me
                        </span>
                        <h1
                            className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-5 leading-tight"
                            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                            Hi, I'm&nbsp;Dave&nbsp;Lacson
                        </h1>
                        <p className="text-base text-black/60 leading-relaxed mb-8 text-justify">
                            I'm a passionate developer and designer crafting clean,
                            purposeful digital experiences. I love turning ideas into
                            elegant products — from pixel-perfect interfaces to
                            robust back-end systems.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#work"
                                className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-all duration-200"
                            >
                                View My Work
                            </a>
                            <a
                                href="#resume"
                                className="px-6 py-3 rounded-full border border-black/10 text-sm font-medium text-black/70 hover:bg-black/5 transition-all duration-200"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Profile Image Box */}
                    <div className="w-full md:w-96 bg-white rounded-3xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden shrink-0">
                        <img
                            src={myPhoto}
                            alt="Profile placeholder"
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>

                </div>
            </section>

            {/* My Works Section */}
            <Works />

            {/* Resume Section */}
            <Resume />

            <style>{`
                @keyframes scrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(calc(-1 * var(--scroll-width))); }
                }
                @keyframes scrollRight {
                    0%   { transform: translateX(calc(-1 * var(--scroll-width))); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}
