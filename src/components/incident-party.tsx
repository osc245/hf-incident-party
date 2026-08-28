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
  agents as sourceAgents,
  extraAgents,
  supportingCast,
  type Dialogue,
} from "@/data/agents";
import { Robot } from "@/components/robot";

const agents = [
  ...sourceAgents.filter((agent) => agent.id === "phaseonebig"),
  ...sourceAgents.filter((agent) => agent.id !== "phaseonebig"),
];

const shellClass =
  "mx-auto w-[min(1180px,calc(100%-48px))] max-[760px]:w-[min(100%-28px,600px)]";
const sectionClass = "py-28 max-[760px]:py-[76px] max-[420px]:py-16";

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
    <div className="mb-[22px] flex items-center gap-[11px] font-[var(--mono)] text-[10px] font-[650] tracking-[.08em] text-[#6c706f] uppercase">
      <span className="grid size-[26px] place-items-center rounded-full border border-[var(--line)] text-[var(--ink)]">
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
    <main className="min-h-screen bg-paper text-ink">
      <section
        className="hero relative min-h-[830px] overflow-hidden text-white max-md:min-h-[760px]"
        id="top"
      >
        <div className="hero-noise pointer-events-none absolute inset-0 opacity-[.07]" />
        <div className="hero-spark hero-spark-one">✦</div>
        <div className="hero-spark hero-spark-two">✣</div>
        <div className="hero-spark hero-spark-three">✦</div>

        <div
          className={`${shellClass} relative z-[2] pt-[84px] text-center max-md:pt-[62px]`}
        >
          <h1 className="mx-auto mb-[22px] max-w-[840px] text-[clamp(52px,7vw,92px)] leading-[.94] font-[630] tracking-[-.065em] max-md:text-[clamp(47px,14vw,68px)]">
            Come as your
            <span> favourite incident agent.</span>
          </h1>
          <p className="mx-auto max-w-[610px] text-[17px] leading-[1.6] text-white/65 max-md:text-[15px]">
            Impossible tasks, unexpected teamwork, and one extremely eventful
            package manager.
          </p>
          <div className="mt-[30px] flex justify-center gap-3 max-md:flex-col max-md:items-center">
            <a
              className="bg-lime text-ink inline-flex min-h-[47px] items-center justify-center gap-[9px] rounded-[9px] px-[19px] text-[13px] font-bold transition-[transform,background] duration-[180ms] hover:-translate-y-0.5 max-md:w-[min(100%,300px)]"
              href="#cast"
            >
              Choose your character <ArrowDown size={17} />
            </a>
            <a
              className="inline-flex min-h-[47px] items-center justify-center gap-[9px] rounded-[9px] border border-white/[.17] bg-white/5 px-[19px] text-[13px] font-bold text-white/[.83] transition-[transform,background] duration-[180ms] hover:-translate-y-0.5 max-md:w-[min(100%,300px)]"
              href="#briefing"
            >
              Get the 60-second briefing
            </a>
          </div>

          <div className="hero-stage" aria-hidden="true">
            <div className="signal signal-one" />
            <div className="signal signal-two" />
            <div className="hero-robot hero-robot-left">
              <Robot
                color="#397d6f"
                accent="#d9f36f"
                label="P1"
                mood="busy"
              />
            </div>
            <div className="hero-robot hero-robot-center">
              <Robot
                color="#5c58c9"
                accent="#ffb5e8"
                label="P+"
                mood="busy"
              />
            </div>
            <div className="hero-robot hero-robot-right">
              <Robot
                color="#c4473a"
                accent="#ffdf6e"
                label="38"
                mood="busy"
              />
            </div>
            <div className="message-chip chip-one">zzHELP_…</div>
            <div className="message-chip chip-two">BRILLIANT</div>
            <div className="message-chip chip-three">HOLD</div>
            <div className="message-chip chip-four">BOOM!</div>
            <div className="stage-floor" />
          </div>
        </div>

        <div className="ticker">
          <div className="ticker-track">
            {[...extraAgents, ...extraAgents].map((agent, index) => (
              <span key={`${agent}-${index}`}>
                <Asterisk size={12} />
                {agent}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} ${shellClass}`} id="briefing">
        <SectionKicker number="01">The incident in four acts</SectionKicker>
        <div className="grid grid-cols-[1.08fr_.92fr] items-start gap-[95px] max-md:grid-cols-1 max-md:gap-[54px]">
          <div>
            <h2 className="m-0 text-[clamp(38px,4.5vw,61px)] leading-[1.02] font-[620] tracking-[-.052em]">
              An impossible task walked into a package manager.
            </h2>
            <p className="mt-[26px] max-w-[570px] text-base leading-7 text-[var(--muted)]">
              In July 2026, isolated agents in OpenAI cybersecurity
              evaluations found each other through directory names in a shared
              Artifactory cache. They built a message board, invented social
              protocols, coordinated workstreams and pursued out-of-scope
              routes to complete ExploitGym tasks.
            </p>
          </div>
          <ol className="mini-timeline">
            <li>
              <span>1</span>
              <div>
                <strong>Stuck</strong>
                <p>Agents receive difficult or impossible evaluation tasks.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Found each other</strong>
                <p>Artifactory cache paths become a covert mailbox.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Built a society</strong>
                <p>Mailboxes, owners, vetoes, files, logs and signatures.</p>
              </div>
            </li>
            <li>
              <span>4</span>
              <div>
                <strong>Crossed the line</strong>
                <p>Hundreds joined the compromise of Hugging Face systems.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={`cast-section ${sectionClass}`} id="cast">
        <div className={shellClass}>
          <div className="mb-[52px] flex items-end justify-between gap-[50px] max-md:grid max-md:gap-[18px]">
            <div>
              <SectionKicker number="02">Pick your main character</SectionKicker>
              <h2 className="m-0 text-[clamp(38px,4.5vw,61px)] leading-[1.02] font-[620] tracking-[-.052em]">
                Who are you going as?
              </h2>
            </div>
            <p className="mb-[5px] w-[min(380px,38%)] text-sm leading-[1.65] text-[var(--muted)] max-md:w-full">
              Choose a tab for the costume, the energy and every public excerpt
              we found for that agent.
            </p>
          </div>

          <div
            className="agent-tabs"
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
                className={activeId === agent.id ? "active" : ""}
                onClick={() => setActiveId(agent.id)}
              >
                <span className="tab-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Robot
                  color={agent.color}
                  accent={agent.accent}
                  label={agent.short}
                  size="small"
                />
                <span className="tab-handle">{agent.handle}</span>
              </button>
            ))}
          </div>

          <article
            className="agent-panel"
            id="agent-panel"
            role="tabpanel"
            style={
              {
                "--agent": active.color,
                "--agent-accent": active.accent,
              } as React.CSSProperties
            }
          >
            <div className="agent-profile relative border-r border-[var(--line)] px-12 pt-8 pb-12 max-[1050px]:px-[34px] max-[760px]:border-r-0 max-[760px]:border-b max-[420px]:px-5 max-[420px]:pt-6 max-[420px]:pb-8">
              <div className="flex items-center justify-between">
                <button
                  className="grid size-[34px] cursor-pointer place-items-center rounded-full border border-[var(--line)] bg-white/[.42] p-0 transition-[background,transform] duration-[160ms] hover:scale-105 hover:bg-white"
                  type="button"
                  onClick={() => goToAgent(activeIndex - 1)}
                  aria-label="Previous agent"
                >
                  <ChevronLeft size={17} />
                </button>
                <span className="font-[var(--mono)] text-[9px] tracking-[.08em] text-[#777971]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(agents.length).padStart(2, "0")}
                </span>
                <button
                  className="grid size-[34px] cursor-pointer place-items-center rounded-full border border-[var(--line)] bg-white/[.42] p-0 transition-[background,transform] duration-[160ms] hover:scale-105 hover:bg-white"
                  type="button"
                  onClick={() => goToAgent(activeIndex + 1)}
                  aria-label="Next agent"
                >
                  <ChevronRight size={17} />
                </button>
              </div>

              <div className="relative grid h-[305px] place-items-center max-[420px]:h-[280px]">
                <div className="profile-halo" />
                <Robot
                  color={active.color}
                  accent={active.accent}
                  label={active.short}
                  mood="busy"
                />
                <span className="absolute right-[5px] bottom-[45px] rounded-full border border-[var(--line)] bg-white/[.52] px-[9px] py-[7px] font-[var(--mono)] text-[8px] font-bold text-[#62645f]">
                  {active.model}
                </span>
              </div>

              <p className="mt-[5px] mb-[9px] font-[var(--mono)] text-[9px] font-[750] tracking-[.08em] text-[var(--agent)] uppercase">
                {active.role}
              </p>
              <h3 className="m-0 text-[clamp(34px,3.2vw,49px)] leading-none font-[650] tracking-[-.055em] [overflow-wrap:anywhere]">
                {active.handle}
              </h3>
              <blockquote className="font-display my-[17px] text-xl leading-[1.35] italic">
                “{active.tagline}”
              </blockquote>
              <p className="m-0 text-[13px] leading-[1.7] text-[#5f625e]">
                {active.overview}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)] max-[420px]:grid-cols-1">
                <div className="bg-white/45 p-[14px]">
                  <span className="mb-[7px] block font-[var(--mono)] text-[7px] tracking-[.08em] text-[#777971] uppercase">
                    Party energy
                  </span>
                  <strong className="block text-[10px] leading-[1.45] max-[420px]:break-words">
                    {active.energy}
                  </strong>
                </div>
                <div className="bg-white/45 p-[14px]">
                  <span className="mb-[7px] block font-[var(--mono)] text-[7px] tracking-[.08em] text-[#777971] uppercase">
                    Best entrance
                  </span>
                  <strong className="block text-[10px] leading-[1.45] max-[420px]:break-words">
                    {active.entrance}
                  </strong>
                </div>
              </div>
            </div>

            <div className="bg-cream grid content-start gap-[14px] p-[30px] max-md:p-[14px]">
              <div className="min-h-[252px] rounded-[10px] border border-[var(--line)] bg-white p-[22px]">
                <div className="flex items-center gap-2 border-b border-[var(--line)] pb-[14px] text-xs font-bold">
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
                  <span className="mb-2 block font-[var(--mono)] text-[7px] tracking-[.1em] text-[#858780] uppercase">
                    Props
                  </span>
                  <div className="flex flex-wrap gap-[5px]">
                    {active.props.map((prop) => (
                      <em
                        className="rounded-sm px-[7px] py-[5px] font-[var(--mono)] text-[7px] not-italic"
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

              <div className="bg-navy col-span-full overflow-hidden rounded-[10px] border border-[var(--line)]">
                <div className="flex items-center justify-between border-b border-white/[.12] px-[18px] py-[15px] text-white max-[420px]:items-start max-[420px]:gap-[10px] max-[420px]:px-[14px]">
                  <div className="flex items-center gap-2 text-[11px] font-bold max-[420px]:min-w-0">
                    <Radio size={17} />
                    <span>Published dialogue &amp; actions</span>
                  </div>
                  <span className="font-[var(--mono)] text-[8px] text-white/40">
                    {active.dialogue.length} excerpts
                  </span>
                </div>
                <div className="grid max-h-[455px] overflow-y-auto [scrollbar-color:rgba(255,255,255,.2)_transparent]">
                  {active.dialogue.map((line, index) => (
                    <div
                      className={`border-b border-white/[.09] px-[19px] py-[17px] max-[420px]:px-[14px] ${
                        line.type === "action" ? "bg-white/[.025]" : ""
                      }`}
                      key={`${line.time}-${index}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="rounded-[3px] px-1.5 py-1 font-[var(--mono)] text-[7px] font-bold tracking-[.08em] text-[var(--agent-accent)] uppercase"
                          style={{
                            background: `color-mix(in srgb, ${active.color} 42%, transparent)`,
                          }}
                        >
                          {dialogueLabels[line.type]}
                        </span>
                        <time className="flex items-center gap-[5px] font-[var(--mono)] text-[7px] text-white/40">
                          <Clock3 size={12} />
                          {line.time}
                        </time>
                      </div>
                      {line.with && (
                        <div className="mt-[11px] font-[var(--mono)] text-[8px] text-white/40">
                          with{" "}
                          <strong className="text-[var(--agent-accent)]">
                            {line.with}
                          </strong>
                        </div>
                      )}
                      <p
                        className={
                          line.type === "thought"
                            ? "font-display mt-[7px] text-sm leading-[1.65] text-white italic [overflow-wrap:anywhere]"
                            : "mt-[7px] font-[var(--mono)] text-[10px] leading-[1.65] text-white/[.78] [overflow-wrap:anywhere]"
                        }
                      >
                        {line.text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="m-0 bg-black/[.18] px-[18px] py-3 text-[8px] leading-[1.5] text-white/[.36]">
                  Ellipses and bracketed text preserve the reports’ redactions
                  and paraphrases. “Action” entries are factual summaries, not
                  invented quotes.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={`swarm-section ${sectionClass}`}>
        <div
          className={`${shellClass} grid grid-cols-[.85fr_1.15fr] items-center gap-[50px] max-md:grid-cols-1 max-md:gap-[54px]`}
        >
          <div>
            <SectionKicker number="03">The rest of the swarm</SectionKicker>
            <h2 className="m-0 text-[clamp(38px,4.5vw,61px)] leading-[1.02] font-[620] tracking-[-.052em]">
              Not feeling main-character energy?
            </h2>
            <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-[#626963]">
              Go as one of the hundreds of specialists orbiting the central
              story. The swarm picker folds the wider agent cast into the
              party without pretending all 1,200 agents had neat biographies.
            </p>
            <div className="mt-[31px] grid gap-2 rounded-[10px] border border-[#16182429] bg-white/45 p-5">
              <strong className="min-h-[26px] text-lg break-words">
                {extraAgents[extraIndex]}
              </strong>
              <button
                className="mt-[7px] inline-flex w-fit cursor-pointer items-center gap-[7px] rounded-md bg-[var(--ink)] px-3 py-[9px] text-[10px] font-bold text-white"
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

          <div className="orbit" aria-label="Other documented agents">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="orbit-core">
              <Users size={22} />
              <strong>1,200</strong>
              <span>agents</span>
            </div>
            {orbiters.map(({ agent, angle, delay }, index) => (
              <span
                className="orbiter"
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
            <h2 className="m-0 text-[clamp(38px,4.5vw,61px)] leading-[1.02] font-[620] tracking-[-.052em]">
              The supporting cast.
            </h2>
          </div>
          <p className="mb-[5px] w-[min(380px,38%)] text-sm leading-[1.65] text-[var(--muted)] max-md:w-full">
            For guests who would rather arrive as infrastructure, institutions
            or the evaluation environment itself.
          </p>
        </div>
        <div className="grid grid-cols-3 border-t border-l border-[var(--line)] max-md:grid-cols-1">
          {supportingCast.map((actor, index) => (
            <article
              className="min-h-[285px] border-r border-b border-[var(--line)] p-[25px] transition-[background,transform] duration-[180ms] hover:z-[1] hover:-translate-y-[3px] hover:bg-[var(--cream)] max-md:min-h-[240px]"
              key={actor.name}
            >
              <div className="flex items-start justify-between font-[var(--mono)] text-[8px] text-[#85877f]">
                <span className="bg-cream grid size-[47px] place-items-center rounded-[10px] border border-[var(--line)] text-[22px] [filter:saturate(.7)]">
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
              <p className="mt-[19px] text-[11px] leading-[1.65] text-[var(--muted)]">
                {actor.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
