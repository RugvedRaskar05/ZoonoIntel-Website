export default function FiguresPage() {
  return (
    <main style={{ padding: "40px", color: "white", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Top 5 Highest‑Scoring Species
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
        ZoonoIntel highlights mammal species whose ecological and biological traits 
        resemble those of known virus reservoirs. These species score highly on the 
        Sentinel Score — a trait‑based signal of reservoir potential, not a prediction 
        of danger or spillover.
      </p>

      {/* Species Cards */}
      <section style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

        {/* Red Fox */}
        <div>
          <img 
            src="/public/red_fox.jpg" 
            alt="Red Fox" 
            style={{ width: "250px", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2>Red Fox (<i>Vulpes vulpes</i>)</h2>
          <p style={{ lineHeight: "1.6" }}>
            Red foxes are highly adaptable and thrive in forests, grasslands, suburbs, 
            and even urban environments. Their broad geographic range, omnivorous diet, 
            and ecological flexibility contribute to a trait profile similar to known 
            reservoirs.
          </p>
        </div>

        {/* Brown Bear */}
        <div>
          <img 
            src="/public/brown_bear.jpg" 
            alt="Brown Bear" 
            style={{ width: "250px", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2>Brown Bear (<i>Ursus arctos</i>)</h2>
          <p style={{ lineHeight: "1.6" }}>
            Brown bears occupy wide territories across North America, Europe, and Asia. 
            Their long lifespans, environmental tolerance, and complex ecological 
            interactions contribute to elevated reservoir‑potential signals.
          </p>
        </div>

        {/* Leopard */}
        <div>
          <img 
            src="/public/leopard.jpg" 
            alt="Leopard" 
            style={{ width: "250px", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2>Leopard (<i>Panthera pardus</i>)</h2>
          <p style={{ lineHeight: "1.6" }}>
            Leopards are highly adaptable large carnivores capable of living in forests, 
            savannas, mountains, and even near human settlements. Their ecological 
            versatility and wide distribution contribute to high Sentinel Scores.
          </p>
        </div>

        {/* Grey Wolf */}
        <div>
          <img 
            src="/public/grey_wolf.jpg" 
            alt="Grey Wolf" 
            style={{ width: "250px", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2>Grey Wolf (<i>Canis lupus</i>)</h2>
          <p style={{ lineHeight: "1.6" }}>
            Grey wolves have extensive ranges across the Northern Hemisphere and display 
            strong environmental tolerance. Their social structure, mobility, and 
            ecological interactions create trait patterns similar to known reservoirs.
          </p>
        </div>

        {/* Coyote */}
        <div>
          <img 
            src="/public/coyote.jpg" 
            alt="Coyote" 
            style={{ width: "250px", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2>Coyote (<i>Canis latrans</i>)</h2>
          <p style={{ lineHeight: "1.6" }}>
            Coyotes are one of the most ecologically flexible mammals in North America. 
            They thrive in deserts, forests, grasslands, and cities. Their rapid 
            expansion into human‑dominated landscapes and omnivorous diet contribute to 
            reservoir‑like trait profiles.
          </p>
        </div>

      </section>

      <hr style={{ margin: "50px 0", borderColor: "#555" }} />

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        This section provides a snapshot of how ZoonoIntel interprets mammalian traits 
        to highlight species with reservoir‑like profiles. Additional species and 
        insights may be added as the project evolves.
      </p>
    </main>
  );
}
