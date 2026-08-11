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

      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
        ZoonoIntel highlights mammal species whose ecological and biological traits 
        resemble those of known virus reservoirs. These species score highly on the 
        Sentinel Score, a trait‑based signal of reservoir potential, not a prediction 
        of danger or spillover.
      </p>

      {/* Species Cards */}
      <section style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

        {/* Red Fox */}
        <div className="species-card">
          <h2>Red Fox (<i>Vulpes vulpes</i>)</h2>
          <img 
            src="/images/red_fox.jpg" 
            alt="Red Fox"
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Red foxes are among the most widely distributed carnivores on Earth, thriving in
            environments ranging from dense forests and tundra to farmland, suburbs, and
            major cities. Their omnivorous diet, high behavioral flexibility, and ability to exploit
            human‑modified landscapes make them remarkably successful generalists. These
            traits contribute to a reservoir‑like ecological profile, as species with broad niches
            often interact with diverse wildlife and environmental sources. Fun fact: Red
            foxes use a unique “pounce” technique to hunt, leaping high into the air and
            diving headfirst, and they’re more accurate when facing north due to a
            mysterious magnetic alignment behavior.
          </p>
        </div>

        {/* Brown Bear */}
        <div className="species-card">
          <h2>Brown Bear (<i>Ursus arctos</i>)</h2>
          <img 
            src="/images/brown_bear.jpg" 
            alt="Brown Bear"
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Brown bears are powerful omnivores with enormous home ranges and complex
            seasonal behaviors. They occupy habitats from alpine meadows to coastal forests
            and can shift diets dramatically depending on food availability: berries, roots,
            fish, insects, and even carrion. Their long lifespans, ecological versatility, and
            extensive movement patterns create many opportunities for environmental
            interactions, which contribute to elevated Sentinel Scores. Fun fact: Brown bears
            can smell food from more than 18 miles (29 km) away, making their sense of smell
            one of the strongest of any land mammal.
          </p>
        </div>

        {/* Leopard */}
        <div className="species-card">
          <h2>Leopard (<i>Panthera pardus</i>)</h2>
          <img 
            src="/images/leopard.jpg" 
            alt="Leopard"
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Leopards are stealthy, adaptable predators capable of living in rainforests,
            savannas, mountains, and even near villages and cities. Their solitary nature, wide
            distribution across Africa and Asia, and ability to hunt over 90 different prey
            species highlight their ecological flexibility. This versatility mirrors patterns seen
            in known reservoir species, which often thrive across varied environments. Fun
            fact: Leopards are incredibly strong climbers, they can haul prey heavier than
            themselves up trees to avoid scavengers.
          </p>
        </div>

        {/* Grey Wolf */}
        <div className="species-card">
          <h2>Grey Wolf (<i>Canis lupus</i>)</h2>
          <img 
            src="/images/grey_wolf.jpg" 
            alt="Grey Wolf"
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Grey wolves are highly social carnivores that form complex pack structures and
            travel long distances across forests, tundra, grasslands, and mountains. Their
            cooperative hunting, territorial behavior, and adaptability to harsh climates make
            them one of the most ecologically influential mammals in the Northern
            Hemisphere. Wolves’ mobility and interactions with diverse prey species
            contribute to reservoir‑like trait patterns. Fun fact: Wolves can communicate
            using over a dozen vocalizations, including howls that can travel up to 10 miles (16
            km) across open terrain.
          </p>
        </div>

        {/* Coyote */}
        <div className="species-card">
          <h2>Coyote (<i>Canis latrans</i>)</h2>
          <img 
            src="/images/coyote.jpg" 
            alt="Coyote"
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />
          <p style={{ lineHeight: "1.6" }}>
            Coyotes are exceptional survivors, thriving in deserts, prairies, forests, and
            increasingly in suburban and urban environments. Their omnivorous diet, rapid
            range expansion, and ability to adjust behavior in response to human activity
            make them one of North America’s most adaptable mammals. These traits align
            closely with species known to exhibit reservoir‑like ecological profiles. Fun fact:
            Coyotes can run up to 40 mph (64 km/h), making them faster than most domestic
            dogs.
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
