const items = [
  {
    title: "Customer-first always",
    text: "That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.",
  },
  {
    title: "No spam or gimmicks",
    text: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
    link: "Our philosophies.",
  },
  {
    title: "The Zerodha universe",
    text: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
  },
  {
    title: "Do better with money",
    text: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
  },
];

export default function Awards() {
  return (
    <section className="container section-pad border-top-line">
      <h2 className="section-title text-center mb-5">Trust with confidence</h2>
      <div className="row g-5">
        {items.map((item) => (
          <div className="col-md-6" key={item.title}>
            <h3 className="card-heading">{item.title}</h3>
            <p className="body-text">
              {item.text}{" "}
              {item.link && (
                <a href="#philosophy" className="text-link">
                  {item.link}
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
