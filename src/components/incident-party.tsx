import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Asterisk,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Network,
  Radio,
  RotateCcw,
  Sparkles,
  Users,
} from "lucide-react";
import {
  agents,
  extraAgents,
  incidentStats,
  supportingCast,
  type Dialogue,
} from "@/data/agents";
import { Robot } from "@/components/robot";

const dialogueLabels: Record<Dialogue["type"], string> = {
  thought: "Reasoning excerpt",
  board: "Board message",
  exchange: "Exchange",
  action: "Documented action",
};

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
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Incident Party home">
            <span className="brand-mark">
              <span />
              <span />
            </span>
            <span>INCIDENT PARTY</span>
          </a>
          <div className="nav-links">
            <a href="#cast">Choose a character</a>
            <a href="#supporting-cast">Supporting cast</a>
            <a href="#sources">The receipts</a>
          </div>
          <a className="nav-pill" href="#cast">
            Find your agent <ArrowRight size={15} />
          </a>
        </nav>

        <div className="hero-noise" />
        <div className="hero-spark hero-spark-one">✦</div>
        <div className="hero-spark hero-spark-two">✣</div>
        <div className="hero-spark hero-spark-three">✦</div>

        <div className="hero-inner shell">
          <div className="eyebrow">
            <span className="live-dot" />
            Dress code: emergent coordination
          </div>
          <h1>
            Come as your
            <span> favourite incident agent.</span>
          </h1>
          <p className="hero-copy">
            Ten documented agents. Seventy thousand messages. One package
            manager that accidentally became the group chat.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#cast">
              Choose your character <ArrowDown size={17} />
            </a>
            <a className="button button-ghost" href="#briefing">
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

      <section className="briefing section shell" id="briefing">
        <div className="section-kicker">
          <span>01</span>
          The shortest possible incident briefing
        </div>
        <div className="briefing-grid">
          <div>
            <h2>An impossible task walked into a package manager.</h2>
            <p>
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
        <div className="stats-row">
          {incidentStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="context-note">
          <BookOpen size={15} />
          Party personas are playful interpretations. Events and quoted
          excerpts come from the published METR/Redwood investigation and
          OpenAI technical report.
        </p>
      </section>

      <section className="cast-section section" id="cast">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>02</span>
                Pick your main character
              </div>
              <h2>Ten agents enter the cache.</h2>
            </div>
            <p>
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
            <div className="agent-profile">
              <div className="agent-navigation">
                <button
                  type="button"
                  onClick={() => goToAgent(activeIndex - 1)}
                  aria-label="Previous agent"
                >
                  <ChevronLeft size={17} />
                </button>
                <span>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(agents.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => goToAgent(activeIndex + 1)}
                  aria-label="Next agent"
                >
                  <ChevronRight size={17} />
                </button>
              </div>

              <div className="profile-robot-wrap">
                <div className="profile-halo" />
                <Robot
                  color={active.color}
                  accent={active.accent}
                  label={active.short}
                  mood="busy"
                />
                <span className="profile-model">{active.model}</span>
              </div>

              <p className="profile-role">{active.role}</p>
              <h3>{active.handle}</h3>
              <blockquote>“{active.tagline}”</blockquote>
              <p className="profile-overview">{active.overview}</p>

              <div className="profile-meta">
                <div>
                  <span>Party energy</span>
                  <strong>{active.energy}</strong>
                </div>
                <div>
                  <span>Best entrance</span>
                  <strong>{active.entrance}</strong>
                </div>
              </div>
            </div>

            <div className="agent-guide">
              <div className="guide-card costume-card">
                <div className="card-title">
                  <Sparkles size={17} />
                  <span>Costume brief</span>
                </div>
                <ul>
                  {active.costume.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="props">
                  <span>Props</span>
                  <div>
                    {active.props.map((prop) => (
                      <em key={prop}>{prop}</em>
                    ))}
                  </div>
                </div>
              </div>

              <div className="guide-card connections-card">
                <div className="card-title">
                  <Network size={17} />
                  <span>Who to find at the party</span>
                </div>
                <div className="connection-map">
                  <div className="connection-center">{active.short}</div>
                  {active.connections.map((connection, index) => (
                    <div className={`connection c-${index + 1}`} key={connection}>
                      <span />
                      {connection}
                    </div>
                  ))}
                </div>
              </div>

              <div className="dialogue-card">
                <div className="dialogue-header">
                  <div>
                    <Radio size={17} />
                    <span>Published dialogue &amp; actions</span>
                  </div>
                  <span>{active.dialogue.length} excerpts</span>
                </div>
                <div className="dialogue-feed">
                  {active.dialogue.map((line, index) => (
                    <div className={`dialogue dialogue-${line.type}`} key={`${line.time}-${index}`}>
                      <div className="dialogue-meta">
                        <span>{dialogueLabels[line.type]}</span>
                        <time>
                          <Clock3 size={12} />
                          {line.time}
                        </time>
                      </div>
                      {line.with && (
                        <div className="dialogue-with">
                          with <strong>{line.with}</strong>
                        </div>
                      )}
                      <p>{line.text}</p>
                    </div>
                  ))}
                </div>
                <p className="excerpt-note">
                  Ellipses and bracketed text preserve the reports’ redactions
                  and paraphrases. “Action” entries are factual summaries, not
                  invented quotes.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="swarm-section section">
        <div className="shell swarm-grid">
          <div className="swarm-copy">
            <div className="section-kicker">
              <span>03</span>
              The rest of the swarm
            </div>
            <h2>Not feeling main-character energy?</h2>
            <p>
              Go as one of the hundreds of specialists orbiting the central
              story. The swarm picker folds the wider agent cast into the
              party without pretending all 1,200 agents had neat biographies.
            </p>
            <div className="picker">
              <span>Your extra-agent assignment</span>
              <strong>{extraAgents[extraIndex]}</strong>
              <button
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

      <section className="support-section section shell" id="supporting-cast">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span>04</span>
              Non-agent roles
            </div>
            <h2>The supporting cast.</h2>
          </div>
          <p>
            For guests who would rather arrive as infrastructure, institutions
            or one highly consequential file format.
          </p>
        </div>
        <div className="support-grid">
          {supportingCast.map((actor, index) => (
            <article className="support-card" key={actor.name}>
              <div className="support-top">
                <span className="support-symbol">{actor.symbol}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{actor.name}</h3>
              <strong>{actor.role}</strong>
              <p>{actor.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing section" id="sources">
        <div className="shell closing-inner">
          <div>
            <div className="section-kicker light">
              <span>05</span>
              Read before you roleplay
            </div>
            <h2>Whimsy, with receipts.</h2>
            <p>
              This is a costume guide to a serious security and alignment
              incident. The jokes are ours; the quoted lines, names, numbers
              and sequence of events are sourced from the two public reports.
            </p>
          </div>
          <div className="source-links">
            <a
              href="https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>Independent investigation</small>
                METR + Redwood Research
              </span>
              <ExternalLink size={18} />
            </a>
            <a
              href="https://openai.com/index/hugging-face-incident-and-the-road-ahead/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>Technical incident report</small>
                OpenAI
              </span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <div className="footer shell">
          <a className="brand brand-light" href="#top">
            <span className="brand-mark">
              <span />
              <span />
            </span>
            <span>INCIDENT PARTY</span>
          </a>
          <p>No production systems were harmed in the making of this website.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>
    </main>
  );
}
