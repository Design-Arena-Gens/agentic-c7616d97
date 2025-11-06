import Link from "next/link";

export default function Page() {
  return (
    <main className="grid" role="main">
      <section className="card half" aria-labelledby="kpi-1">
        <h3 id="kpi-1">Active Sessions</h3>
        <div className="value">1,284</div>
        <p className="desc">+8.4% vs last week</p>
      </section>
      <section className="card half" aria-labelledby="kpi-2">
        <h3 id="kpi-2">Conversion Rate</h3>
        <div className="value">3.1%</div>
        <p className="desc">Stable week-over-week</p>
      </section>
      <section className="card third" aria-labelledby="kpi-3">
        <h3 id="kpi-3">NPS</h3>
        <div className="value">62</div>
        <p className="desc">Great customer sentiment</p>
      </section>
      <section className="card third" aria-labelledby="kpi-4">
        <h3 id="kpi-4">MRR</h3>
        <div className="value">$84,230</div>
        <p className="desc">+3.2% MoM</p>
      </section>
      <section className="card third" aria-labelledby="kpi-5">
        <h3 id="kpi-5">Actions</h3>
        <p className="desc">Explore the app:</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="button" href="/about">Learn More</Link>
          <a className="button" href="/api/health">Ping API</a>
        </div>
      </section>
    </main>
  );
}
