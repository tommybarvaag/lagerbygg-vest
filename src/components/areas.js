import { Container, SimpleGrid } from "@chakra-ui/layout";
import AreaCard from "./areaCard";
import HeadingWithUnderscore from "./headingWithUnderscore";

export default function Areas() {
  return (
    <Container maxW="container.xl" mb={6} py={{ base: 10, md: 28 }}>
      <HeadingWithUnderscore heading="Våre lagerenheter" />
      <SimpleGrid minChildWidth={{ base: "320px", md: "360px" }} spacing={4}>
        <AreaCard
          href="/omraade/galteraasen"
          imgSrc="/images/storage-illustration.jpg"
          isNew
          isAvailable
          title="Galteråsen"
          text="Helland Gruppen Næringsbygg AS har gleden av å tilby 7 næringsseksjoner som kommer til salgs i Galteråsen Næringspark i Alver. Bygningene er under planlegging og kan tilpasses leietaker / kjøpers behov."
          tags={[
            { key: "Pris:", value: "2.490.000,- + omkostninger" },
            { key: "Areal", value: "BTA ca. 120 kvm" },
            { key: "Fellesutgifter", value: "Ca. kr. 3000,-/år" },
          ]}
        />
        <AreaCard
          href="/omraade/olsvollstranda"
          imgSrc="/images/storage-illustration.jpg"
          isNew
          isAvailable
          title="Olsvollstranda"
          text="Helland Gruppen Næringsbygg AS har gleden av å tilby 16 næringsseksjoner som kommer til salgs på Olsvollstranda Næringspark i Alver. Bygningene er under planlegging og kan tilpasses leietaker / kjøpers behov."
          tags={[
            { key: "Pris:", value: "1.050.000,- + omkostninger" },
            { key: "Areal", value: "BTA ca. 72 kvm" },
            { key: "Fellesutgifter", value: "Ca. kr. 3000,-/år" },
          ]}
        />
      </SimpleGrid>
    </Container>
  );
}
