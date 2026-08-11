export default function AboutPage() {
  return (
    <main
  style={{
    minHeight: "100vh",
    width: "100%",
    padding: "40px",
    boxSizing: "border-box",
    color: "white",
    maxWidth: "900px",
    margin: "0 auto"
  }}
>
      <h1>About ZoonoIntel</h1>
      <p>
        ZoonoIntel is built on a simple idea: the world can prepare for emerging infectious diseases long before they appear. Many viruses that eventually affect humans originate in wildlife, yet most mammal species have never been sampled or studied for the viruses they may carry. This leaves a major gap in global preparedness. We often do not know which animals might be important until after an outbreak has already begun. ZoonoIntel was created to help fill that gap by using artificial intelligence to highlight mammal species whose traits resemble those of known virus reservoirs.
  

Rather than predicting danger or forecasting outbreaks, ZoonoIntel focuses on traits. Every mammal species has ecological, biological, and environmental characteristics that shape how it interacts with the world. Some species are highly adaptable, living comfortably in forests, grasslands, cities, and everything in between. Others have wide geographic ranges, long lifespans, or diets that bring them into contact with many other animals. These kinds of traits are often shared by species known to host zoonotic viruses, which are pathogens that can jump from animals to humans. By examining these patterns, ZoonoIntel provides a surveillance priority signal. This signal helps identify species that may deserve closer scientific attention even if they have never been sampled before.
  

To build this system, ZoonoIntel integrates curated datasets from scientific literature and global mammal trait repositories. These datasets include information on species habitats, diets, reproductive strategies, geographic ranges, environmental tolerances, and more. A machine learning pipeline analyzes these traits and compares them to the profiles of animals already known to carry zoonotic pathogens. The result is the Sentinel Score. This score estimates how strongly a species traits align with those of known reservoirs. A high score does not mean a species is dangerous or likely to cause an outbreak. Instead, it signals that the species shares ecological patterns with animals that have historically been important in zoonotic research.
  

The goal of ZoonoIntel is to make complex ecological patterns intuitive and accessible. The platform includes interactive visualizations that allow users to explore species traits, compare reservoir potential tiers, and understand the ecological drivers behind the model predictions. Users can see how factors like habitat breadth, environmental conditions, or life history traits contribute to a species score. This helps researchers, students, and curious users learn how ecological science and machine learning can work together to support early stage surveillance.
  

Importantly, ZoonoIntel does not identify spillover hotspots, forecast outbreaks, or label species as threats. It does not replace field sampling, laboratory testing, or epidemiological research. Instead, it focuses on the trait based component of zoonotic preparedness. This means identifying species that look like reservoirs before they are studied. This approach can help guide future research by pointing scientists toward species that may be worth monitoring, especially in regions where surveillance resources are limited.
  

By combining accessible design with scientific grounding, ZoonoIntel shows how artificial intelligence can support proactive approaches to emerging infectious diseases. The platform encourages exploration, learning, and curiosity. It demonstrates how patterns in ecology can reveal meaningful insights about the natural world. As global change continues to reshape ecosystems and wildlife communities, tools like ZoonoIntel can help researchers stay one step ahead. The platform highlights species that may play important roles in the ecology of viruses long before those viruses are discovered.
  

ZoonoIntel is an evolving project, and future updates may include expanded datasets, additional species groups, and new visual tools. Its core mission remains the same. The goal is to make trait based reservoir science understandable, transparent, and useful for anyone interested in how wildlife and viruses intersect. By shining a light on species that resemble known reservoirs, ZoonoIntel aims to support a more informed, proactive, and scientifically grounded approach to zoonotic surveillance.
      </p>
    </main>
  );
}
