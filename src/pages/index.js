import * as React from "react";
import CeoQuote from "../components/ceoQuote";
import ContactUs from "../components/contactUs";
import FactsGridWithImage from "../components/factsGridWithImage";
import HeroWithImage from "../components/heroWithImage";

export default function Home(props) {
  return (
    <>
      <HeroWithImage title="Hjem" />
      <CeoQuote />
      <FactsGridWithImage />
      <ContactUs />
    </>
  );
}
