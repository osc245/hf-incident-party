type RobotProps = {
  color: string;
  accent: string;
  label: string;
  size?: "small" | "large";
  mood?: "calm" | "busy";
};

const robotClass =
  "relative h-[178px] w-[126px] [filter:drop-shadow(0_13px_12px_rgba(0,0,0,.14))] after:absolute after:top-[55px] after:right-[2px] after:z-[2] after:h-[31px] after:w-[17px] after:rounded-[2px_8px_8px_2px] after:robot-stroke after:bg-[var(--robot)] after:content-['']";

const robotPart = "robot-stroke bg-[var(--robot)]";
const robotEyeClass =
  "absolute top-[14px] z-[2] h-3 w-[10px] motion-safe:animate-blink rounded-full border-2 border-outline bg-white";

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
          ? "mb-[-103px] origin-top scale-[.42] !filter-none mobile:mb-[-124px] mobile:scale-[.3]"
          : ""
      } ${mood === "busy" ? "motion-safe:animate-robot-hover" : ""}`}
      style={{ "--robot": color, "--robot-accent": accent } as React.CSSProperties}
      aria-label={`${label} robot`}
      role="img"
    >
      <span className="absolute top-[7px] left-[60px] z-[1] block h-[31px] w-[3px] bg-outline">
        <span className="absolute top-[-2px] left-[-5px] h-[13px] w-[13px] rounded-full robot-stroke bg-[var(--robot-accent)]" />
      </span>
      <span className="absolute top-[55px] left-[2px] z-[2] h-[31px] w-[17px] rounded-[8px_2px_2px_8px] robot-stroke bg-[var(--robot)]" />
      <span
        className={`absolute top-[34px] left-4 z-[3] block h-[72px] w-[94px] rounded-[23px_23px_18px_18px] ${robotPart}`}
      >
        <span className="absolute inset-[14px_12px_13px] block overflow-hidden rounded-[14px] border-2 border-outline bg-robot-screen after:absolute after:top-[-6px] after:left-[-11px] after:h-[55px] after:w-10 after:rotate-20 after:bg-white/35 after:content-['']">
          <i className={`${robotEyeClass} left-[15px]`} />
          <i className={`${robotEyeClass} right-[15px]`} />
          <i className="absolute bottom-[9px] left-1/2 h-1.5 w-[19px] -translate-x-1/2 rounded-full border-b-2 border-outline" />
        </span>
      </span>
      <span className={`absolute top-[102px] left-[50px] z-[1] h-[17px] w-[26px] ${robotPart}`} />
      <span
        className={`absolute top-[113px] left-[27px] z-[2] block h-[50px] w-[72px] rounded-[9px_9px_18px_18px] ${robotPart}`}
      >
        <span className="absolute top-3 left-3 font-mono text-2xs font-extrabold text-white">
          {label}
        </span>
        <span className="absolute top-3 right-3 h-2 w-2 motion-safe:animate-pulse-light rounded-full border-2 border-outline bg-[var(--robot-accent)]" />
      </span>
      <span
        className={`absolute top-[122px] left-[14px] z-[1] h-[41px] w-[19px] origin-top rotate-[18deg] rounded-lg ${robotPart}`}
      />
      <span
        className={`absolute top-[122px] right-[14px] z-[1] h-[41px] w-[19px] origin-top -rotate-[18deg] rounded-lg ${robotPart} ${
          mood === "busy" ? "motion-safe:animate-wave" : ""
        }`}
      />
      <span className="absolute bottom-0 left-1/2 h-[15px] w-[95px] -translate-x-1/2 rounded-full bg-black/16 blur-[5px]" />
    </div>
  );
}
