import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import * as React from "react";
import { Image } from "./image";

const ImageWrapper = styled(Box)`
  > div {
    height: 100%;
  }
`;

export default function HeroWithFullPageImage({
  title,
  imgSrc,
  primaryButtonHref,
  secondaryButtonHref
}) {
  const [dimensions, setDimensions] = React.useState([2560, 1440]);

  React.useEffect(() => {
    setDimensions([window.innerWidth, window.innerHeight]);
  }, []);

  return (
    <Flex w="full" position="relative" h="100vh" overflow="hidden">
      <ImageWrapper position="absolute" h="100%" w="100vw" zIndex="-999">
        <Image
          alt="Hero"
          dimensions={dimensions}
          src={imgSrc}
          layout="fill"
          nextImageObjectFit="cover"
          quality={75}
        />
      </ImageWrapper>
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.700, transparent)"
      >
        <Container maxW="7xl">
          <Stack maxW="5xl" align="flex-start" spacing={6}>
            <Text
              color="white"
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", sm: "4xl", lg: "6xl" })}
            >
              {title}
            </Text>
            {primaryButtonHref || secondaryButtonHref ? (
              <Stack direction="row">
                {primaryButtonHref ? (
                  <NextLink href={primaryButtonHref} passHref>
                    <Button
                      as="a"
                      rounded="full"
                      size="lg"
                      fontWeight="normal"
                      px={6}
                      colorScheme="red"
                      bg="red.400"
                      _hover={{ bg: "red.500" }}
                    >
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
