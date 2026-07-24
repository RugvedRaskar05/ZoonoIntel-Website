export default function AboutPage() {
  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>About ZoonoIntel</h1>
      <p>
        ZoonoIntel uses AI to highlight mammal species that resemble known virus reservoirs based on their ecological, biological, and environmental traits. Rather than predicting danger or spillover events, the platform provides a surveillance‑priority signal — an early indicator of which species may deserve closer monitoring.

Many emerging infectious diseases originate in wildlife, yet most mammal species have never been sampled for viruses. Trait‑based modeling offers a way to fill this gap by identifying species that share characteristics with known zoonotic hosts. These characteristics include ecological flexibility, geographic range, life‑history patterns, and environmental conditions associated with viral richness.

ZoonoIntel integrates curated datasets from scientific literature and global mammal trait repositories. These data feed into a machine‑learning pipeline that estimates reservoir potential — how strongly a species’ traits align with those of animals known to carry zoonotic pathogens. The resulting Sentinel Score helps users explore species that may warrant early‑stage surveillance attention.

The platform is designed to make complex ecological patterns intuitive. Interactive visualizations allow users to examine species traits, compare reservoir‑potential tiers, and understand the ecological drivers behind the model’s predictions. ZoonoIntel does not forecast outbreaks or identify spillover hotspots. Instead, it focuses on the trait‑based component of zoonotic preparedness: identifying species that look like reservoirs before they are sampled.

By combining accessible design with scientific grounding, ZoonoIntel demonstrates how AI can support proactive approaches to zoonotic surveillance and inspire future research on emerging infectious diseases.
      </p>
    </main>
  );
}
