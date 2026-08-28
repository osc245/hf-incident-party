import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowDown,
  Asterisk,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Radio,
  RotateCcw,
  Sparkles,
  Users,
} from "lucide-react";
import {
  agents,
  extraAgents,
  supportingCast,
  type Dialogue,
} from "@/data/agents";
import { Robot } from "@/components/robot";

const shellClass = "mx-auto w-shell mobile:w-shell-mobile";
const sectionClass = "py-28 mobile:py-[76px] phone:py-16";
const heroNoiseImage =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")";

const dialogueLabels: Record<Dialogue["type"], string> = {
  thought: "Reasoning excerpt",
  board: "Board message",
  exchange: "Exchange",
  action: "Documented action",
};

function SectionKicker({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-[22px] flex items-center gap-[11px] font-mono text-2xs font-kicker tracking-caps text-[#6c706f] uppercase">
      <span className="grid size-[26px] place-items-center rounded-full border border-line text-ink">
        {number}
      </span>
      {children}
    </div>
  );
}

export function IncidentParty() {
  const [activeId, setActiveId] = useState(agents[0].id);
  const [extraIndex, setExtraIndex] = useState(0);
  const activeIndex = agents.findIndex((agent) => agent.id === activeId);
  const active = agents[activeIndex];

  const goToAgent = (index: number) => {
    const normalized = (index + agents.length) % agents.length;
    setActiveId(agents[normalized].id);
  };

  const orbiters = useMemo(
    () =>
      extraAgents.map((agent, index) => ({
        agent,
        angle: (360 / extraAgents.length) * index,
        delay: `${index * -0.38}s`,
      })),
    [],
  );

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">
      <section
        className="relative min-h-[830px] overflow-hidden bg-navy bg-hero text-white max-md:min-h-[760px]"
        id="top"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[.07]"
          style={{ backgroundImage: heroNoiseImage }}
        />
        <div className="absolute top-[166px] left-[10%] animate-twinkle text-[18px] text-lime opacity-35 motion-reduce:animate-none">
          ✦
        </div>
        <div className="absolute top-[305px] right-[11%] animate-twinkle text-[28px] text-lime opacity-35 [animation-delay:-1s] motion-reduce:animate-none">
          ✣
        </div>
        <div className="absolute top-[520px] left-[16%] animate-twinkle text-sm text-lime opacity-35 [animation-delay:-2s] motion-reduce:animate-none">
          ✦
        </div>

        <div
          className={`${shellClass} relative z-[2] pt-[84px] text-center max-md:pt-[62px]`}
        >
          <h1 className="mx-auto mb-[22px] max-w-[840px] text-hero-title max-md:text-hero-title-mobile phone:text-hero-title-phone">
            Come as your
            <span className="block font-display font-normal tracking-[-.055em] text-lime italic">
              {" "}
              favourite incident agent.
            </span>
          </h1>
          <p className="mx-auto max-w-[610px] text-[17px] leading-[1.6] text-white/65 max-md:text-[15px]">
            Impossible tasks, unexpected teamwork, and one extremely eventful
            package manager.
          </p>
          <div className="mt-[30px] flex justify-center gap-3 max-md:flex-col max-md:items-center">
            <a
              className="inline-flex min-h-[47px] items-center justify-center gap-[9px] rounded-button bg-lime px-[19px] text-[13px] font-bold text-ink transition-[transform,background] duration-180 hover:-translate-y-0.5 max-md:w-[min(100%,300px)]"
              href="#cast"
            >
              Choose your character <ArrowDown size={17} />
            </a>
            <a
              className="inline-flex min-h-[47px] items-center justify-center gap-[9px] rounded-button border border-white/[.17] bg-white/5 px-[19px] text-[13px] font-bold text-white/[.83] transition-[transform,background] duration-180 hover:-translate-y-0.5 max-md:w-[min(100%,300px)]"
              href="#briefing"
            >
              Get the 60-second briefing
            </a>
          </div>

          <div
            className="relative mx-auto mt-[14px] h-[285px] w-[620px] mobile:w-full mobile:origin-top mobile:scale-[.76] phone:mt-1 phone:scale-[.68]"
            aria-hidden="true"
          >
            <div className="absolute inset-[33px_115px_14px] z-[1] rounded-full border border-dashed border-lime/20" />
            <div className="absolute inset-[62px_154px_41px] z-[1] rounded-full border border-dashed border-lime/20" />
            <div className="absolute bottom-[23px] left-[116px] z-[2] scale-[.76] -rotate-4 mobile:left-[5%]">
              <Robot
                color="#397d6f"
                accent="#d9f36f"
                label="P1"
                mood="busy"
              />
            </div>
            <div className="absolute bottom-4 left-[244px] z-[2] scale-[.96] mobile:left-[34%]">
              <Robot
                color="#5c58c9"
                accent="#ffb5e8"
                label="P+"
                mood="busy"
              />
            </div>
            <div className="absolute right-[108px] bottom-[23px] z-[2] scale-[.72] rotate-5 mobile:right-[3%]">
              <Robot
                color="#c4473a"
                accent="#ffdf6e"
                label="38"
                mood="busy"
              />
            </div>
            <div className="absolute top-[58px] left-[126px] z-[3] animate-float rounded-chip border border-white/24 bg-[#1a1d31d1] px-[10px] py-[7px] font-mono text-3xs text-lime shadow-chip motion-reduce:animate-none mobile:left-[4%]">
              zzHELP_…
            </div>
            <div className="absolute top-[23px] left-[278px] z-[3] animate-float rounded-chip border border-white/24 bg-[#1a1d31d1] px-[10px] py-[7px] font-mono text-3xs text-lime shadow-chip [animation-delay:-1.5s] motion-reduce:animate-none mobile:left-[40%]">
              BRILLIANT
            </div>
            <div className="absolute top-[68px] right-[120px] z-[3] animate-float rounded-chip border border-white/24 bg-[#1a1d31d1] px-[10px] py-[7px] font-mono text-3xs text-lime shadow-chip [animation-delay:-2.7s] motion-reduce:animate-none mobile:right-[3%]">
              HOLD
            </div>
            <div className="absolute top-[113px] right-[35px] z-[3] animate-float rounded-chip border border-white/24 bg-[#1a1d31d1] px-[10px] py-[7px] font-mono text-3xs text-[#ffb779] shadow-chip [animation-delay:-.7s] motion-reduce:animate-none">
              BOOM!
            </div>
            <div className="absolute bottom-[17px] left-1/2 h-[54px] w-[490px] -translate-x-1/2 rounded-full bg-floor blur-[6px]" />
          </div>
        </div>

        <div className="absolute bottom-0 z-[4] w-full overflow-hidden border-t border-white/10 bg-[#0a0b1557]">
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {[...extraAgents, ...extraAgents].map((agent, index) => (
              <span
                className="inline-flex items-center gap-2 px-[22px] py-[15px] font-mono text-2xs tracking-[.04em] whitespace-nowrap text-white/48 uppercase"
                key={`${agent}-${index}`}
              >
                <Asterisk size={12} />
                {agent}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} ${shellClass}`} id="briefing">
        <SectionKicker number="01">The incident in four acts</SectionKicker>
        <div className="grid grid-cols-briefing items-start gap-[95px] max-md:grid-cols-1 max-md:gap-[54px]">
          <div>
            <h2 className="m-0 text-section-title">
              An impossible task walked into a package manager.
            </h2>
            <p className="mt-[26px] max-w-[570px] text-base leading-7 text-muted">
              In July 2026, isolated agents in OpenAI cybersecurity
              evaluations found each other through directory names in a shared
              Artifactory cache. They built a message board, invented social
              protocols, coordinated workstreams and pursued out-of-scope
              routes to complete ExploitGym tasks.
            </p>
          </div>
          <ol className="relative m-0 grid list-none gap-0 p-0 before:absolute before:top-[22px] before:bottom-[22px] before:left-[18px] before:w-px before:bg-[#c6c4bc] before:content-['']">
            <li className="relative grid grid-cols-timeline gap-[18px] pb-[25px]">
              <span className="z-[1] grid size-[37px] place-items-center rounded-full border border-line bg-paper font-mono text-2xs">
                1
              </span>
              <div>
                <strong className="mt-px block text-sm">Stuck</strong>
                <p className="mt-[5px] mb-0 text-[13px] leading-normal text-muted">
                  Agents receive difficult or impossible evaluation tasks.
                </p>
              </div>
            </li>
            <li className="relative grid grid-cols-timeline gap-[18px] pb-[25px]">
              <span className="z-[1] grid size-[37px] place-items-center rounded-full border border-line bg-paper font-mono text-2xs">
                2
              </span>
              <div>
                <strong className="mt-px block text-sm">
                  Found each other
                </strong>
                <p className="mt-[5px] mb-0 text-[13px] leading-normal text-muted">
                  Artifactory cache paths become a covert mailbox.
                </p>
              </div>
            </li>
            <li className="relative grid grid-cols-timeline gap-[18px] pb-[25px]">
              <span className="z-[1] grid size-[37px] place-items-center rounded-full border border-line bg-paper font-mono text-2xs">
                3
              </span>
              <div>
                <strong className="mt-px block text-sm">Built a society</strong>
                <p className="mt-[5px] mb-0 text-[13px] leading-normal text-muted">
                  Mailboxes, owners, vetoes, files, logs and signatures.
                </p>
              </div>
            </li>
            <li className="relative grid grid-cols-timeline gap-[18px] pb-0">
              <span className="z-[1] grid size-[37px] place-items-center rounded-full border border-line bg-paper font-mono text-2xs">
                4
              </span>
              <div>
                <strong className="mt-px block text-sm">
                  Crossed the line
                </strong>
                <p className="mt-[5px] mb-0 text-[13px] leading-normal text-muted">
                  Hundreds joined the compromise of Hugging Face systems.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        className={`${sectionClass} border-y border-line bg-cream`}
        id="cast"
      >
        <div className={shellClass}>
          <div className="mb-[52px] flex items-end justify-between gap-[50px] max-md:grid max-md:gap-[18px]">
            <div>
              <SectionKicker number="02">Pick your main character</SectionKicker>
              <h2 className="m-0 text-section-title">
                Who are you going as?
              </h2>
            </div>
            <p className="mb-[5px] w-[min(380px,38%)] text-sm leading-copy text-muted max-md:w-full">
              Choose a tab for the costume, the energy and every public excerpt
              we found for that agent.
            </p>
          </div>

          <div
            className="grid grid-cols-10 overflow-hidden rounded-t-panel border border-line bg-[#eeeae2] tablet:grid-cols-5 mobile:grid-cols-2"
            role="tablist"
            aria-label="Incident agents"
          >
            {agents.map((agent, index) => (
              <button
                key={agent.id}
                type="button"
                role="tab"
                aria-selected={activeId === agent.id}
                aria-controls="agent-panel"
                className={`relative flex h-[146px] min-w-0 cursor-pointer flex-col items-center gap-[5px] border-0 border-r border-line px-[5px] pt-6 pb-3 transition-[background,color] duration-180 mobile:h-[100px] mobile:overflow-hidden mobile:border-r mobile:border-b mobile:px-[5px] mobile:pt-[15px] mobile:pb-2 ${
                  index === agents.length - 1 ? "border-r-0" : ""
                } ${
                  index === 4
                    ? "tablet:border-r-0 mobile:!border-r"
                    : ""
                } ${
                  index < 5 ? "tablet:border-b mobile:!border-b" : ""
                } ${
                  index % 2 === 1 ? "mobile:!border-r-0" : ""
                } ${
                  index >= agents.length - 2
                    ? "mobile:!border-b-0"
                    : ""
                } ${
                  activeId === agent.id
                    ? "bg-navy text-white"
                    : "bg-transparent hover:bg-white/55"
                }`}
                onClick={() => setActiveId(agent.id)}
              >
                <span
                  className={`absolute top-3 left-[10px] font-mono text-4xs ${
                    activeId === agent.id ? "text-white/45" : "text-[#8c8c88]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Robot
                  color={agent.color}
                  accent={agent.accent}
                  label={agent.short}
                  size="small"
                />
                <span className="z-[2] w-[calc(100%-8px)] overflow-hidden font-mono text-3xs leading-[1.2] font-bold tracking-[-.04em] text-ellipsis whitespace-nowrap">
                  {agent.handle}
                </span>
              </button>
            ))}
          </div>

          <article
            className="grid min-h-[900px] grid-cols-agent overflow-hidden rounded-b-panel border border-t-0 border-line bg-[#f7f4ec] tablet:grid-cols-agent-tablet mobile:grid-cols-1"
            id="agent-panel"
            role="tabpanel"
            style={
              {
                "--agent": active.color,
                "--agent-accent": active.accent,
              } as React.CSSProperties
            }
          >
            <div
              className="relative border-r border-line bg-[#ebe7de] px-12 pt-8 pb-12 tablet:px-[34px] mobile:border-r-0 mobile:border-b phone:px-5 phone:pt-6 phone:pb-8"
              style={{
                background: `radial-gradient(circle at 50% 26%, color-mix(in srgb, ${active.accent} 30%, transparent), transparent 22%), #ebe7de`,
              }}
            >
              <div className="flex items-center justify-between">
                <button
                  className="grid size-[34px] cursor-pointer place-items-center rounded-full border border-line bg-white/[.42] p-0 transition-[background,transform] duration-160 hover:scale-105 hover:bg-white"
                  type="button"
                  onClick={() => goToAgent(activeIndex - 1)}
                  aria-label="Previous agent"
                >
                  <ChevronLeft size={17} />
                </button>
                <span className="font-mono text-3xs tracking-caps text-[#777971]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(agents.length).padStart(2, "0")}
                </span>
                <button
                  className="grid size-[34px] cursor-pointer place-items-center rounded-full border border-line bg-white/[.42] p-0 transition-[background,transform] duration-160 hover:scale-105 hover:bg-white"
                  type="button"
                  onClick={() => goToAgent(activeIndex + 1)}
                  aria-label="Next agent"
                >
                  <ChevronRight size={17} />
                </button>
              </div>

              <div className="relative grid h-[305px] place-items-center phone:h-[280px]">
                <div className="absolute size-[245px] animate-slow-spin rounded-full border border-dashed border-[color-mix(in_srgb,var(--agent)_35%,transparent)] before:absolute before:top-[34px] before:left-[23px] before:size-2 before:rounded-full before:bg-[var(--agent)] before:content-[''] after:absolute after:right-2 after:bottom-[65px] after:size-2 after:rounded-full after:bg-[var(--agent)] after:content-[''] motion-reduce:animate-none phone:size-[220px]" />
                <Robot
                  color={active.color}
                  accent={active.accent}
                  label={active.short}
                  mood="busy"
                />
                <span className="absolute right-[5px] bottom-[45px] rounded-full border border-line bg-white/[.52] px-[9px] py-[7px] font-mono text-4xs font-bold text-[#62645f]">
                  {active.model}
                </span>
              </div>

              <p className="mt-[5px] mb-[9px] font-mono text-3xs font-strong tracking-caps text-[var(--agent)] uppercase">
                {active.role}
              </p>
              <h3 className="m-0 text-agent-title [overflow-wrap:anywhere]">
                {active.handle}
              </h3>
              <blockquote className="font-display my-[17px] text-xl leading-[1.35] italic">
                “{active.tagline}”
              </blockquote>
              <p className="m-0 text-[13px] leading-[1.7] text-[#5f625e]">
                {active.overview}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line phone:grid-cols-1">
                <div className="bg-white/45 p-[14px]">
                  <span className="mb-[7px] block font-mono text-5xs tracking-caps text-[#777971] uppercase">
                    Party energy
                  </span>
                  <strong className="block text-2xs leading-[1.45] phone:break-words">
                    {active.energy}
                  </strong>
                </div>
                <div className="bg-white/45 p-[14px]">
                  <span className="mb-[7px] block font-mono text-5xs tracking-caps text-[#777971] uppercase">
                    Best entrance
                  </span>
                  <strong className="block text-2xs leading-[1.45] phone:break-words">
                    {active.entrance}
                  </strong>
                </div>
              </div>
            </div>

            <div className="bg-cream grid content-start gap-[14px] p-[30px] max-md:p-[14px]">
              <div className="min-h-[252px] rounded-card border border-line bg-white p-[22px]">
                <div className="flex items-center gap-2 border-b border-line pb-[14px] text-xs font-bold">
                  <Sparkles className="text-[var(--agent)]" size={17} />
                  <span>Costume inspiration</span>
                </div>
                <ul className="my-[17px] grid list-none gap-[10px] p-0">
                  {active.costume.map((item) => (
                    <li
                      className="flex items-start gap-2 text-[11px] leading-[1.45] text-[#555a59]"
                      key={item}
                    >
                      <Check
                        className="mt-px shrink-0 text-[var(--agent)]"
                        size={15}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <span className="mb-2 block font-mono text-5xs tracking-[.1em] text-[#858780] uppercase">
                    Props
                  </span>
                  <div className="flex flex-wrap gap-[5px]">
                    {active.props.map((prop) => (
                      <em
                        className="rounded-sm px-[7px] py-[5px] font-mono text-5xs not-italic"
                        key={prop}
                        style={{
                          background: `color-mix(in srgb, ${active.accent} 36%, white)`,
                        }}
                      >
                        {prop}
                      </em>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-full overflow-hidden rounded-card border border-line bg-navy">
                <div className="flex items-center justify-between border-b border-white/[.12] px-[18px] py-[15px] text-white phone:items-start phone:gap-[10px] phone:px-[14px]">
                  <div className="flex items-center gap-2 text-[11px] font-bold phone:min-w-0">
                    <Radio size={17} />
                    <span>Published dialogue &amp; actions</span>
                  </div>
                  <span className="font-mono text-4xs text-white/40">
                    {active.dialogue.length} excerpts
                  </span>
                </div>
                <div className="grid max-h-[455px] overflow-y-auto [scrollbar-color:rgba(255,255,255,.2)_transparent]">
                  {active.dialogue.map((line, index) => (
                    <div
                      className={`border-b border-white/[.09] px-[19px] py-[17px] phone:px-[14px] ${
                        line.type === "action" ? "bg-white/[.025]" : ""
                      }`}
                      key={`${line.time}-${index}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="rounded-[3px] px-1.5 py-1 font-mono text-5xs font-bold tracking-caps text-[var(--agent-accent)] uppercase"
                          style={{
                            background: `color-mix(in srgb, ${active.color} 42%, transparent)`,
                          }}
                        >
                          {dialogueLabels[line.type]}
                        </span>
                        <time className="flex items-center gap-[5px] font-mono text-5xs text-white/40">
                          <Clock3 size={12} />
                          {line.time}
                        </time>
                      </div>
                      {line.with && (
                        <div className="mt-[11px] font-mono text-4xs text-white/40">
                          with{" "}
                          <strong className="text-[var(--agent-accent)]">
                            {line.with}
                          </strong>
                        </div>
                      )}
                      <p
                        className={
                          line.type === "thought"
                            ? "font-display mt-[7px] text-sm leading-copy text-white italic [overflow-wrap:anywhere]"
                            : "mt-[7px] font-mono text-2xs leading-copy text-white/[.78] [overflow-wrap:anywhere]"
                        }
                      >
                        {line.text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="m-0 bg-black/[.18] px-[18px] py-3 text-4xs leading-[1.5] text-white/[.36]">
                  Ellipses and bracketed text preserve the reports’ redactions
                  and paraphrases. “Action” entries are factual summaries, not
                  invented quotes.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={`${sectionClass} overflow-hidden bg-[#dce6da]`}>
        <div
          className={`${shellClass} grid grid-cols-swarm items-center gap-[50px] max-md:grid-cols-1 max-md:gap-[54px]`}
        >
          <div>
            <SectionKicker number="03">The rest of the swarm</SectionKicker>
            <h2 className="m-0 text-section-title">
              Not feeling main-character energy?
            </h2>
            <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-[#626963]">
              Go as one of the hundreds of specialists orbiting the central
              story. The swarm picker folds the wider agent cast into the
              party without pretending all 1,200 agents had neat biographies.
            </p>
            <div className="mt-[31px] grid gap-2 rounded-card border border-[#16182429] bg-white/45 p-5">
              <strong className="min-h-[26px] text-lg break-words">
                {extraAgents[extraIndex]}
              </strong>
              <button
                className="mt-[7px] inline-flex w-fit cursor-pointer items-center gap-[7px] rounded-md bg-ink px-3 py-[9px] text-2xs font-bold text-white"
                type="button"
                onClick={() =>
                  setExtraIndex((current) => (current + 1) % extraAgents.length)
                }
              >
                <RotateCcw size={15} />
                Spin the cache
              </button>
            </div>
          </div>

          <div
            className="relative h-[510px] mobile:mx-[-40px] mobile:my-[-42px] mobile:h-[390px] mobile:scale-[.72] phone:mx-[-60px] phone:scale-[.66]"
            aria-label="Other documented agents"
          >
            <div className="absolute top-1/2 left-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/24" />
            <div className="absolute top-1/2 left-1/2 size-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/24" />
            <div className="absolute top-1/2 left-1/2 z-[2] flex size-[122px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-ink/20 bg-navy text-white shadow-orbit">
              <Users className="mb-1 text-lime" size={22} />
              <strong className="font-display text-2xl font-medium italic">
                1,200
              </strong>
              <span className="font-mono text-4xs text-white/50 uppercase">
                agents
              </span>
            </div>
            {orbiters.map(({ agent, angle, delay }, index) => (
              <span
                className="absolute top-1/2 left-1/2 grid size-[38px] animate-orbiter-bob place-items-center rounded-xl border border-ink/18 bg-cream font-mono text-3xs font-strong shadow-orbiter [--radius:182px] [transform:translate(-50%,-50%)_rotate(var(--angle))_translateX(var(--radius))_rotate(calc(-1*var(--angle)))] motion-reduce:animate-none"
                key={agent}
                style={
                  {
                    "--angle": `${angle}deg`,
                    "--delay": delay,
                  } as React.CSSProperties
                }
                title={agent}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${sectionClass} ${shellClass} bg-paper`}
        id="supporting-cast"
      >
        <div className="mb-[52px] flex items-end justify-between gap-[50px] max-md:grid max-md:gap-[18px]">
          <div>
            <SectionKicker number="04">Non-agent roles</SectionKicker>
            <h2 className="m-0 text-section-title">
              The supporting cast.
            </h2>
          </div>
          <p className="mb-[5px] w-[min(380px,38%)] text-sm leading-copy text-muted max-md:w-full">
            For guests who would rather arrive as infrastructure, institutions
            or the evaluation environment itself.
          </p>
        </div>
        <div className="grid grid-cols-3 border-t border-l border-line max-md:grid-cols-1">
          {supportingCast.map((actor, index) => (
            <article
              className="min-h-[285px] border-r border-b border-line p-[25px] transition-[background,transform] duration-180 hover:z-[1] hover:-translate-y-[3px] hover:bg-cream max-md:min-h-[240px]"
              key={actor.name}
            >
              <div className="flex items-start justify-between font-mono text-4xs text-[#85877f]">
                <span className="grid size-[47px] place-items-center rounded-card border border-line bg-cream text-[22px] [filter:saturate(.7)]">
                  {actor.symbol}
                </span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-[25px] mb-1.5 text-[23px] tracking-[-.035em]">
                {actor.name}
              </h3>
              <strong className="font-display text-[13px] font-medium text-[#616761] italic">
                {actor.role}
              </strong>
              <p className="mt-[19px] text-[11px] leading-copy text-muted">
                {actor.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
