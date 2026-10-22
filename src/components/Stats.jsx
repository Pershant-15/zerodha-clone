import { Link } from "react-router-dom";
import { EcosystemIllustration, KiteConnectBanner } from "./Illustrations";

const numbers = [
  { value: "1.8+ crore", label: "Customers" },
  { value: "~ ₹9 lakh crores", label: "Equity investments" },
  { value: "15%", label: "Of daily retail exchange volumes" },
  { value: "30+", label: "Fintech startups backed" },
];

export default function Stats() {
  return (
    <section className="container pb-5">
      <div className="row text-center g-4 stat-row">
        {numbers.map((n) => (
          <div className="col-6 col-md-3" key={n.label}>
            <div className="stat-value">{n.value}</div>
            <div className="stat-label">{n.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 text-center">
        <EcosystemIllustration />
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          <Link to="/products" className="text-link">
            Explore our products →
          </Link>
          <a href="https://kite-demo.zerodha.com" className="text-link">
            Try Kite demo →
          </a>
        </div>
      </div>

      <div className="mt-5">
        <KiteConnectBanner />
      </div>
    </section>
  );
}
