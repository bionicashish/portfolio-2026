"use client";

import { WorkCard } from "@/components/WorkCard";
import { PixelButton } from "@/components/PixelButton";
import workImgOM from "@/assets/work-img-OM.webp";
import workImgGF from "@/assets/work-img-GF.webp";
import workImgSPC from "@/assets/work-img-SPC.webp";
import workImgFibr from "@/assets/work-img-fibr.webp";
import { useEffect, useRef, useState } from "react";

export const Work = () => {
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        buttonRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    document.addEventListener("mousemove", handlePointerMove);

    return () => {
      document.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  const handleHoverStart = (x: number, y: number) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    setHovered(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
  };

  return (
    <section className="work-section relative z-49">
      <div
        ref={buttonRef}
        className={`fixed left-0 top-0 pointer-events-none z-50 will-change-transform ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 0.2s ease" }}
      >
        <PixelButton />
      </div>
      <div className="wrapper">
        <div className="flex gap-[160px] flex-col pt-[60px] pb-[220px]">
          <WorkCard
            image={workImgOM.src}
            alt="Off-menu"
            name="Off-menu"
            description="Opinionated brand & design studio by Elan Miller"
            href="https://off-menu.com"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
          <WorkCard
            image={workImgGF.src}
            alt="Goodfit"
            name="Goodfit"
            description="AI-Native assessment software"
            href="https://goodfit.com"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
          <WorkCard
            image={workImgSPC.src}
            alt="Sewardpark Campus"
            name="Sewardpark Campus"
            description="Housing cooperative in New York"
            href="https://sewardparkcampus.com"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
          <WorkCard
            image={workImgFibr.src}
            alt="Fibr AI"
            name="Fibr AI"
            description="AI assisted marketing campaigns"
            href="https://fibr.ai"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
        </div>
      </div>
    </section>
  );
};
