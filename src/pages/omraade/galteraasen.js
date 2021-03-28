import { Flex, Link, Text, VStack } from "@chakra-ui/layout";
import * as React from "react";
import Carousel from "../../components/carousel";
import ContactUs from "../../components/contactUs";
import HeadingWithUnderscore from "../../components/headingWithUnderscore";
import HeroWithFullPageImage from "../../components/heroWithFullPageImage";

export default function Galteraasen(props) {
  return (
    <>
      <HeroWithFullPageImage
        title="Helland Gruppen Næringsbygg AS har gleden av å tilby 7 næringsseksjoner som kommer til salgs i Galteråsen Næringspark i Alver"
        primaryButtonHref="/omraade"
        secondaryButtonHref="/kontakt-oss"
        imgSrc="/images/storage-illustration.jpg"
      />
      <Flex maxW="7xl" flexDirection="column" justifyContent="center" alignItems="center" margin="0 auto">
        <VStack p={8} maxWidth="2xl" alignItems="flex-start">
          <HeadingWithUnderscore heading="Galteråsen" />
          <Text>
            Helland Gruppen Næringsbygg AS har gleden av å tilby 7 næringsseksjoner som kommer til salgs i Galteråsen Næringspark i Alver. Bygningene er under
            planlegging og kan tilpasses leietaker / kjøpers behov.
          </Text>
          <Text>
            Bygget deles inn i egne seksjoner på ca. BTA ca. 120 kvm. (6×20 mtr.) Hver seksjon er innenfor aksesystemet på 120, 240, 360 kvm. osv. det er
            mesanin på 60 M2 som ekstra etasje per seksjon. Det kan kjøpes og sammenslås flere seksjoner om ønskelig. Se vedlagt tegning som viser inndeling av
            seksjoner.
          </Text>
          <Text>Innvendig høyder til takplater er ca. 7 meter. Bygget er isolert, men eventuell oppvarmingsløsning kan bestilles som tilvalg. </Text>
          <Text>
            Taket er av selvbærende stålplater isolert og membran av takfolie. Ytter- og innervegger er isolerte sandwichelementer. Armert betonggulv i 120
            millimeters tykkelse ferdig støvbundet, og kantforsterkning i stål ved portåpning. Isolerte gulv u-verdi 0,7.
          </Text>
          <Text>
            Hver seksjon har elektrisk leddheisport (BXH 4X4,3) med 1 rad med vinduer og med GSM styrt port åpner. Det leveres rør-opplegg til vann og toalett i
            hver seksjon, og stoppekran i felles teknisk rom. Sanitærutstyr og vannmåler er tilvalg.
          </Text>
          <Text>
            Det leveres underfordelingsskap for strøm med 1 stk. 16 amp 3-fase, 1 stk 16amp 1-fase. Grunnbelysning, tilkopling av port, og 2 doble stikk i hver
            seksjon. Som blir på et eget abonnement. Det leveres også trekkerør til fiber. Det leveres utvendig belysning, ferdig opparbeidet asfaltert foran
            hver seksjon.
          </Text>
          <HeadingWithUnderscore heading="Parkering" />
          <Text>
            Det vil bli opparbeidet 3 p-plasser på fellesarealet der bruk fastsettes av sameiet iht. vedtekter. For kortere opphold, av/pålessing kan det
            parkeres foran egen port.
          </Text>
          <HeadingWithUnderscore heading="Beliggenhet" />
          <Text>
            Galteråsen Næringspark er et relativt nyetablert industriområde. Her finner man mange ulike aktører innen lager, logistikk og produksjon. Eiendommen
            har en meget sentral beliggenhet i Knarvik, med god adkomst og kort avstand til sentral næringsområder i Bergen, Åsane, Mongstad og Arna
          </Text>
          <HeadingWithUnderscore heading="Hvorfor leie">
            <br />
            når du kan eie?
          </HeadingWithUnderscore>
          <Text>
            Som eier av egne lokaler disponerer du til enhver tid lokalene, og bestemmer selv hvordan innredning og planløsning skal være. Alle utgifter er
            forutsigbare, og du tar selv del i antatt verdistigning. Med dages rentenivå og generell mangel på mindre seksjoner i leiemarkedet, er dette en unik
            mulighet å sikre seg egen eiendom i det populære og voksende næringsområdet.
          </Text>
          <Text>
            Det planlegges byggestart Q3 2021, og planlagt ferdigstillelse er Q2 2022. Byggestart er betinget av et tilstrekkelig antall forhåndssalg og datoene
            kan bli forskjøvet.
          </Text>
          <Text>Ta kontakt med oss for mer informasjon og hvordan vi sammen kan finne løsninger for dine lokaler.</Text>
          <HeadingWithUnderscore heading="Dokumenter" />
          <Link href="/documents/galteraasen-naeringstomt.pdf" isExternal>
            Galteråsen Næringstomt.pdf
          </Link>
        </VStack>
        <Carousel
          title="Illustrasjoner fra Galteråsen"
          text="Bilder er ment som illustrasjon og kan avvike fra ferdig produkt."
          images={["/images/galteraasen-2D-floor-plan-1-story.jpg", "/images/galteraasen-2D-floor-plan-2-story.jpg", "/images/storage-illustration.jpg"]}
        />
      </Flex>
      <ContactUs />
    </>
  );
}
