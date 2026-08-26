// app/page.js
export default function Home() {
  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://i.imgur.com/H6mWX4Z.png"
          alt="ZoonoIntel Logo"
          className="hero-logo"
        />
        <h1 className="hero-title">Nature never stops, so why should we?</h1>
        <p className="hero-tagline">
          Preparing for spillover is key.
        </p>
            
        <a href="/app" className="launch-button">
          Launch App
        </a>
      </section>

      {/* Content Sections */}
      <section className="content-section">
        <h2>What is ZoonoIntel?</h2>
        <p>
         ZoonoIntel uses AI to identify mammal species that look like known virus
         reservoirs based on their traits and environments. It visualizes a
         Sentinel Score that highlights species worth monitoring, without predicting spillover
         events or danger.
        </p>
      </section>

      <section className="content-section">
        <h2>Why does ZoonoIntel matter?</h2>
        <p>
         Most new human diseases start in animals, but scientists can only monitor a tiny fraction of the world’s 5,000+ mammal species.
         ZoonoIntel helps by making that huge search easier. It highlights species that might deserve a closer look,
         giving researchers and students a simple way to explore the biology behind spillover risk.
        </p>
      </section>

      <section className="content-section">
        <h2>How does ZoonoIntel work?</h2>
        <p>
         ZoonoIntel looks at basic information about each mammal, like body size, range, and how often it overlaps with people,
         and uses machine learning to find patterns shared by known virus‑carrying species.
         From those patterns, it creates a Sentinel Score and clear visual explanations that show why a species ranked the way it did.
        </p>
      </section>

      <section className="content-section">
        <h2>What ZoonoIntel does not do</h2>
        <p>
         ZoonoIntel does not predict outbreaks, label species as dangerous, or say where spillover will happen.
         It’s simply a tool to help guide early attention — a starting point for learning and exploration,
         not a replacement for field or lab research
        </p>
      </section>

      <section className="content-section">
        <h2>Try the App</h2>
        <p>
         Explore species, view Sentinel Scores, and see the top traits driving each prediction, all in a simple, interactive web app.
        </p>
      </section>

      <section className="content-section">
        <h2>ISEF Project Summary</h2>
        <p>
          ZoonoIntel was created as a research project to explore how AI can help
          identify mammal species that resemble known virus reservoirs. It brings
          together scientific data, machine‑learning methods, and interactive
          visualization in one platform.
        </p>
      </section>
    </main>
  );
}
