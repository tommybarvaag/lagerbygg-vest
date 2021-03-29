import { Container, SimpleGrid } from "@chakra-ui/layout";
import AreaCard from "./areaCard";
import HeadingWithUnderscore from "./headingWithUnderscore";

export default function Areas() {
  return (
    <Container maxW="container.xl" mb={6} py={{ base: 10, md: 28 }}>
      <HeadingWithUnderscore heading="Områder" />
      <SimpleGrid
        minChildWidth={{ base: "320px", md: "360px" }}
        spacing={4}
        alignItems="flex-start"
      >
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
            { key: "Fellesutgifter", value: "Ca. kr. 3000,-/år" }
          ]}
          googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.9303936250362!2d5.160141316280777!3d60.62779361327885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDM3JzQwLjEiTiA1wrAwOSc0NC40IkU!5e0!3m2!1sno!2sno!4v1617009256736!5m2!1sno!2sno"
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
            { key: "Fellesutgifter", value: "Ca. kr. 3000,-/år" }
          ]}
          googleMapsEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.076141773771!2d5.262217316278819!3d60.559453618827064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDMzJzM0LjAiTiA1wrAxNSc1MS45IkU!5e0!3m2!1sno!2sno!4v1617009771589!5m2!1sno!2sno"
        />
      </SimpleGrid>
    </Container>
  );
}
