import { Container, SimpleGrid } from "@chakra-ui/layout";
import AreaCard from "./areaCard";
import HeadingWithUnderscore from "./headingWithUnderscore";

export default function Areas() {
  return (
    <Container maxW="container.xl" mb={6} py={{ base: 10, md: 28 }}>
      <HeadingWithUnderscore heading="Våre lagerenheter" />
      <SimpleGrid minChildWidth="360px" spacing="40px">
        <AreaCard />
        <AreaCard />
        <AreaCard />
        <AreaCard />
        <AreaCard />
        <AreaCard />
      </SimpleGrid>
    </Container>
  );
}
