import resumePDF from "../assets/document/Resume.pdf";

export default function Resume() {
    return (
        <section
            id="resume"
            className="mx-24 pb-24"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Section Header */}
            <div className="mb-12">
                <span className="text-xs font-semibold tracking-widest text-black/40 uppercase">
                    My Journey
                </span>
                <h2
                    className="text-3xl font-bold text-black mt-2"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                    Resume
                </h2>
            </div>

            {/* Vertical Timeline container */}
            <div className="w-full max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-black/10 px-6 md:px-0">

                {/* --- ITEM 1: Education (2020) --- */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-white bg-black/40 ring-1 ring-black/10 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-[14px] md:mx-0" />

                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                            <h4 className="font-bold text-lg text-black">B.S. Information Technology</h4>
                            <span className="text-xs font-medium text-black/50 bg-black/5 px-2.5 py-1 rounded-full w-fit mt-2 md:mt-0">2020 - 2024</span>
                        </div>
                        <div className="text-sm font-medium text-black/60 mb-3 flex items-center gap-2">
                            <span className="text-sm">🎓</span> Education
                        </div>
                        <p className="text-sm text-black/55 leading-relaxed text-justify">
                            La Consolacion College - Bacolod. Focused deeply on web development, software engineering principles, and interactive UI/UX design.
                        </p>
                    </div>
                </div>

                {/* --- ITEM 2: Frontend Developer & Student (2023-2024) --- */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-white bg-black/60 ring-1 ring-black/10 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-[14px] md:mx-0" />

                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                            <h4 className="font-bold text-lg text-black">Frontend Developer / Student</h4>
                            <span className="text-xs font-medium text-black/50 bg-black/5 px-2.5 py-1 rounded-full w-fit mt-2 md:mt-0">2024 - 2025</span>
                        </div>
                        <div className="text-sm font-medium text-black/60 mb-3 flex items-center gap-2">
                            <span className="text-sm">💻</span> Work Experience
                        </div>
                        <p className="text-sm text-black/55 leading-relaxed text-justify">
                            Balanced studies with freelance frontend development. Delivered responsive web applications for various clients while focusing on React and modern CSS frameworks.
                        </p>
                    </div>
                </div>

                {/* --- ITEM 3: OJT (Present) --- */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Circle Indicator */}
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-white bg-black ring-1 ring-black/10 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-[14px] md:mx-0" />

                    {/* Content Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                            <h4 className="font-bold text-lg text-black">Web Developer Intern</h4>
                            <span className="text-xs font-medium text-black/50 bg-black/5 px-2.5 py-1 rounded-full w-fit mt-2 md:mt-0">2026 - Present</span>
                        </div>
                        <div className="text-sm font-medium text-black/60 mb-3 flex items-center gap-2">
                            <span className="text-sm">💼</span> On-the-Job Training (OJT)
                        </div>
                        <p className="text-sm text-black/55 leading-relaxed text-justify">
                            Currently assisting the senior development team in building internal dashboards and fixing UI bugs. Gaining hands-on experience with version control and agile workflows.
                        </p>
                    </div>
                </div>

            </div>

            {/* CTA Download Resume */}
            <div className="mt-16 w-full flex justify-center">
                {/* 
                   INSTRUCTIONS:
                   1. Place your Resume.pdf inside the "src/assets/document/" folder.
                   2. Import the file at the top of this component like this:
                      import resumePDF from "../assets/document/Resume.pdf";
                   3. Update the `href` below from "#" to `{resumePDF}`.
                 */}
                <a
                    href={resumePDF}
                    download="Resume.pdf"
                    className="px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-black/80 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                    Download CV
                </a>
            </div>

        </section>
    );
}
