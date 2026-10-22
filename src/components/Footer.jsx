import { Logo } from "./Illustrations";

const columns = [
  {
    title: "Account",
    links: [
      "Open demat account",
      "Minor demat account",
      "NRI demat account",
      "HUF demat account",
      "Commodity",
      "Dematerialisation",
      "Fund transfer",
      "MTF",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact us",
      "Support portal",
      "How to file a complaint?",
      "Status of your complaints",
      "Bulletin",
      "Circular",
      "Z-Connect blog",
      "Downloads",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Philosophy",
      "Press & media",
      "Careers",
      "Zerodha Cares (CSR)",
      "Zerodha.tech",
      "Open source",
      "Referral program",
    ],
  },
  {
    title: "Quick links",
    links: [
      "Upcoming IPOs",
      "Brokerage charges",
      "Market holidays",
      "Economic calendar",
      "Calculators",
      "Markets",
      "Sectors",
      "Gift Nifty",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Logo />
            <p className="footer-small mt-3 mb-1">© 2010 - 2026, Zerodha Broking Ltd.</p>
            <p className="footer-small">All rights reserved.</p>
          </div>
          {columns.map((col) => (
            <div className="col-6 col-lg-2" key={col.title}>
              <h4 className="footer-heading">{col.title}</h4>
              <ul className="list-unstyled m-0">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="footer-link">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-legal">
          <p>
            This is a frontend clone built for learning purposes only. It is not
            affiliated with Zerodha. Content is modelled on the public Zerodha
            website for practice.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
