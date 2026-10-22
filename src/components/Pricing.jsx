import { Link } from "react-router-dom";

const cards = [
  { price: "₹0", lines: ["Free account", "opening"] },
  { price: "₹0", lines: ["Free equity delivery", "and direct mutual funds"] },
  { price: "₹20", lines: ["Intraday and", "F&O"] },
];

export default function Pricing() {
  return (
    <section className="container section-pad border-top-line">
      <div className="row align-items-center g-5">
        <div className="col-lg-5">
          <h2 className="section-title">Unbeatable pricing</h2>
          <p className="body-text mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" className="text-link">
            See pricing →
          </Link>
        </div>
        <div className="col-lg-7">
          <div className="row g-3 text-center">
            {cards.map((c, i) => (
              <div className="col-md-4" key={i}>
                <div className="price-card">
                  <div className="price-figure">{c.price}</div>
                  <p className="price-caption">
                    {c.lines[0]}
                    <br />
                    {c.lines[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
