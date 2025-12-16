import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
          <div className="md:px-20 px-5 pt-10 mb-10">
              <TitleHeader
                  title="Projects"
              />
          </div>
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper rounded-3xl overflow-hidden">
              <img src="/images/project1.png" alt="Xcelarate Interface" />
            </div>
            <div className="text-content">
              <h2>
                Xcelarate - Real time Mobile & Web Survey Application
              </h2>
              <p className="text-white-50 md:text-xl">
                An Application build using React Native, Node.js, Express.js, MongoDB
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper !px-0 rounded-3xl overflow-hidden">
                <img
                  src="/images/project2.png"
                  alt="SEOtron Interface"
                />
              </div>
              <h2>SEOtron - AI Based SEO Analyzer</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper !px-0 rounded-3xl overflow-hidden">
                <img src="/images/project3.png" alt="Snipster Interface" />
              </div>
              <h2>Snipster - Developer Q&A Platform </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
