import { AspectRatio, Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Image } from "../components/image";

export default function HeaderWithIllustration({ title, text, coloredTitle, primaryButtonHref, secondaryButtonHref, imgSrc }) {
  return (
    <Container maxW="5xl" overflow="hidden">
      <Stack textAlign="center" align="center" spacing={{ base: 8, md: 10 }} py={{ base: 8, md: 16 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight="110%">
          {title}{" "}
          <Text as="span" color="red.400">
            {coloredTitle}
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          {text}
        </Text>
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
        {imgSrc ? (
          <Flex flex={1} justify="center" align="center" position="relative" w="full">
            <AspectRatio ratio={16 / 9} rounded="2xl" boxShadow="xl" width="full" overflow="hidden">
              <Image alt="Hero Image" fit="cover" src={imgSrc} />
            </AspectRatio>
          </Flex>
        ) : null}
      </Stack>
    </Container>
  );
}
