import { Link } from "react-router-dom";

// Shared across pages: pass a different title, text, button and illustration.
export default function Hero({ title, text, ctaLabel, ctaTo, illustration }) {
  return (
    <section className="container section-pad">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 order-lg-1 order-2 text-center text-lg-start">
          <h1 className="display-title">{title}</h1>
          <p className="lead-text mb-4">{text}</p>
          {ctaLabel && (
            <Link to={ctaTo} className="btn-solid">
              {ctaLabel}
            </Link>
          )}
        </div>
        <div className="col-lg-6 order-lg-2 order-1">{illustration}</div>
      </div>
    </section>
  );
}
