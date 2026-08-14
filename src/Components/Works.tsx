import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
// Replace placeholder values (image, link, title, description) with your real content.
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
    {
        id: 1,
        title: "Terranova",
        description: "Terranova is a mobile-first online shopping app designed for the outdoor and hiking community. It offers a curated marketplace for all essential hiking gear — from moisture-wicking shirts, durable trail shoes, and technical outerwear to camping bags, trekking poles, and survival equipment. The app features intuitive category browsing, product filtering by terrain type, and a seamless checkout experience built to keep adventurers moving.",
        tags: ["Mobile App", "UI/UX", "E-Commerce", "Figma"],
        figmaEmbed: "https://embed.figma.com/design/dRuljizwr5tZXK2k0feG8l/UI-UX?node-id=0-1&embed-host=share",
    },
    {
        id: 2,
        title: "Coffee Shop POS",
        description: "A fully featured Point-of-Sale system designed specifically for coffee shops and café businesses. The system covers the complete operational workflow — from taking and managing customer orders, tracking inventory and supply levels, to viewing real-time sales analytics and revenue statistics. With an intuitive dashboard and clean UI, staff can process transactions quickly while managers get a birds-eye view of the entire business in one place.",
        tags: ["POS System", "Dashboard", "UI/UX", "Figma"],
        figmaEmbed: "https://embed.figma.com/design/T7nioN2a5NKXyJLPCbNRSS/COFFEE-SHOP-POS?node-id=0-1&embed-host=share",
    },
    {
        id: 3,
        title: "Audio Player",
        description: "A next-generation audio streaming platform that merges the best of YouTube Music and Spotify into one cohesive experience. Beyond just music playback, the app includes a built-in social chat system so users can discuss tracks with friends in real time, a powerful playlist maker with drag-and-drop organization, personalized recommendations, and a rich library browser. It's designed to make music discovery and listening a fully social and interactive experience.",
        tags: ["Music App", "Social", "UI/UX", "Figma"],
        figmaEmbed: "https://embed.figma.com/design/7J6PvAU4CUORi9Vkali9J7/Audio-Player?node-id=0-1&embed-host=share",
    },
];

