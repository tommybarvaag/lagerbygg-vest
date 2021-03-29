import * as React from "react";
import Areas from "../components/areas";
import ContactUs from "../components/contactUs";

export default function Area(props) {
  return (
    <>
      <Areas />
      <ContactUs location="Områder" />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: {
        openGraph: {
          title: "Område",
          description:
            "Vi presenterer Galteråsen og Olsvollstranda som tilsammen gir 23 næringsseksjoner i Alver. Bygningene er under planlegging og kan tilpasses leietaker / kjøpers behov.",
          image: "https://lagerbyggvest.no/images/storage-illustration.jpg"
        }
      }
    }
  };
}
