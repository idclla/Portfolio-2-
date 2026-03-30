import { useEffect, useState } from "react";

interface SplashScreenProps {
    onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fading out after 2 seconds
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

        // Notify parent to unmount the splash screen after the fade transition completes (0.5s later)
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ease-in-out ${
                fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{ zIndex: 9999 }}
        >
            <div className="flex flex-col items-center justify-center animate-[slideUp_1s_ease-out_forwards] opacity-0 translate-y-4">
                <h1
                    className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                    Dave Lacson
                </h1>
                
                {/* Subtle loading line */}
                <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full animate-[loading_2s_ease-in-out_forwards]"></div>
                </div>
            </div>

            <style>{`
                @keyframes loading {
                    0% { width: 0%; }
                    50% { width: 70%; }
                    100% { width: 100%; }
                }
                @keyframes slideUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
