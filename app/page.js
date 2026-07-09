export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center", color: "white" }}>
      <img
        src="https://i.imgur.com/H6mWX4Z.png"
        alt="ZoonoIntel Logo"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "16px",
          boxShadow: "0 0 25px rgba(0, 174, 239, 0.55)",
          marginBottom: "25px",
        }}
      />
      <h1>ZoonoIntel</h1>
      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
        The AI-powered zoonotic spillover risk intelligence platform.
      </p>

      <a href="/app">Launch App</a>
    </main>
  );
}

