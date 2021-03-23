import { Container, Heading, SimpleGrid } from "@chakra-ui/layout";
import AreaCard from "./areaCard";

export default function Areas() {
  return (
    <Container maxW="container.xl" mb={6}>
      <Heading fontSize="6xl">Våre lagerenheter</Heading>
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
