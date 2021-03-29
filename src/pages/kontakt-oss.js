import * as React from "react";
import ContactUs from "../components/contactUs";

export default function Contact(props) {
  return (
    <>
      <ContactUs location="Kontakt oss" />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: {
        openGraph: {
          title: "Kontakt oss",
          description:
            "Ta kontakt med oss for mer informasjon og hvordan vi sammen kan finne løsninger for dine lokaler.",
          image: "https://lagerbyggvest.no/images/storage-illustration.jpg"
        }
      }
    }
  };
}
