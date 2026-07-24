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
        <h1 className="hero-title">ZoonoIntel</h1>
        <p className="hero-tagline">
          The AI-powered zoonotic spillover risk intelligence platform.
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
        <h2>The Science Behind It</h2>
        <p>
          The platform combines ecological and environmental traits to identify
          mammal species that look like known virus reservoirs. It offers a Sentinel
          Score to guide surveillance attention — not a prediction of spillover or where
          outbreaks will occur.
        </p>
      </section>

      <section className="content-section">
        <h2>How the Model Works</h2>
        <p>
          ZoonoIntel uses machine learning to combine mammalian traits and ecological
          data, identifying species that look like known virus reservoirs. It generates a
          Sentinel Score and interactive visualizations to guide early‑stage surveillance,
          not to predict spillover events or hotspots.
        </p>
      </section>

      <section className="content-section">
        <h2>Drivers & Risk Factors</h2>
        <p>
          Key drivers include ecological traits, environmental conditions, and biological
          characteristics of mammal species. By highlighting these factors, ZoonoIntel
          helps users explore why some species may resemble known virus reservoirs
          and deserve closer monitoring.
        </p>
      </section>

      <section className="content-section">
        <h2>Why Spillover Prediction Matters</h2>
        <p>
          Early insight into which species resemble known virus reservoirs can help
            guide surveillance and preparedness. ZoonoIntel makes complex zoonotic‑risk
              patterns easier to explore and understand.
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


