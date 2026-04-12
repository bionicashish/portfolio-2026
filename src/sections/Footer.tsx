import { PixelButton } from "@/components/PixelButton";

export const Footer = () => {
  return (
    <footer className="relative z-10 flex h-[75vh] max-h-[675px] flex-col items-center overflow-hidden bg-[#e9e9e9] px-8 pt-12 pb-6 max-md:max-h-none max-md:px-4">
      <h2 className="footer-heading w-full text-center">get in touch</h2>
      <a
        href="mailto:hello@bionicashish.com"
        className="footer-phone group relative mt-[-70px] mb-[-22vh] flex h-[664px] w-[502px] flex-col overflow-hidden rounded-[30px] border-[8px] border-[#FF7F35] bg-white no-underline [transform:rotate(1.11deg)_scale(clamp(0.7,1vw+0.6,1))] origin-center transition-[transform,box-shadow,filter] duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:[transform:translateY(-10px)_rotate(-2deg)_scale(1.02)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] hover:brightness-[1.02] active:[transform:translateY(-2px)_rotate(0deg)_scale(0.97)] active:shadow-[0_8px_16px_rgba(0,0,0,0.08)] max-md:mt-[10%] max-md:mb-0 max-md:h-auto max-md:w-full max-md:max-w-[502px]"
      >
        <div className="flex justify-center pt-7">
          <div className="h-9 w-40 rounded-[999px] bg-black"></div>
        </div>
        <div className="flex flex-col items-center gap-3 px-8 pt-12 max-md:px-5">
          <div className="flex items-center gap-3 px-3">
            <div className="opacity-40">
              <div className="text-[28px] leading-none text-[#1b1b1b] max-md:text-base">
                To:
              </div>
            </div>
            <div className="opacity-80">
              <div className="text-[28px] leading-none text-[#1b1b1b] max-md:text-base">
                hello@bionicashish.com
              </div>
            </div>
          </div>
          <div className="h-[1.8px] w-full bg-black/10"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-[50px] [transform:rotate(-1.11deg)]">
          <PixelButton label="Email" size="lg" />
        </div>
      </a>
    </footer>
  );
};
