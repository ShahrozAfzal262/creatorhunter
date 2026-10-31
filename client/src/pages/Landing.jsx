import Hero from "../components/landing/Hero";
import FooterShowcase from "../components/landing/FooterShowcase";
import Marquee from "../components/landing/Marquee";
import FooterPromises from "../components/layout/FooterPromises";
import Showcase from "../components/landing/Showcase";
import CreatorDirectory from "../components/landing/CreatorDirectory";
import WorksInside from "../components/landing/WorksInside";
import FeatureHighlights from "../components/landing/FeatureHighlights";
import Stats from "../components/landing/Stats";
import VettedCreators from "../components/landing/VettedCreators";
import Niches from "../components/landing/Niches";
import NicheReel from "../components/landing/NicheReel";
import DropStats from "../components/landing/DropStats";
import CreatorProof from "../components/landing/CreatorProof";
import FounderHeadline from "../components/landing/FounderHeadline";
import FounderStories from "../components/landing/FounderStories";
import Compare from "../components/landing/Compare";
import Faq from "../components/landing/Faq";
import FinalCta from "../components/landing/FinalCta";

export default function Landing() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FooterPromises />
      <Showcase />
      <CreatorDirectory />
      <WorksInside />
      <FeatureHighlights />
      <Stats />
      <VettedCreators />
      <Niches />
      <NicheReel />
      <DropStats />
      <CreatorProof />
      <FounderHeadline />
      <FounderStories />
      <Compare />
      <Faq />
      <FinalCta />
      <FooterShowcase />
    </main>
  );
}
