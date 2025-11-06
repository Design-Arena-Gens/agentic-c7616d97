export default function AboutPage() {
  return (
    <main className="grid" role="main">
      <section className="card" aria-labelledby="about-title">
        <h3 id="about-title">About</h3>
        <p className="desc">
          This is a minimal, production-ready Next.js dashboard starter.
          It includes a simple layout, accessible navigation, basic theming,
          and an API health endpoint for uptime checks.
        </p>
      </section>
    </main>
  );
}
