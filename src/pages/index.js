import * as React from "react";
import ContactUs from "../components/contactUs";
import FactsGridWithImage from "../components/factsGridWithImage";
import HeaderWithIllustration from "../components/headerWithIllustration";
import HeroWithImage from "../components/heroWithImage";
import Quote from "../components/quote";

export default function Home(props) {
  return (
    <>
      <HeroWithImage
        highlightedTitle="Galteråsen"
        title="2022"
        text="Helland Gruppen Næringsbygg AS har gleden av å tilby 7 næringsseksjoner som kommer til salgs i Galteråsen Næringspark i Alver."
        imgSrc="/images/storage-illustration.jpg"
        primaryButtonHref="/omraade/galteraasen"
        secondaryButtonHref="/kontakt-oss"
      />
      <Quote
        text="Som eier av egne lokaler disponerer du til enhver tid lokalene, og bestemmer selv hvordan innredning og planløsning skal være. Alle utgifter er forutsigbare, og du tar selv del i antatt verdistigning. Med dages rentenivå og generell mangel på mindre seksjoner i leiemarkedet, er dette en unik mulighet å sikre seg egen eiendom i det populære og voksende næringsområdet."
        name="Gaute Helland"
        title="Daglig leder"
      />
      <FactsGridWithImage />
      <HeaderWithIllustration
        title="Vi presenterer"
        coloredTitle="Galteråsen"
        text="Helland Gruppen Næringsbygg AS har gleden av å tilby 7 næringsseksjoner som kommer til salgs i Galteråsen Næringspark i Alver. Bygningene er under planlegging og kan tilpasses leietaker / kjøpers behov."
        primaryButtonHref="/omraade/galteraasen"
        secondaryButtonHref="/kontakt-oss"
        imgSrc="/images/storage-illustration.jpg"
      />
      <HeaderWithIllustration
        title="Vi presenterer"
        coloredTitle="Olsvollstranda"
        text="Helland Gruppen Næringsbygg AS har gleden av å tilby 16 næringsseksjoner som kommer til salgs på Olsvollstranda Næringspark i Alver. Bygningene er under planlegging og kan tilpasses leietaker / kjøpers behov."
        primaryButtonHref="/omraade/olsvollstranda"
        secondaryButtonHref="/kontakt-oss"
        imgSrc="/images/storage-illustration.jpg"
      />
      <ContactUs location="Forside" />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: {
        openGraph: {
          title: "Hjem",
          description:
            "Vi presenterer Galteråsen og Olsvollstranda som tilsammen gir 23 næringsseksjoner i Alver. Bygningene er under planlegging og kan tilpasses leietaker / kjøpers behov.",
          image: "https://lagerbyggvest.no/images/storage-illustration.jpg"
        }
      }
    }
  };
}
