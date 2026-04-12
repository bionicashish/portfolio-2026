type PixelButtonProps = {
  label?: string;
  size?: "default" | "lg";
};

export const PixelButton = ({
  label = "Visit",
  size = "default",
}: PixelButtonProps) => {
  const large = size === "lg";

  return (
    <div
      className={
        "inline-flex items-center bg-[#FF7F35] text-[#180B04] font-bold relative " +
        "font-['Pixelify_Sans',sans-serif] " +
        (large ? "px-6 h-[54px] text-[32px]" : "px-4 h-11.5 text-[22px]")
      }
    >
      <div className="pixelated-effect flex flex-col absolute right-full top-0">
        <div className={large ? "h-[9px] w-[9px] bg-transparent" : "h-1.5 w-1.5 bg-transparent"}></div>
        <div className={large ? "h-9 w-[9px] bg-[#FF7F35]" : "h-[34px] w-1.5 bg-[#FF7F35]"}></div>
        <div className={large ? "h-[9px] w-[9px] bg-transparent" : "h-1.5 w-1.5 bg-transparent"}></div>
      </div>
      {label}
      <div className="pixelated-effect flex flex-col absolute left-full top-0">
        <div className={large ? "h-[9px] w-[9px] bg-transparent" : "h-1.5 w-1.5 bg-transparent"}></div>
        <div className={large ? "h-9 w-[9px] bg-[#FF7F35]" : "h-[34px] w-1.5 bg-[#FF7F35]"}></div>
        <div className={large ? "h-[9px] w-[9px] bg-transparent" : "h-1.5 w-1.5 bg-transparent"}></div>
      </div>
    </div>
  );
};
