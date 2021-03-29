import { Flex, Link, Text, VStack } from "@chakra-ui/layout";
import * as React from "react";
import AreaStat from "../../components/areaStat";
import Carousel from "../../components/carousel";
import ContactUs from "../../components/contactUs";
import HeadingWithUnderscore from "../../components/headingWithUnderscore";
import HeroWithFullPageImage from "../../components/heroWithFullPageImage";

export default function Olsvollstranda(props) {
  return (
    <>
      <HeroWithFullPageImage
        title="Helland Gruppen Næringsbygg AS har gleden av å tilby 16 næringsseksjoner som kommer til salgs på Olsvollstranda Næringspark i Alver. "
        primaryButtonHref="/omraade"
        secondaryButtonHref="/kontakt-oss"
        imgSrc="/images/storage-illustration.jpg"
      />
      <Flex
        maxW="7xl"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
      >
        <VStack p={8} maxWidth="2xl" alignItems="flex-start">
          <HeadingWithUnderscore heading="Olsvollstranda" />
          <AreaStat price="1.050.000,-" commonExpenses="3.000,-" area="72 kvm" />
          <Text>
            Helland Gruppen Næringsbygg AS har gleden av å tilby 16 næringsseksjoner som kommer til
            salgs på Olsvollstranda Næringspark i Alver. Bygningene er under planlegging og kan
            tilpasses leietaker / kjøpers behov.
          </Text>
          <Text>
            Det er tiltenkt at lagerseksjonene skal kunne eies av både næringskunder og
            privatpersoner og kunne brukes til lager/garasje av f.eks. bobil, campingvogn, scooter,
            maskiner, varer og annet utstyr
          </Text>
          <Text>
            Bygget deles inn i egne seksjoner på ca. BTA ca. 72kvm. (6×12 mtr.) Hver seksjon er
            innenfor aksesystemet på 72, 144, 216 kvm. osv. Det kan kjøpes og sammenslås flere
            seksjoner om ønskelig.
          </Text>
          <Text>
            Innvendig høyder til takplater er ca. 6 meter. Bygget er isolert, men eventuell
            oppvarmingsløsning kan bestilles som tilvalg.
          </Text>
          <Text>
            Taket er av selvbærende stålplater isolert og membran av takfolie. Ytter- og innervegger
            er isolerte sandwichelementer. Armert betonggulv i 120 millimeters tykkelse ferdig
            støvbundet, og kantforsterkning i stål ved portåpning. Isolerte gulv u-verdi 0,7.
          </Text>
          <Text>
            Hver seksjon har elektrisk leddheisport (BXH 4X4,3) med 1 rad med vinduer og integrert
            gangdør med GSM styrt port åpner. Det leveres rør-opplegg til vann og toalett i hver
            seksjon, og stoppekran i felles teknisk rom. Sanitærutstyr og vannmåler er tilvalg.
          </Text>
          <Text>
            Det leveres underfordelingsskap for strøm med 1 stk. 16 amp 3-fase, 1 stk 16amp 1-fase.
            Grunnbelysning, tilkopling av port, og 2 doble stikk i hver seksjon. Som blir på et eget
            abonnement. Det leveres også trekkerør til fiber. Det leveres utvendig belysning, 3
            ferdig opparbeidet asfaltert parkering foran hver seksjon, samt 8 meter ut fra bygning.
          </Text>
          <Text>
            Det planlegges byggestart Q3 2021, og planlagt ferdigstillelse er Q2 2022. Byggestart er
            betinget av et tilstrekkelig antall forhåndssalg og datoene kan bli forskjøvet.
          </Text>
          <Text>
            Ta kontakt med oss for mer informasjon og hvordan vi sammen kan finne løsninger for dine
            lokaler.
          </Text>
          <HeadingWithUnderscore heading="Parkering" />
          <Text>
            Det vil bli opparbeidet 2 p-plasser på fellesarealet der bruk fastsettes av sameiet iht.
            vedtekter. For kortere opphold, av/pålessing kan det parkeres foran egen port.
          </Text>
          <HeadingWithUnderscore heading="Beliggenhet" />
          <Text>Olsvollstranda næringspark ligger ca 12 minuter fra Knarvik.</Text>
          <HeadingWithUnderscore heading="Dokumenter" />
          <Link href="/documents/olsvold-naeringsomraade.pdf" isExternal>
            Olsvollstranda Næringsområde.pdf
          </Link>
        </VStack>
        <Carousel
          title="Illustrasjoner fra Galteråsen"
          text="Bilder er ment som illustrasjon og kan avvike fra ferdig produkt."
          images={["/images/storage-illustration.jpg", "/images/storage-illustration.jpg"]}
        />
      </Flex>
      <ContactUs location="Olsvollstranda" />
    </>
  );
}
