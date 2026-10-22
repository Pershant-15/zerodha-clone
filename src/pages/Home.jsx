import Hero from "../components/Hero";
import Awards from "../components/Awards";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import Education from "../components/Education";
import OpenAccount from "../components/OpenAccount";
import { HeroIllustration } from "../components/Illustrations";

export default function Home() {
  return (
    <>
      <Hero
        title="Invest in everything"
        text="Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more."
        ctaLabel="Sign up for free"
        ctaTo="/signup"
        illustration={<HeroIllustration />}
      />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
