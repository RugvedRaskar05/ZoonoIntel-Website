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
          ZoonoIntel is an AI-driven platform designed to estimate and visualize
          zoonotic spillover risk across mammalian species and regions. It
          combines ecological, epidemiological, and environmental signals to
          highlight where the next spillover event might emerge.
        </p>
      </section>

      <section className="content-section">
        <h2>The Science Behind It</h2>
        <p>
          The platform integrates host traits, pathogen characteristics,
          environmental drivers, and human–animal interfaces to approximate
          spillover risk. It is inspired by real-world zoonotic outbreaks and
          current research on emerging infectious diseases.
        </p>
      </section>

      <section className="content-section">
        <h2>How the Model Works</h2>
        <p>
          ZoonoIntel uses a machine learning pipeline that ingests curated
          datasets on mammalian hosts, known zoonoses, and ecological context.
          It then produces risk scores and visualizations that help users
          explore potential spillover hotspots.
        </p>
      </section>

      <section className="content-section">
        <h2>Drivers & Risk Factors</h2>
        <p>
          Key drivers include host diversity, contact rates, habitat
          disturbance, climate variables, and human encroachment. By surfacing
          these factors, ZoonoIntel helps users understand why certain species
          or regions may be more vulnerable.
        </p>
      </section>

      <section className="content-section">
        <h2>Why Spillover Prediction Matters</h2>
        <p>
          Early insight into spillover risk can inform surveillance, policy,
          and intervention strategies. ZoonoIntel aims to make complex
          zoonotic risk landscapes more intuitive and actionable.
        </p>
      </section>

      <section className="content-section">
        <h2>ISEF Project Summary</h2>
        <p>
          ZoonoIntel was developed as a research project to explore how AI can
          support zoonotic risk assessment. It combines scientific literature,
          data engineering, and model design into a single interactive
          platform.
        </p>
      </section>
    </main>
  );
}


