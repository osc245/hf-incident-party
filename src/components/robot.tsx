type RobotProps = {
  color: string;
  accent: string;
  label: string;
  size?: "small" | "large";
  mood?: "calm" | "busy";
};

const robotClass =
  "relative h-[178px] w-[126px] [filter:drop-shadow(0_13px_12px_rgba(0,0,0,.14))] after:absolute after:top-[55px] after:right-[2px] after:z-[2] after:h-[31px] after:w-[17px] after:rounded-[2px_8px_8px_2px] after:border-[3px] after:border-[#151720] after:bg-[var(--robot)] after:content-['']";

export function Robot({
  color,
  accent,
  label,
  size = "large",
  mood = "calm",
}: RobotProps) {
  return (
    <div
      className={`${robotClass} ${
        size === "small"
          ? "mb-[-103px] origin-top scale-[.42] !filter-none max-[760px]:mb-[-124px] max-[760px]:scale-[.3]"
          : ""
      } ${
        mood === "busy"
          ? "animate-robot-hover motion-reduce:animate-none"
          : ""
      }`}
      style={{ "--robot": color, "--robot-accent": accent } as React.CSSProperties}
      aria-label={`${label} robot`}
      role="img"
    >
      <span className="absolute top-[7px] left-[60px] z-[1] block h-[31px] w-[3px] bg-[#151720]">
        <span className="absolute top-[-2px] left-[-5px] h-[13px] w-[13px] rounded-full border-[3px] border-[#151720] bg-[var(--robot-accent)]" />
      </span>
      <span className="absolute top-[55px] left-[2px] z-[2] h-[31px] w-[17px] rounded-[8px_2px_2px_8px] border-[3px] border-[#151720] bg-[var(--robot)]" />
      <span className="absolute top-[34px] left-4 z-[3] block h-[72px] w-[94px] rounded-[23px_23px_18px_18px] border-[3px] border-[#151720] bg-[var(--robot)]">
        <span className="absolute inset-[14px_12px_13px] block overflow-hidden rounded-[14px] border-2 border-[#151720] bg-[#dfe7dc] after:absolute after:top-[-6px] after:left-[-11px] after:h-[55px] after:w-10 after:rotate-20 after:bg-white/35 after:content-['']">
          <i className="absolute top-[14px] left-[15px] z-[2] h-3 w-[10px] animate-blink rounded-full border-2 border-[#151720] bg-white motion-reduce:animate-none" />
          <i className="absolute top-[14px] right-[15px] z-[2] h-3 w-[10px] animate-blink rounded-full border-2 border-[#151720] bg-white motion-reduce:animate-none" />
          <i className="absolute bottom-[9px] left-1/2 h-1.5 w-[19px] -translate-x-1/2 rounded-full border-b-2 border-[#151720]" />
        </span>
      </span>
      <span className="absolute top-[102px] left-[50px] z-[1] h-[17px] w-[26px] border-[3px] border-[#151720] bg-[var(--robot)]" />
      <span className="absolute top-[113px] left-[27px] z-[2] block h-[50px] w-[72px] rounded-[9px_9px_18px_18px] border-[3px] border-[#151720] bg-[var(--robot)]">
        <span className="absolute top-3 left-3 font-mono text-[10px] font-extrabold text-white">
          {label}
        </span>
        <span className="absolute top-3 right-3 h-2 w-2 animate-pulse-light rounded-full border-2 border-[#151720] bg-[var(--robot-accent)] motion-reduce:animate-none" />
      </span>
      <span className="absolute top-[122px] left-[14px] z-[1] h-[41px] w-[19px] origin-top rotate-[18deg] rounded-lg border-[3px] border-[#151720] bg-[var(--robot)]" />
      <span
        className={`absolute top-[122px] right-[14px] z-[1] h-[41px] w-[19px] origin-top -rotate-[18deg] rounded-lg border-[3px] border-[#151720] bg-[var(--robot)] ${
          mood === "busy"
            ? "animate-wave motion-reduce:animate-none"
            : ""
        }`}
      />
      <span className="absolute bottom-0 left-1/2 h-[15px] w-[95px] -translate-x-1/2 rounded-full bg-black/16 blur-[5px]" />
    </div>
  );
}
