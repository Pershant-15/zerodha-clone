import { EducationIllustration } from "./Illustrations";

export default function Education() {
  return (
    <section className="container section-pad border-top-line">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <EducationIllustration />
        </div>
        <div className="col-lg-6">
          <h2 className="section-title">Free and open market education</h2>
          <p className="body-text mb-2">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="https://zerodha.com/varsity" className="text-link d-inline-block mb-4">
            Varsity →
          </a>
          <p className="body-text mb-2">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="https://tradingqna.com" className="text-link">
            TradingQ&amp;A →
          </a>
        </div>
      </div>
    </section>
  );
}
