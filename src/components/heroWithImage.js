import { AspectRatio, Button, Container, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import HeadingWithUnderscore from "../components/headingWithUnderscore";
import { Image } from "./image";

export default function HeroWithImage({ highlightedTitle, title, text, imgSrc, primaryButtonHref, secondaryButtonHref }) {
  return (
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, lg: 12 }} alignItems="center" justifyContent="center" spacing={0} py={{ base: 10, md: 28 }}>
        <GridItem
          zIndex="1"
          maxWidth={{ base: "90%", lg: "100%" }}
          order={{ base: 1, lg: 0 }}
          colSpan={{ base: 10, lg: 4 }}
          boxShadow={"2xl"}
          rounded={"2xl"}
          p={12}
          backgroundColor="white"
          transform={{ base: "translate(0px, -40px)", lg: "translate(0px, 0px)" }}
          margin="0 auto"
        >
          <HeadingWithUnderscore mb={0} heading={highlightedTitle}>
            <br />
            <Text as="span" color="red.500">
              {title}
            </Text>
          </HeadingWithUnderscore>
          <Text color="gray.600" mt={0}>
            {text}
          </Text>
          {primaryButtonHref || secondaryButtonHref ? (
            <Stack direction="row" mt={6}>
              {primaryButtonHref ? (
                <NextLink href={primaryButtonHref} passHref>
                  <Button as="a" rounded="full" size="lg" fontWeight="normal" px={6} colorScheme="red" bg="red.400" _hover={{ bg: "red.500" }}>
                    Les mer
                  </Button>
                </NextLink>
              ) : null}
              {secondaryButtonHref ? (
                <NextLink href={secondaryButtonHref} passHref>
                  <Button as="a" rounded="full" size="lg" fontWeight="normal" px={6}>
                    Kontakt oss
                  </Button>
                </NextLink>
              ) : null}
            </Stack>
          ) : null}
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 8 }} transform={{ base: "translate(0px, 0px)", lg: "translate(-40px, 0px)" }}>
          <AspectRatio ratio={4 / 3} rounded="2xl" boxShadow="2xl" width="full" overflow="hidden">
            <Image alt="Hero Image" fit="cover" src={imgSrc} />
          </AspectRatio>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
