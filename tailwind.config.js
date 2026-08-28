export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161824",
        muted: "#666a76",
        paper: "#f5f1e8",
        cream: "#fffdf6",
        navy: "#181a2d",
        lime: "#d9f36f",
        line: "rgba(22, 24, 36, 0.14)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "Arial", "sans-serif"],
        mono: [
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      keyframes: {
        "robot-hover": {
          "0%, 100%": { transform: "translateY(0) rotate(-0.5deg)" },
          "50%": { transform: "translateY(-8px) rotate(0.5deg)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(-18deg)" },
          "50%": { transform: "rotate(-58deg)" },
        },
        blink: {
          "0%, 45%, 50%, 100%": { transform: "scaleY(1)" },
          "47%": { transform: "scaleY(0.08)" },
        },
        "pulse-light": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
        twinkle: {
          "0%, 100%": {
            transform: "scale(0.8) rotate(0)",
            opacity: "0.22",
          },
          "50%": {
            transform: "scale(1.15) rotate(35deg)",
            opacity: "0.5",
          },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        "slow-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "orbiter-bob": {
          "0%, 100%": { marginTop: "0" },
          "50%": { marginTop: "-8px" },
        },
      },
      animation: {
        "robot-hover": "robot-hover 3.2s ease-in-out infinite",
        wave: "wave 2.2s ease-in-out infinite",
        blink: "blink 5s infinite",
        "pulse-light": "pulse-light 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        marquee: "marquee 42s linear infinite",
        "slow-spin": "slow-spin 24s linear infinite",
        "orbiter-bob": "orbiter-bob 3s var(--delay) ease-in-out infinite",
      },
    },
  },
};
