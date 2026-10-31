const FAQ = [
  ["What do I get access to exactly?", "Get access to a searchable creator database, weekly creator drops, and tools to research, organize, and contact creators."],
  ["How many creators are in there?", "Our database focuses on quality over inflated numbers, with creators across active niches and new profiles added regularly."],
  ["How does the outreach work?", "Connect your email, review AI-drafted personalized messages, and send outreach from your own inbox. Replies stay organized in your workspace."],
  ["Why don't you have 1M+ records?", "We prioritize active, relevant creators over scraped lists full of outdated or unreachable profiles."],
  ["What niches will I find?", "Discover creators across technology, education, lifestyle, fitness, beauty, gaming, and more."],
  ["Why agents for creator marketing?", "AI agents help with creator research and personalized outreach, so you can spend less time on repetitive work and more time building relationships."],
];

export default function Faq() {
  return (
    <section id="faq" className="faq-section">
      <div className="wrap faq-layout">
        <h2 className="faq-title">Frequently<br />Asked</h2>
        <div className="faq-list">
          {FAQ.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
