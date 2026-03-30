import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
// Replace placeholder values (image, link, title, description) with your real content.
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of what this project does and the technologies used.",
        tags: ["React", "TypeScript", "Node.js"],
        image: "https://picsum.photos/seed/proj1/600/400",
        github: "https://github.com/yourusername/project-one",
    },
    {
        id: 2,
        title: "Project Two",
        description: "A brief description of what this project does and the technologies used.",
        tags: ["Next.js", "Tailwind", "PostgreSQL"],
        image: "https://picsum.photos/seed/proj2/600/400",
        github: "https://github.com/yourusername/project-two",
    },
    {
        id: 3,
        title: "Project Three",
        description: "A brief description of what this project does and the technologies used.",
        tags: ["Vue", "Firebase", "REST API"],
        image: "https://picsum.photos/seed/proj3/600/400",
        github: "https://github.com/yourusername/project-three",
    },
];

const designs = [
    {
        id: 1,
        title: "Brand Identity",
        category: "Branding",
        description: "Logo design and brand guidelines crafted for a fictional tech startup, focusing on minimalism and strong visual identity.",
        image: "https://picsum.photos/seed/des1/800/600",
    },
    {
        id: 2,
        title: "UI / UX Design",
        category: "Interface",
        description: "Mobile app interface design with a focus on usability, clean typography, and smooth user flows.",
        image: "https://picsum.photos/seed/des2/800/600",
    },
    {
        id: 3,
        title: "Print Design",
        category: "Print",
        description: "Poster and flyer design for a fictional music event, using bold colors and dynamic layout.",
        image: "https://picsum.photos/seed/des3/800/600",
    },
];

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Design = (typeof designs)[0];

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ title, description, tags, image, github }: (typeof projects)[0]) {
    return (
        <div className="bg-white rounded-3xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

            {/* Clickable image → GitHub */}
            <a href={github} target="_blank" rel="noopener noreferrer" className="overflow-hidden h-48 block">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                />
            </a>

            <div className="p-6 flex flex-col flex-1">
                <h3
                    className="text-lg font-bold text-black mb-2"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                    {title}
                </h3>
                <p className="text-sm text-black/55 leading-relaxed mb-4 flex-1 text-justify">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-black/5 text-xs font-medium text-black/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:text-black/50 transition-colors duration-200"
                >
                    View Project →
                </a>
            </div>
        </div>
    );
}

// ─── DESIGN CARD ──────────────────────────────────────────────────────────────

function DesignCard({ design, onClick }: { design: Design; onClick: (d: Design) => void }) {
    return (
        <div
            className="bg-white rounded-3xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            onClick={() => onClick(design)}
        >
            {/* Thumbnail with overlay hint */}
            <div className="overflow-hidden h-48 relative">
                <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">
                        View Full Image
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3
                        className="text-lg font-bold text-black"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                        {design.title}
                    </h3>
                    <span className="text-xs font-medium text-black/40 bg-black/5 px-2.5 py-1 rounded-full ml-2 shrink-0">
                        {design.category}
                    </span>
                </div>
                <p className="text-sm text-black/55 leading-relaxed text-justify">
                    {design.description}
                </p>
            </div>
        </div>
    );
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────

function Lightbox({ design, onClose }: { design: Design; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={design.image}
                    alt={design.title}
                    className="w-full object-cover max-h-[60vh]"
                />
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3
                            className="text-xl font-bold text-black"
                            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                            {design.title}
                        </h3>
                        <span className="text-xs font-medium text-black/40 bg-black/5 px-2.5 py-1 rounded-full">
                            {design.category}
                        </span>
                    </div>
                    <p className="text-sm text-black/60 leading-relaxed text-justify">
                        {design.description}
                    </p>
                    <button
                        onClick={onClose}
                        className="mt-5 px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/75 transition-colors duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function Works() {
    const [activeDesign, setActiveDesign] = useState<Design | null>(null);

    return (
        <section
            id="work"
            className="mx-4 md:mx-24 pb-24"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Section Header */}
            <div className="mb-10">
                <span className="text-xs font-semibold tracking-widest text-black/40 uppercase">
                    Portfolio
                </span>
                <h2
                    className="text-3xl font-bold text-black mt-2"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                    My Works
                </h2>
            </div>

            {/* Projects */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold tracking-widest text-black/40 uppercase mb-5">
                    Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </div>
            </div>

            {/* Graphic Designs */}
            <div className="mt-12">
                <h3 className="text-sm font-semibold tracking-widest text-black/40 uppercase mb-5">
                    Graphic Designs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {designs.map((d) => (
                        <DesignCard key={d.id} design={d} onClick={setActiveDesign} />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {activeDesign && (
                <Lightbox design={activeDesign} onClose={() => setActiveDesign(null)} />
            )}
        </section>
    );
}
