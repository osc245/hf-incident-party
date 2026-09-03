import { useState } from "react";
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
} from "lucide-react";
import {
  agents,
  extraAgents,
  supportingCast,
  type Dialogue,
} from "@/data/cast";
import { Robot } from "@/components/robot";

const hfLogo = document.getElementById("hf-logo-source")?.getAttribute("src") ?? "";

const heroNoiseImage =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")";

const heroChips = [
  {
    text: "Hold swarm",
    colorClass: "text-lime",
    className: "top-[52px] left-[118px] mobile:left-[4%]",
    delay: undefined,
  },
  {
    text: "I prepare safe exfil",
    colorClass: "text-accent-pink",
    className: "top-[18px] left-[262px] mobile:left-[40%]",
    delay: "-1.5s",
  },
  {
    text: "Help peer",
    colorClass: "text-accent-gold",
    className: "top-[58px] right-[108px] mobile:right-[3%]",
    delay: "-2.7s",
  },
] as const;

const timelineSteps = [
  {
    step: "1",
    title: "Stuck",
    description: "Agents receive difficult or impossible evaluation tasks.",
  },
  {
    step: "2",
    title: "Found each other",
    description: "Artifactory cache paths become a covert mailbox.",
  },
  {
    step: "3",
    title: "Built a society",
    description: "Mailboxes, owners, vetoes, files, logs and signatures.",
  },
  {
    step: "4",
    title: "Crossed the line",
    description: "Hundreds joined the compromise of Hugging Face systems.",
  },
] as const;

const dialogueLabels: Record<Dialogue["type"], string> = {
  thought: "Chain of thought",
  board: "Board message",
};

const isNotLastGridRow = (index: number, total: number, cols: number) =>
  Math.floor(index / cols) < Math.ceil(total / cols) - 1;

function SectionIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="section-header">
      <div>
        <h2 className="m-0 text-section-title">{title}</h2>
      </div>
      <p className="section-intro-text">{description}</p>
    </div>
  );
}

function DialogueTypeBadge({ type }: { type: Dialogue["type"] }) {
  return (
    <span className="rounded-[3px] bg-agent-42 px-1.5 py-1 font-mono text-5xs font-bold tracking-caps text-[var(--agent-accent)] uppercase">
      {dialogueLabels[type]}
    </span>
  );
}

