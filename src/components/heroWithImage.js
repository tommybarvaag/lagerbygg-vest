import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function HeroWithImage({}) {
  return (
    <Container maxW="7xl">
      <Stack align="center" spacing={{ base: 8, md: 10 }} py={{ base: 10, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.500",
                zIndex: -1,
              }}
            >
              58 isolerte
            </Text>
            <br />
            <Text as="span" color="red.500">
              lagerseksjoner for salg!
            </Text>
          </Heading>
          <Text color="gray.600">
            Lagerbygg Vest er et nytt og spennende tilbud i Vestland. Det blir bygget tre bygg med totalt 58 seksjoner. To av byggene har 20 seksjoner, og det
            tredje har 18 seksjoner. Med areal på ca. 72 kvm er dette et perfekt sted for lagring av bobil, campingvogn, tilhenger eller snøscooter.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <NextLink href="/omraade" passHref>
              <Button as="a" rounded="full" size="lg" fontWeight="normal" px={6} colorScheme="red" bg="red.400" _hover={{ bg: "red.500" }}>
                Se lagerseksjoner
              </Button>
            </NextLink>
            <NextLink href="/kontakt-oss" passHref>
              <Button as="a" rounded="full" size="lg" fontWeight="normal" px={6}>
                Kontakt oss
              </Button>
            </NextLink>
          </Stack>
        </Stack>
        <Flex flex={1} justify="center" align="center" position="relative" w="full">
          <Box position="relative" height="300px" rounded="2xl" boxShadow="2xl" width="full" overflow="hidden">
            <Image
              alt="Hero Image"
              fit="cover"
              align="center"
              w="100%"
              h="100%"
              src="https://usercontent.one/wp/nettside.lagerbyggalta.no/wp-content/uploads/2021/03/test1.jpg"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
