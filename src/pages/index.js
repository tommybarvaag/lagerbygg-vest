import * as React from "react";
import CeoQuote from "../components/ceoQuote";
import ContactUs from "../components/contactUs";
import FactsGridWithImage from "../components/factsGridWithImage";
import HeroWithImage from "../components/heroWithImage";

export default function Home(props) {
  return (
    <>
      <HeroWithImage
        highlightedTitle="58 isolerte"
        title="lagerseksjoner for salg!"
        text="Lagerbygg Vest er et nytt og spennende tilbud i Vestland. Det blir bygget tre bygg med totalt 58 seksjoner. To av byggene har 20 seksjoner, og det tredje har 18 seksjoner. Med areal på ca. 72 kvm er dette et perfekt sted for lagring av bobil, campingvogn, tilhenger eller snøscooter."
        primaryButtonHref="/omraade"
        secondaryButtonHref="/kontakt-oss"
      />
      <CeoQuote />
      <FactsGridWithImage />
      <ContactUs />
    </>
  );
}
