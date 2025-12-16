import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
// import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    useGSAP(() => {

        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                },
            });
        });

        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                onUpdate: (self) => {
                    gsap.to(".timeline", {
                        scaleY: 1 - self.progress,
                    });
                },
            },
        });

        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%",
                },
            });
        }, "<");
    }, []);

    return (
        <section
            id="experience"
            className="flex flex-col items-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Professional Work Experience"
                />
                <div className="mt-32 w-full">
                    <div className="space-y-20 relative"> {/* Increased space between cards */}
                        {expCards.map((card) => (
                            <div
                                key={card.title}
                                className="timeline-card w-full max-w-3xl mx-auto grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10"
                            >
                                {/* COLUMN 1: Logo & Line (Strictly confined to left column) */}
                                <div className="flex flex-col items-center h-full">
                                    {/* Logo Wrapper */}
                                    <div className="relative z-10 bg-black p-1 rounded-full border border-white/10">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                                            <img
                                                src={card.logoPath}
                                                alt="logo"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Vertical Line Wrapper */}
                                    <div className="timeline-wrapper flex-grow w-[2px] md:w-[3px] relative -mt-2">
                                        {/* Gradient Line (Background) */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6] to-[#a855f7] w-full h-full" />

                                        {/* Black Overlay (This animates scaleY to reveal line) */}
                                        <div className="timeline absolute inset-0 bg-black w-full h-full origin-bottom" />
                                    </div>
                                </div>

                                {/* COLUMN 2: Content (Strictly confined to right column) */}
                                <div className="expText pt-2 pb-10">
                                    <h1 className="font-semibold text-2xl md:text-3xl text-white">
                                        {card.title}
                                    </h1>

                                    <p className="text-lg md:text-xl font-medium text-[#839CB5] mt-1">
                                        Xcelarate - Live Project
                                    </p>

                                    <p className="my-4 text-white-50 text-sm md:text-base font-medium">
                                        🗓️&nbsp;{card.date}
                                    </p>

                                    <div>
                                        <p className="text-[#839CB5] italic mb-3">
                                            Responsibilities
                                        </p>
                                        <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50">
                                            {card.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="text-base leading-relaxed">
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;