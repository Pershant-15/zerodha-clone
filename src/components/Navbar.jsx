import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Illustrations";

const links = [
  { to: "/signup", label: "Signup" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="d-flex align-items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <button
          className="nav-toggle d-md-none"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="nav-link-item"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="https://support.zerodha.com" className="nav-link-item">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}
