import { useEffect, useState } from "react";

const ROWS = [
  ["clairekgroves", "137,700 followers", "21.0%", "photo-1534528741775-53994a69daeb"],
  ["sherlock", "133,000 followers", "11.0%", "photo-1500648767791-00dcc994a43e"],
  ["berlin", "1,400,000 followers", "9.0%", "photo-1531123897727-8f129e1688ce"],
];

const ASSISTANTS = [
  {
    name: "ChatGPT",
    icon: "✳",
    prompt: "Find student creators on TikTok for my study app",
    results: "71 matches · Student · TikTok · United States",
    ending: "Want me to save all 71 to a list and write to the best ones?",
  },
  {
    name: "Claude",
    icon: "✳",
    prompt: "Write a personal email to a study creator",
    results: "Draft ready · Personalised · Creator outreach",
    ending: "Your email draft is ready to review before sending.",
  },
  {
    name: "Hermes",
    icon: "☿",
    prompt: "Find creators and follow up with them for my app",
    results: "AI agent ready · Research · Outreach · Follow-up",
    ending: "Your agent can prepare each message for your approval.",
  },
];

export default function ChatDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const assistant = ASSISTANTS[activeIndex];
  const [typedPrompt, setTypedPrompt] = useState("");
  const done = typedPrompt === assistant.prompt;

  useEffect(() => {
    let position = 0;
    setTypedPrompt("");
    const timer = setInterval(() => {
      position += 1;
      setTypedPrompt(assistant.prompt.slice(0, position));
      if (position >= assistant.prompt.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [assistant.prompt]);

  return (
    <div className={"chat" + (done ? " done" : "")} aria-label="Example creator search">
      <div className="demo-tabs" role="tablist" aria-label="AI assistant demos">
        {ASSISTANTS.map((item, index) => (
          <button
            className={"demo-tab" + (activeIndex === index ? " selected" : "")}
            id={`assistant-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="assistant-demo"
            key={item.name}
            onClick={() => setActiveIndex(index)}
          >
            <span className={"assistant-icon assistant-icon-" + item.name.toLowerCase()} aria-hidden="true">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>
      <div className="demo-content" id="assistant-demo" role="tabpanel" aria-labelledby={`assistant-tab-${activeIndex}`}>
        <div className="demo-heading">
          <span className={"assistant-heading-icon assistant-icon-" + assistant.name.toLowerCase()} aria-hidden="true">{assistant.icon}</span>
          <b>{assistant.name}</b>
        </div>
        <div className="bubble">{typedPrompt}{!done && <span className="caret" />}</div>
        <div className="res">{assistant.results}</div>
        <div className="demo-columns"><span>Creator</span><span>Engagement</span></div>
        {ROWS.map(([name, followers, engagement, photo], i) => (
          <div key={name} className="row" style={{ "--i": i }}>
            <img
              className="av"
              src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=96&h=96&q=80`}
              alt={`${name} profile`}
              loading="lazy"
            />
            <div className="creator-info"><div className="n">{name}</div><div className="m">{followers}</div></div>
            <span className="e">{engagement}</span>
            <span className="draft-label">Draft email</span>
          </div>
        ))}
        <div className="res tail">{assistant.ending}</div>
      </div>
    </div>
  );
}
