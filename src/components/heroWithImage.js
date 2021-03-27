import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import HeadingWithUnderscore from "../components/headingWithUnderscore";
import { Image } from "./image";

export default function HeroWithImage({ highlightedTitle, title, text, imgSrc = "/images/storage-illustration.jpg", primaryButtonHref, secondaryButtonHref }) {
  return (
    <Container maxW="7xl">
      <Stack align="center" spacing={{ base: 8, md: 10 }} py={{ base: 10, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} boxShadow={"2xl"} rounded={"2xl"} p={12}>
          <HeadingWithUnderscore heading={highlightedTitle}>
            <br />
            <Text as="span" color="red.500">
              {title}
            </Text>
          </HeadingWithUnderscore>
          <Text color="gray.600">{text}</Text>
          {primaryButtonHref || secondaryButtonHref ? (
            <Stack direction="row">
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
        </Stack>
        <Flex flex={1} justify="center" align="center" position="relative" w="full">
          <Box position="relative" height="300px" rounded="2xl" boxShadow="2xl" width="full" overflow="hidden">
            <Image alt="Hero Image" fit="cover" align="center" dimensions={[556, 300]} src={imgSrc} />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
