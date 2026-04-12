"use client";

import Image from "next/image";

type WorkCardProps = {
  href: string;
  image: string;
  alt: string;
  name: string;
  description: string;
  onHoverStart: (x: number, y: number) => void;
  onHoverEnd: () => void;
};

export const WorkCard = ({
  href,
  image,
  alt,
  name,
  description,
  onHoverStart,
  onHoverEnd,
}: WorkCardProps) => {
  const handleMouseEnter = (e: React.MouseEvent) => {
    onHoverStart(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    onHoverEnd();
  };

  return (
    <a target="_blank" href={href}>
      <div className="flex flex-col items-center">
        <div
          className="polaroid group w-full cursor-none transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:rotate-[-0.5deg] hover:scale-[1.01] active:-translate-y-0.5 active:rotate-0 active:scale-[0.99]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="image-container bg-white p-5 shadow-[0_0_0_3px_#e7e7e7,0_1px_2px_rgba(0,0,0,0.07)] transition-shadow duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-active:shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
            <Image
              src={image}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-t-[60px]"
            />
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col items-center">
          <h2 className="heading heading-h2 text-center">{name}</h2>
          <p className="mt-3 max-w-[320px] text-center text-[18px] text-[#1b1b1bcc]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};
