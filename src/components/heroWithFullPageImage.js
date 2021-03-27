import { Box, Button, Container, Flex, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";
import { Image } from "./image";

export default function HeroWithFullPageImage({ title, imgSrc, primaryButtonHref, secondaryButtonHref }) {
  const [dimensions, setDimensions] = React.useState([1920, 1080]);

  React.useEffect(() => {
    setDimensions([window.innerWidth, window.innerHeight]);
  });

  return (
    <Flex w="full" position="relative" h="100vh" overflow="hidden">
      <Box position="absolute" h="100%" w="100vw" zIndex="-999">
        <Image alt="Mountains" dimensions={dimensions} src={imgSrc} layout="fill" objectFit="cover" quality={75} />
      </Box>
      <VStack w="full" justify="center" px={useBreakpointValue({ base: 4, md: 8 })} bgGradient="linear(to-r, blackAlpha.700, transparent)">
        <Container maxW="7xl">
          <Stack maxW="5xl" align="flex-start" spacing={6}>
            <Text color="white" fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", sm: "4xl", lg: "6xl" })}>
              {title}
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
          </Stack>
        </Container>
      </VStack>
    </Flex>
  );
}
