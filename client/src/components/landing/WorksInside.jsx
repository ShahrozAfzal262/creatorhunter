import { useState } from "react";
import Button from "../common/Button";

const ASSISTANTS = [
  {
    name: "ChatGPT",
    icon: "◎",
    terminal: "Codex CLI · terminal",
    commands: [
      'export CREATORHUNTER_API_KEY="YOUR_API_KEY"',
      "codex mcp add creatorhunter --url https://app.creatorhunter.io/api/mcp",
    ],
  },
  {
    name: "Claude",
    icon: "✳",
    terminal: "Claude Code · terminal",
    commands: [
      'export CREATORHUNTER_API_KEY="YOUR_API_KEY"',
      "claude mcp add creatorhunter --transport http https://app.creatorhunter.io/api/mcp",
    ],
  },
  {
    name: "Hermes",
    icon: "☿",
    terminal: "Hermes Agent · terminal",
    commands: [
      'export CREATORHUNTER_API_KEY="YOUR_API_KEY"',
      "hermes mcp add creatorhunter https://app.creatorhunter.io/api/mcp",
    ],
  },
];

const SKILL_COMMAND = "npx skills add creator-hunter/agent";

export default function WorksInside() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState("");
  const [copyError, setCopyError] = useState("");
  const activeAssistant = ASSISTANTS[activeIndex];

  async function copyCommand(value, key) {
    setCopied("");
    setCopyError("");
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
    } catch (error) {
      setCopyError("Copy unavailable. Please select and copy the command.");
    }
  }

  return (
    <section id="agents" className="works-inside" aria-labelledby="works-inside-title">
      <div className="wrap works-inside-layout">
        <div className="works-inside-copy">
          <h2 id="works-inside-title">Works inside</h2>
          <div className="works-logos" aria-label="ChatGPT, Claude and Hermes">
            {ASSISTANTS.map((assistant) => (
              <span className={`works-logo works-logo-${assistant.name.toLowerCase()}`} key={assistant.name}>
                {assistant.icon}
              </span>
            ))}
          </div>
          <p>Connect Creator Hunter to your agent once. Then just ask it to find creators, write to them and tell you who replied.</p>
          <Button to="/register">Get Creators</Button>
        </div>

        <div className="works-inside-demo">
          <div className="works-tabs" role="tablist" aria-label="Choose your AI assistant">
            {ASSISTANTS.map((assistant, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={`works-tab${activeIndex === index ? " active" : ""}`}
                key={assistant.name}
                onClick={() => {
                  setActiveIndex(index);
                  setCopied("");
                  setCopyError("");
                }}
              >
                <span aria-hidden="true">{assistant.icon}</span>{assistant.name}
              </button>
            ))}
          </div>

          <div className="works-terminal" role="tabpanel">
            <div className="works-terminal-bar">
              <span>{activeAssistant.terminal}</span>
              <button type="button" onClick={() => copyCommand(activeAssistant.commands.join("\n"), "terminal")}>
                {copied === "terminal" ? "Copied" : "Copy"}
              </button>
            </div>
            <pre>{activeAssistant.commands.map((command) => (
              <code key={command}><span>$</span> {command}{"\n"}</code>
            ))}</pre>
          </div>

          <div className="works-skill-card">
            <p>Or add the skill to any skills-compatible agent</p>
            <div>
              <code>{SKILL_COMMAND}</code>
              <button type="button" onClick={() => copyCommand(SKILL_COMMAND, "skill")}>
                {copied === "skill" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <p className="works-endpoint">MCP server <code>https://app.creatorhunter.io/api/mcp</code></p>
          {copyError && <p className="works-copy-error" role="status">{copyError}</p>}
        </div>
      </div>
    </section>
  );
}
