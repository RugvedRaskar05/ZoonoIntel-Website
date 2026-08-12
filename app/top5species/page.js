//redeploy fix
export default function FiguresPage() {
  return (
    <main
      style={{
        padding: "40px",
        color: "white",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Top 5 Highest‑Scoring Species
      </h1>

      <p style={{
        fontSize: "18px",
        lineHeight: "1.6",
        marginBottom: "40px",
        maxWidth: "600px"
      }}>
        ZoonoIntel highlights mammal species whose ecological and biological traits 
        resemble known virus reservoirs. These species score highly on the 
        Sentinel Score, a trait‑based signal of reservoir potential, not a prediction 
        of danger or spillover.
      </p>

      {/* Species Cards */}
      <section style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

        {/* Red Fox */}
        <div className="species-card" style={{ maxWidth: "600px" }}>
          <h2>Red Fox (<i>Vulpes vulpes</i>)</h2>
          <img 
            src="/images/red_fox.jpg" 
            alt="Red Fox"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Red foxes are among the most widely distributed carnivores on Earth, thriving in
            environments ranging from dense forests and tundra to farmland, suburbs, and
            major cities. Their omnivorous diet, high behavioral flexibility, and ability to exploit
            human‑modified landscapes make them remarkably successful generalists. Fun fact:
            Red foxes use a unique pounce technique to hunt, leaping high into the air and
            diving headfirst, and they are more accurate when facing north due to a magnetic
            alignment behavior.
          </p>
        </div>

        {/* Brown Bear */}
        <div className="species-card" style={{ maxWidth: "600px" }}>
          <h2>Brown Bear (<i>Ursus arctos</i>)</h2>
          <img 
            src="/images/brown_bear.jpg" 
            alt="Brown Bear"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Brown bears are powerful omnivores with enormous home ranges and complex
            seasonal behaviors. They occupy habitats from alpine meadows to coastal forests
            and can shift diets dramatically depending on food availability. Fun fact: Brown bears
            can smell food from more than 18 miles away, making their sense of smell one of the
            strongest of any land mammal.
          </p>
        </div>

        {/* Leopard */}
        <div className="species-card" style={{ maxWidth: "600px" }}>
          <h2>Leopard (<i>Panthera pardus</i>)</h2>
          <img 
            src="/images/leopard.jpg" 
            alt="Leopard"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Leopards are stealthy, adaptable predators capable of living in rainforests,
            savannas, mountains, and even near villages and cities. Their solitary nature and
            ability to hunt over 90 prey species highlight their ecological flexibility. Fun fact:
            Leopards can haul prey heavier than themselves up trees to avoid scavengers.
          </p>
        </div>

        {/* Grey Wolf */}
        <div className="species-card" style={{ maxWidth: "600px" }}>
          <h2>Grey Wolf (<i>Canis lupus</i>)</h2>
          <img 
            src="/images/grey_wolf.jpg" 
            alt="Grey Wolf"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Grey wolves are highly social carnivores that form complex pack structures and
            travel long distances across forests, tundra, grasslands, and mountains. Fun fact:
            Wolves can communicate using over a dozen vocalizations, including howls that can
            travel up to 10 miles across open terrain.
          </p>
        </div>

        {/* Coyote */}
        <div className="species-card" style={{ maxWidth: "600px" }}>
          <h2>Coyote (<i>Canis latrans</i>)</h2>
          <img 
            src="/images/coyote.jpg" 
            alt="Coyote"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Coyotes are exceptional survivors, thriving in deserts, prairies, forests, and
            increasingly in suburban and urban environments. Fun fact: Coyotes can run up to
            40 mph, making them faster than most domestic dogs.
          </p>
        </div>

      </section>

      <hr style={{ margin: "50px 0", borderColor: "#555" }} />

      <p style={{
        fontSize: "18px",
        lineHeight: "1.6",
        maxWidth: "600px"
      }}>
        This section provides a snapshot of how ZoonoIntel interprets mammalian traits 
        to highlight species with reservoir‑like profiles. Additional species and 
        insights may be added as the project evolves.
      </p>
    </main>
  );
}