const designs = [
    {
        id: 1,
        title: "SBITC Council Post",
        category: "Social Media",
        description: "Official Facebook post from the SBITC Council, shared as part of the organization's public communications and announcements.",
        image: "",
        embedCode: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSBITCOUNCILofficial%2Fposts%2Fpfbid0S2tmz8RZ7obX5RnriesDTgUSUrqSowHjvtEKqTUgC48zqBMLZ26cUK8iAuqS6WjHl&show_text=true&width=500" width="500" height="660" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    },
    {
        id: 2,
        title: "Facebook Photo Post",
        category: "Social Media",
        description: "A featured photo post shared on Facebook, highlighting key moments and updates from the organization's page.",
        image: "",
        embedCode: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1321388359994500%26set%3Da.485136123619732%26type%3D3&show_text=false&width=500" width="500" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    },
    {
        id: 3,
        title: "LCCBIT Post",
        category: "Social Media",
        description: "An official post from the LCCBIT Facebook page, sharing updates and announcements from the organization.",
        image: "",
        embedCode: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLCCBIT%2Fposts%2Fpfbid02U8YzxgJKtTZd4Wg1Qz9bvv2xb8WEhGY6rCKeFi5ezvsj8xb4CFER3matn5NArqZQl&show_text=false&width=500" width="500" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    },
];

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Design = (typeof designs)[0];
type Project = (typeof projects)[0];

// Helper to parse the src URL out of a raw iframe embed string
function extractIframeSrc(embedCode: string): string {
    const match = embedCode.match(/src="([^"]+)"/);
    return match ? match[1] : "";
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ title, description, tags, figmaEmbed, onClick }: (typeof projects)[0] & { onClick: (p: Project) => void }) {
    return (
        <div
            className="bg-white rounded-3xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            onClick={() => onClick({ id: 0, title, description, tags, figmaEmbed })}
        >
            {/* Figma Embed Preview — transparent overlay captures the click */}
            <div className="overflow-hidden w-full relative" style={{ height: "260px" }}>
                <iframe
                    style={{ border: "none", pointerEvents: "none" }}
                    width="100%"
                    height="100%"
                    src={figmaEmbed}
                    allowFullScreen
                    title={title}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 px-5 py-2.5 rounded-full backdrop-blur-sm">
                        View in Figma ↗
                    </span>
                </div>
            </div>

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
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-black/5 text-xs font-medium text-black/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── FIGMA MODAL ──────────────────────────────────────────────────────────────

function FigmaModal({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 md:p-8"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl overflow-hidden w-full max-w-6xl shadow-2xl flex flex-col"
                style={{ height: "90vh" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
                    <div>
                        <h3
                            className="text-xl font-bold text-black"
                            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-black/5 text-xs font-medium text-black/60"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 shrink-0 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center text-black/50 hover:text-black text-lg font-light"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Figma iframe — fills all remaining space */}
                <div style={{ flex: "1 1 0", minHeight: 0, overflow: "hidden" }}>
                    <iframe
                        style={{ border: "none", display: "block" }}
                        width="100%"
                        height="100%"
                        src={project.figmaEmbed}
                        allowFullScreen
                        title={project.title}
                    />
                </div>

                {/* Modal footer */}
                <div className="px-6 py-4 border-t border-black/5">
                    <p className="text-sm text-black/50 leading-relaxed">{project.description}</p>
                </div>
            </div>
        </div>
    );
}

// ─── DESIGN CARD ──────────────────────────────────────────────────────────────

function DesignCard({ design, onClick }: { design: Design; onClick: (d: Design) => void }) {
    const hasEmbed = !!design.embedCode;
    const embedSrc = hasEmbed ? extractIframeSrc(design.embedCode) : "";

    return (
        <div
            className="bg-white rounded-3xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col group hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            onClick={() => onClick(design)}
        >
            {/* Thumbnail — iframe or image */}
            <div className="overflow-hidden relative" style={{ height: "220px" }}>
                {hasEmbed ? (
                    <iframe
                        src={embedSrc}
                        width="100%"
                        height="100%"
                        style={{ border: "none", pointerEvents: "none", transform: "scale(1)", transformOrigin: "top left" }}
                        scrolling="no"
                        frameBorder="0"
                        title={design.title}
                    />
                ) : (
                    <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable={false}
                    />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">
                        {hasEmbed ? "View Post" : "View Full Image"}
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
    const hasEmbed = !!design.embedCode;
    const embedSrc = hasEmbed ? extractIframeSrc(design.embedCode) : "";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
                style={{ maxWidth: hasEmbed ? "540px" : "768px", width: "100%" }}
                onClick={(e) => e.stopPropagation()}
            >
                {hasEmbed ? (
                    <div className="flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
                            <div>
                                <h3
                                    className="text-xl font-bold text-black"
                                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                                >
                                    {design.title}
                                </h3>
                                <span className="text-xs font-medium text-black/40">{design.category}</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="ml-4 shrink-0 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center text-black/50 hover:text-black text-lg font-light"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>
                        {/* Facebook embed */}
                        <div className="flex justify-center p-4 bg-[#f0f2f5]" style={{ minHeight: "680px" }}>
                            <iframe
                                src={embedSrc}
                                width="500"
                                height="660"
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title={design.title}
                            />
                        </div>
                        {/* Description */}
                        <div className="px-6 py-4 border-t border-black/5">
                            <p className="text-sm text-black/60 leading-relaxed text-justify">
                                {design.description}
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function Works() {
    const [activeDesign, setActiveDesign] = useState<Design | null>(null);
    const [activeProject, setActiveProject] = useState<Project | null>(null);

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
                        <ProjectCard key={p.id} {...p} onClick={setActiveProject} />
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

            {/* Figma Modal */}
            {activeProject && (
                <FigmaModal project={activeProject} onClose={() => setActiveProject(null)} />
            )}

            {/* Design Lightbox */}
            {activeDesign && (
                <Lightbox design={activeDesign} onClose={() => setActiveDesign(null)} />
            )}
        </section>
    );
}
