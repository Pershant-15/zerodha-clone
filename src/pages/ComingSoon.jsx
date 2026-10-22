import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <section className="container text-center section-pad">
      <h1 className="display-title">This page is coming soon</h1>
      <p className="lead-text mb-4">
        The Home page is built first. The other pages will follow.
      </p>
      <Link to="/" className="btn-solid">
        Back to Home
      </Link>
    </section>
  );
}
