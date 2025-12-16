// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
//
// import TitleHeader from "../components/TitleHeader";
// import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
// import { techStackIcons } from "../constants";
// // import { techStackImgs } from "../constants";
//
// const TechStack = () => {
//   // Animate the tech cards in the skills section
//   useGSAP(() => {
//     // This animation is triggered when the user scrolls to the #skills wrapper
//     // The animation starts when the top of the wrapper is at the center of the screen
//     // The animation is staggered, meaning each card will animate in sequence
//     // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
//     gsap.fromTo(
//       ".tech-card",
//       {
//         // Initial values
//         y: 50, // Move the cards down by 50px
//         opacity: 0, // Set the opacity to 0
//       },
//       {
//         // Final values
//         y: 0, // Move the cards back to the top
//         opacity: 1, // Set the opacity to 1
//         duration: 1, // Duration of the animation
//         ease: "power2.inOut", // Ease of the animation
//         stagger: 0.2, // Stagger the animation by 0.2 seconds
//         scrollTrigger: {
//           trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
//           start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
//         },
//       }
//     );
//   });
//
//   return (
//     <div id="skills" className="flex-center section-padding">
//       <div className="w-full h-full md:px-10 px-5">
//         <TitleHeader
//           title="How I Can Contribute & My Key Skills"
//         />
//         <div className="tech-grid">
//           {/* Loop through the techStackIcons array and create a component for each item.
//               The key is set to the name of the tech stack icon, and the classnames are set to
//               card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg
//               classes are only applied on larger screens. */}
//           {techStackIcons.map((techStackIcon) => (
//             <div
//               key={techStackIcon.name}
//               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//             >
//               {/* The tech-card-animated-bg div is used to create a background animation when the
//                   component is hovered. */}
//               <div className="tech-card-animated-bg" />
//               <div className="tech-card-content">
//                 {/* The tech-icon-wrapper div contains the TechIconCardExperience component,
//                     which renders the 3D model of the tech stack icon. */}
//                 <div className="tech-icon-wrapper">
//                   <TechIconCardExperience model={techStackIcon} />
//                 </div>
//                 {/* The padding-x and w-full classes are used to add horizontal padding to the
//                     text and make it take up the full width of the component. */}
//                 <div className="padding-x w-full">
//                   {/* The p tag contains the name of the tech stack icon. */}
//                   <p>{techStackIcon.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//
//           {/* This is for the img part */}
//           {/* {techStackImgs.map((techStackIcon, index) => (
//             <div
//               key={index}
//               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//             >
//               <div className="tech-card-animated-bg" />
//               <div className="tech-card-content">
//                 <div className="tech-icon-wrapper">
//                   <img src={techStackIcon.imgPath} alt="" />
//                 </div>
//                 <div className="padding-x w-full">
//                   <p>{techStackIcon.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))} */}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default TechStack;


// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import TitleHeader from "../components/TitleHeader";
// import { skillCategories } from "../constants"; // Importing the new data
//
// gsap.registerPlugin(ScrollTrigger);
//
// const TechStack = () => {
//     useGSAP(() => {
//         // 1. Animate Categories sliding up
//         gsap.fromTo(
//             ".skill-category-title",
//             { y: 20, opacity: 0 },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 1,
//                 stagger: 0.2,
//                 scrollTrigger: {
//                     trigger: "#skills",
//                     start: "top 75%",
//                 },
//             }
//         );
//
//         // 2. Animate Skills popping in
//         gsap.fromTo(
//             ".skill-card",
//             { scale: 0.8, opacity: 0 },
//             {
//                 scale: 1,
//                 opacity: 1,
//                 duration: 0.6,
//                 stagger: 0.05,
//                 ease: "back.out(1.5)",
//                 scrollTrigger: {
//                     trigger: "#skills",
//                     start: "top 75%",
//                 },
//             }
//         );
//     }, []);
//
//     return (
//         <div id="skills" className="section-padding overflow-hidden">
//             <div className="w-full md:px-10 px-5">
//                 <TitleHeader title="How I Can Contribute & My Key Skills" />
//
//                 <div className="flex flex-col gap-10 mt-12">
//                     {skillCategories.map((category, index) => (
//                         <div key={index} className="w-full">
//                             {/* Category Title */}
//                             <h3 className="skill-category-title text-white/90 text-xl font-semibold mb-5 border-l-4 border-blue-500 pl-3">
//                                 {category.title}
//                             </h3>
//
//                             {/* Skills Grid */}
//                             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//                                 {category.skills.map((skill) => (
//                                     <div
//                                         key={skill.name}
//                                         className="skill-card group relative flex items-center gap-3 p-3 rounded-xl
//                                bg-neutral-900/50 border border-white/10 hover:border-white/30
//                                hover:bg-neutral-800 transition-all duration-300 cursor-default"
//                                     >
//                                         {/* Icon - Uses the color defined in constants */}
//                                         <div className="text-2xl shrink-0" style={{ color: skill.color }}>
//                                             <skill.icon />
//                                         </div>
//
//                                         {/* Name */}
//                                         <span className="text-white/70 font-medium text-sm group-hover:text-white transition-colors">
//                       {skill.name}
//                     </span>
//
//                                         {/* Subtle Glow Effect on Hover */}
//                                         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                     opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TechStack;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { skillCategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    // 1. Flatten the categories into one single array of skills
    const allSkills = skillCategories.flatMap((category) => category.skills);

    useGSAP(() => {
        // Animate all skills popping in together
        gsap.fromTo(
            ".skill-item",
            {
                y: 50,
                opacity: 0,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.05, // Fast ripple effect
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 80%", // Starts when slightly visible
                },
            }
        );
    }, []);

    return (
        <div id="skills" className="section-padding overflow-hidden">
            <div className="w-full md:px-10 px-5">
                <TitleHeader title="Skills" />

                <div className="mt-14 w-full flex flex-wrap justify-center gap-5">
                    {allSkills.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="skill-item group relative flex flex-col items-center justify-center
                                       w-28 h-28 sm:w-32 sm:h-32 rounded-2xl
                                       bg-white/5 border border-white/10
                                       hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            {/* Hover Glow Background (Uses the specific skill color) */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                                style={{ backgroundColor: skill.color }}
                            />

                            {/* Icon */}
                            <div
                                className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                                style={{ color: skill.color }} // Always colored, or remove style for white-by-default
                            >
                                <skill.icon />
                            </div>

                            {/* Name (Small and clean) */}
                            <span className="text-white/60 text-xs font-medium tracking-wide group-hover:text-white transition-colors">
                                {skill.name}
                            </span>

                            {/* Bottom colored bar on hover */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                style={{ backgroundColor: skill.color }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;