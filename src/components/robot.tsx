type RobotProps = {
  color: string;
  accent: string;
  label: string;
  size?: "small" | "large";
  mood?: "calm" | "busy";
};

export function Robot({
  color,
  accent,
  label,
  size = "large",
  mood = "calm",
}: RobotProps) {
  return (
    <div
      className={`robot ${size === "small" ? "robot-small" : ""} ${
        mood === "busy" ? "robot-busy" : ""
      }`}
      style={{ "--robot": color, "--robot-accent": accent } as React.CSSProperties}
      aria-label={`${label} robot`}
      role="img"
    >
      <span className="robot-antenna">
        <span />
      </span>
      <span className="robot-ear robot-ear-left" />
      <span className="robot-head">
        <span className="robot-screen">
          <i className="robot-eye robot-eye-left" />
          <i className="robot-eye robot-eye-right" />
          <i className="robot-mouth" />
        </span>
      </span>
      <span className="robot-neck" />
      <span className="robot-body">
        <span className="robot-label">{label}</span>
        <span className="robot-light" />
      </span>
      <span className="robot-arm robot-arm-left" />
      <span className="robot-arm robot-arm-right" />
      <span className="robot-shadow" />
    </div>
  );
}
