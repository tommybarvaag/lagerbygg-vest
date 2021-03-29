import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { Container } from "./Container";
import Logo from "./logo";

function ListHeader({ children }) {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
}

export default function Footer() {
  return (
    <VStack
      as="footer"
      py={5}
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      justifyContent="space-around"
      alignItems="center"
    >
      <Container as={Stack} maxW="6xl" py={10} bg={useColorModeValue("gray.200", "gray.900")}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 24, sm: 16, lg: 16 }}>
          <Stack align="flex-start">
            <ListHeader>Kontakt informasjon</ListHeader>
            <Text>Idrettsveien 3, 5936 Manger</Text>
            <Link href="tel:90928237">90928237</Link>
            <Link href="mailto:post@lagerbyggvest.no">post@lagerbyggvest.no</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Lagerbygg Vest AS</ListHeader>
            <NextLink href="/" passHref>
              <Link>Hjem</Link>
            </NextLink>
            <NextLink href="/omraade" passHref>
              <Link>Områder</Link>
            </NextLink>
            <NextLink href="/kontakt-oss" passHref>
              <Link>Kontakt oss</Link>
            </NextLink>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Områder</ListHeader>
            <NextLink href="/omraade/galteraasen" passHref>
              <Link>Galteråsen</Link>
            </NextLink>
            <NextLink href="/omraade/olsvollstranda" passHref>
              <Link>Olsvollstranda</Link>
            </NextLink>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Følg oss</ListHeader>
            <HStack>
              <Link href="https://www.facebook.com/Lagerbygg-Vest-108543304664898/" isExternal>
                <Icon w={6} h={6} as={FiFacebook} />
              </Link>
              <Link href="https://www.instagram.com/lagerbyggvest/" isExternal>
                <Icon w={6} h={6} as={FiInstagram} />
              </Link>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align="center"
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize="sm" textAlign="center">
          © 2021 Lagerbygg Vest AS. All rights reserved
        </Text>
      </Box>
    </VStack>
  );
}
