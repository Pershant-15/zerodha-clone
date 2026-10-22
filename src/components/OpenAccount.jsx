import { Link } from "react-router-dom";

// Shared across pages.
export default function OpenAccount({
  title = "Open a Zerodha account",
  text = "Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.",
  ctaLabel = "Sign up for free",
  ctaTo = "/signup",
}) {
  return (
    <section className="container text-center section-pad border-top-line">
      <h2 className="section-title">{title}</h2>
      <p className="lead-text mb-4">{text}</p>
      <Link to={ctaTo} className="btn-solid">
        {ctaLabel}
      </Link>
    </section>
  );
}