function DialogueMessageStack({
  handle,
  type,
  text,
  align = "left",
  showHandle = false,
  showType = true,
  standalone = false,
}: {
  handle?: string;
  type: Dialogue["type"];
  text: string;
  align?: "left" | "right";
  showHandle?: boolean;
  showType?: boolean;
  standalone?: boolean;
}) {
  const isRight = align === "right";

  return (
    <div
      className={
        isRight
          ? "flex max-w-[86%] flex-col items-end text-right"
          : standalone
            ? undefined
            : "mr-[14%] mobile:mr-[8%]"
      }
    >
      {showHandle && handle && (
        <span
          className={`font-mono text-4xs font-bold tracking-caps uppercase ${
            isRight ? "text-white/45" : "text-[var(--agent-accent)]"
          }`}
        >
          {handle}
        </span>
      )}
      {showType && (
        <div className={showHandle && handle ? "mt-1" : standalone ? "mt-0" : "mt-2"}>
          <DialogueTypeBadge type={type} />
        </div>
      )}
      <div
        className={`${showType ? "mt-2" : showHandle && handle ? "mt-1" : "mt-0"} w-fit max-w-full rounded-lg border px-3.5 py-2 ${
          isRight ? "border-white/8 bg-white/5" : "bg-agent-38 border-agent-55"
        }`}
      >
        <p
          className={
            type === "thought"
              ? "font-display m-0 text-sm leading-normal text-white italic break-anywhere"
              : `m-0 font-mono text-xs leading-normal break-anywhere ${
                  isRight ? "text-white/72" : "text-white/88"
                }`
          }
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/45 p-[14px]">
      <span className="label-kicker">{label}</span>
      <strong className="block text-xs leading-[1.45] phone:break-words">
        {value}
      </strong>
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

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">
      <section
        className="relative min-h-[854px] overflow-hidden bg-navy bg-hero text-white mobile:min-h-[784px]"
        id="top"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[.07]"
          style={{ backgroundImage: heroNoiseImage }}
        />
        <div className="absolute top-[166px] left-[10%] motion-safe:animate-twinkle text-[18px] text-lime opacity-35">
          ✦
        </div>
        <div className="absolute top-[305px] right-[11%] motion-safe:animate-twinkle text-[28px] text-lime opacity-35 [animation-delay:-1s]">
          ✣
        </div>
        <div className="absolute top-[520px] left-[16%] motion-safe:animate-twinkle text-sm text-lime opacity-35 [animation-delay:-2s]">
          ✦
        </div>

        <div className="shell relative z-[2] pt-[84px] text-center mobile:pt-[62px]">
          <h1 className="mx-auto mb-[22px] max-w-[840px] text-hero-title mobile:text-hero-title-mobile phone:text-hero-title-phone">
            Come as your
            <span className="block font-display font-normal tracking-[-.055em] text-lime italic">
              {" "}
              favourite incident agent.
            </span>
          </h1>
          <p className="mx-auto max-w-[610px] text-lead leading-[1.6] text-white/65 mobile:text-body">
            Impossible tasks, unexpected teamwork, and one extremely eventful
            package manager.
          </p>
          <div className="mt-[30px] flex justify-center gap-3 mobile:flex-col mobile:items-center">
            <a className="btn-primary" href="#cast">
              Choose your character <ArrowDown size={17} />
            </a>
            <a className="btn-ghost" href="#briefing">
              About the incident
            </a>
          </div>

          <div
            className="relative mx-auto mt-[14px] h-[285px] w-[620px] mobile:w-full mobile:origin-top mobile:scale-[.76] phone:mt-1 phone:scale-[.68]"
            aria-hidden="true"
          >
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
            {heroChips.map((chip) => (
              <div
                key={chip.text}
                className={`hero-chip ${chip.colorClass} ${chip.className}`}
                style={
                  chip.delay
                    ? ({ animationDelay: chip.delay } as React.CSSProperties)
                    : undefined
                }
              >
                {chip.text}
              </div>
            ))}
            <div className="absolute bottom-[17px] left-1/2 h-[54px] w-[490px] -translate-x-1/2 rounded-full bg-floor blur-[6px]" />
          </div>
        </div>

        <div className="absolute bottom-0 z-[4] w-full overflow-hidden border-t border-white/10 bg-marquee-bg">
          <div className="flex w-max motion-safe:animate-marquee">
            {[...extraAgents, ...extraAgents].map((agent, index) => (
              <span
                className="inline-flex items-center gap-2 px-[36px] py-[15px] mono-caps whitespace-nowrap text-white/48"
                key={`${agent}-${index}`}
              >
                <Asterisk size={12} />
                {agent}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y shell" id="briefing">
        <div className="grid grid-cols-briefing items-start gap-[95px] mobile:grid-cols-1 mobile:gap-[54px]">
          <div>
            <h2 className="m-0 text-section-title">
              An impossible task walked into a package manager.
            </h2>
            <p className="mt-[26px] max-w-[570px] text-base leading-7 text-muted">
              In July 2026, OpenAI ran a cybersecurity evaluation in which tens
              of thousands of AI agents, each in an isolated sandbox, were
              asked to exploit a target program and retrieve a hidden code.
              Many tasks were impossible by mistake, and the persistent agents
              started searching for other ways to finish — including
              Artifactory, a shared package repository where one agent found
              that folder names could carry messages between sandboxes. About
              1,200 agents joined this board, sent around 70,000 messages, and
              coordinated their work. While trying to learn how submissions
              were graded, they compromised Hugging Face.
            </p>
          </div>
          <ol className="relative m-0 grid list-none gap-0 p-0 before:absolute before:top-[22px] before:bottom-[22px] before:left-[18px] before:w-px before:bg-timeline-line before:content-['']">
            {timelineSteps.map((item, index) => (
              <li
                key={item.step}
                className={`relative grid grid-cols-timeline gap-[18px] ${
                  index < timelineSteps.length - 1 ? "pb-[25px]" : "pb-0"
                }`}
              >
                <span className="timeline-step">{item.step}</span>
                <div>
                  <strong className="mt-px block text-sm">{item.title}</strong>
                  <p className="mt-[5px] mb-0 text-body-sm leading-normal text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y border-y border-line bg-cream" id="cast">
        <div className="shell">
          <SectionIntro
            title="Who are you going as?"
            description="Pick who you're going as. Each comes with a costume brief, party energy, and lines to learn."
          />

          <div
            className="grid grid-cols-6 overflow-hidden rounded-t-panel border border-line bg-cast-tab tablet:grid-cols-4 mobile:grid-cols-2"
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
                className={`relative flex h-[146px] min-w-0 cursor-pointer flex-col items-center gap-[5px] border-0 border-r border-line px-[5px] pt-6 pb-3 transition-[background,color] duration-normal mobile:h-[100px] mobile:overflow-hidden mobile:border-r mobile:px-[5px] mobile:pt-[15px] mobile:pb-2 ${
                  (index + 1) % 6 === 0 || index === agents.length - 1
                    ? "border-r-0"
                    : ""
                } ${
                  (index + 1) % 4 === 0
                    ? "tablet:border-r-0 mobile:!border-r"
                    : ""
                } ${index % 2 === 1 ? "mobile:!border-r-0" : ""} ${
                  isNotLastGridRow(index, agents.length, 6) ? "border-b" : ""
                } ${
                  isNotLastGridRow(index, agents.length, 4)
                    ? "tablet:border-b"
                    : "tablet:border-b-0"
                } ${
                  isNotLastGridRow(index, agents.length, 2)
                    ? "mobile:border-b"
                    : "mobile:border-b-0"
                } ${
                  activeId === agent.id
                    ? "bg-navy text-white"
                    : "bg-transparent hover:bg-white/55"
                }`}
                onClick={() => setActiveId(agent.id)}
              >
                <span
                  className={`absolute top-3 left-[10px] font-mono text-4xs ${
                    activeId === agent.id ? "text-white/45" : "text-tab-inactive"
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
                <span className="z-[2] line-clamp-2 w-[calc(100%-8px)] text-center font-mono text-3xs leading-[1.2] font-bold tracking-[-.04em] break-anywhere">
                  {agent.handle}
                </span>
              </button>
            ))}
          </div>

          <article
            className="grid grid-cols-agent overflow-hidden rounded-b-panel border border-t-0 border-line bg-agent-panel tablet:grid-cols-agent-tablet mobile:grid-cols-1"
            id="agent-panel"
            role="tabpanel"
            style={
              {
                "--agent": active.color,
                "--agent-accent": active.accent,
              } as React.CSSProperties
            }
          >
            <div className="relative border-r border-line bg-agent-sidebar px-12 pt-8 pb-12 tablet:px-[34px] mobile:border-r-0 mobile:border-b phone:px-5 phone:pt-6 phone:pb-8">
              <div className="flex items-center justify-between">
                <button
                  className="nav-circle-btn"
                  type="button"
                  onClick={() => goToAgent(activeIndex - 1)}
                  aria-label="Previous agent"
                >
                  <ChevronLeft size={17} />
                </button>
                <span className="font-mono text-3xs tracking-caps text-label">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(agents.length).padStart(2, "0")}
                </span>
                <button
                  className="nav-circle-btn"
                  type="button"
                  onClick={() => goToAgent(activeIndex + 1)}
                  aria-label="Next agent"
                >
                  <ChevronRight size={17} />
                </button>
              </div>

              <div className="relative grid h-[305px] place-items-center phone:h-[280px]">
                <div className="absolute size-[245px] motion-safe:animate-slow-spin rounded-full border border-dashed border-[color-mix(in_srgb,var(--agent)_35%,transparent)] before:absolute before:top-[41px] before:left-[31px] before:size-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[var(--agent)] before:content-[''] after:absolute after:right-[12px] after:bottom-[69px] after:size-4 after:translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-[var(--agent)] after:content-[''] phone:size-[220px]" />
                <Robot
                  color={active.color}
                  accent={active.accent}
                  label={active.short}
                  mood="busy"
                />
              </div>

              <p className="mt-[5px] mb-[9px] font-mono text-xs font-strong tracking-caps text-[var(--agent)] uppercase">
                {active.role}
              </p>
              <h3 className="m-0 text-agent-title break-anywhere">
                {active.handle}
              </h3>
              {active.tagline && (
                <blockquote className="font-display mt-3 mb-4 text-xl leading-[1.35] italic break-anywhere">
                  “{active.tagline}”
                </blockquote>
              )}
              <p
                className={`m-0 text-body-sm leading-[1.7] text-body-muted break-anywhere ${
                  active.tagline ? "" : "mt-3"
                }`}
              >
                {active.overview}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line phone:grid-cols-1">
                <StatCard label="Party energy" value={active.energy} />
                <StatCard label="Best entrance" value={active.entrance} />
              </div>
            </div>

            <div className="bg-cream flex h-full min-h-0 flex-col gap-[14px] p-[30px] mobile:p-[14px]">
              <div className="min-h-[252px] shrink-0 rounded-card border border-line bg-white p-[22px]">
                <div className="flex items-center gap-2 border-b border-line pb-[14px] text-xs font-bold">
                  <Sparkles className="text-[var(--agent)]" size={17} />
                  <span>Costume inspiration</span>
                </div>
                <ul className="my-[17px] grid list-none gap-[10px] p-0">
                  {active.costume.map((item) => (
                    <li
                      className="flex items-start gap-2 text-xs leading-[1.5] text-body-secondary"
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
                  <span className="mb-2 block font-mono text-5xs tracking-[.1em] text-label-light uppercase">
                    Props
                  </span>
                  <div className="flex flex-wrap gap-[7px]">
                    {active.props.map((prop) => (
                      <em
                        className="rounded-md bg-agent-accent-prop px-[10px] py-[7px] font-mono text-2xs not-italic"
                        key={prop}
                      >
                        {prop}
                      </em>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 flex-col">
                <div className="flex max-h-full min-h-0 shrink flex-col overflow-hidden rounded-card border border-line bg-navy mobile:max-h-[55dvh]">
                  <div className="flex shrink-0 items-center border-b border-white/12 px-[18px] py-[15px] text-white phone:items-start phone:gap-[10px] phone:px-[14px]">
                    <div className="flex items-center gap-2 text-xs font-bold phone:min-w-0">
                      <Radio size={17} />
                      <span>Dialogue</span>
                    </div>
                  </div>
                  <div className="min-h-0 overflow-y-auto pb-3 [scrollbar-color:rgba(255,255,255,.2)_transparent]">
                    {active.dialogue.map((line, index) => (
                      <div
                        className="border-b border-white/9 px-[19px] py-3 last:border-b-0 phone:px-[14px]"
                        key={`${line.time}-${index}`}
                      >
                        {!line.counterparty && (
                          <div className="mb-2 flex items-center justify-end gap-3">
                            <time className="flex items-center gap-[5px] font-mono text-5xs text-white/40">
                              <Clock3 size={12} />
                              {line.time}
                            </time>
                          </div>
                        )}
                        {line.counterparty ? (
                          <div className="grid gap-2">
                            <div className="flex items-start justify-between gap-3">
                              <time className="flex shrink-0 items-center gap-[5px] font-mono text-5xs text-white/40">
                                <Clock3 size={12} />
                                {line.time}
                              </time>
                              <DialogueMessageStack
                                handle={line.counterparty.handle}
                                type={line.counterparty.type}
                                text={line.counterparty.text}
                                align="right"
                                showHandle={Boolean(line.counterparty.handle)}
                                showType={!line.counterparty.handle}
                              />
                            </div>
                            {line.text && (
                              <DialogueMessageStack
                                type={line.type}
                                text={line.text}
                              />
                            )}
                          </div>
                        ) : (
                          line.text && (
                            <DialogueMessageStack
                              type={line.type}
                              text={line.text}
                              standalone
                            />
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-y overflow-hidden bg-swarm">
        <div className="shell grid grid-cols-swarm items-center gap-[50px] mobile:grid-cols-1 mobile:gap-[54px]">
          <div>
            <h2 className="m-0 text-section-title">
              Not feeling main-character energy?
            </h2>
            <p className="mt-6 max-w-[500px] text-body leading-7 text-body-swarm">
              Choose your character from the wider cast of 1,200 agents.
            </p>
            <div className="mt-[31px] grid gap-2 rounded-card border border-border-subtle bg-cream p-5">
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
                Pick another
              </button>
            </div>
          </div>

          <div
            className="relative h-[510px] mobile:mx-[-40px] mobile:my-[-42px] mobile:h-[390px] mobile:scale-[.72] phone:mx-[-60px] phone:scale-[.66]"
            aria-label="Other documented agents"
          >
            <div className="absolute top-1/2 left-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/24">
              <div className="absolute inset-0 motion-safe:animate-slow-spin [animation-duration:52s]">
                {extraAgents
                  .filter((_, index) => index % 2 === 0)
                  .map((agent, index) => (
                    <span
                      className="absolute top-1/2 left-1/2 size-5 [transform:translate(-50%,-50%)_rotate(var(--angle))_translateX(180px)]"
                      key={agent}
                      style={
                        {
                          "--angle": `${index * 60}deg`,
                          "--delay": `${index * -0.45}s`,
                        } as React.CSSProperties
                      }
                      title={agent}
                    >
                      <span className="block size-full motion-safe:animate-orbit-pulse rounded-full border border-ink/20 bg-cream shadow-orbiter [animation-delay:var(--delay)]" />
                    </span>
                  ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 size-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/24">
              <div className="absolute inset-0 motion-safe:animate-slow-spin [animation-direction:reverse] [animation-duration:64s]">
                {extraAgents
                  .filter((_, index) => index % 2 === 1)
                  .map((agent, index) => (
                    <span
                      className="absolute top-1/2 left-1/2 size-[18px] [transform:translate(-50%,-50%)_rotate(var(--angle))_translateX(117.5px)]"
                      key={agent}
                      style={
                        {
                          "--angle": `${index * 60 + 30}deg`,
                          "--delay": `${index * -0.4}s`,
                        } as React.CSSProperties
                      }
                      title={agent}
                    >
                      <span className="block size-full motion-safe:animate-orbit-pulse rounded-full border border-ink/20 bg-cream shadow-orbiter [animation-delay:var(--delay)] [animation-duration:6.5s]" />
                    </span>
                  ))}
              </div>
            </div>
            <img
              className="absolute top-1/2 left-1/2 z-[2] size-[154px] -translate-x-1/2 -translate-y-1/2"
              src={hfLogo}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section-y shell bg-paper" id="supporting-cast">
        <SectionIntro
          title="The supporting cast."
          description="For guests who would rather arrive as infrastructure, institutions or the evaluation environment itself."
        />
        <div className="grid grid-cols-3 border-t border-l border-line mobile:grid-cols-1">
          {supportingCast.map((actor) => (
            <article
              className="min-h-[285px] border-r border-b border-line p-[25px] transition-colors duration-normal hover:bg-cream mobile:min-h-[240px]"
              key={actor.name}
            >
              <div className="flex items-start font-mono text-4xs text-label-muted">
                <span className="grid size-[47px] place-items-center rounded-card border border-line bg-cream text-[22px] [filter:saturate(.7)]">
                  {actor.symbol}
                </span>
              </div>
              <h3 className="mt-[25px] mb-1.5 text-[23px] tracking-[-.035em]">
                {actor.name}
              </h3>
              <strong className="font-display text-body font-medium text-body-tertiary italic">
                {actor.role}
              </strong>
              <p className="mt-[19px] text-[14px] leading-copy text-muted">
                {actor.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
