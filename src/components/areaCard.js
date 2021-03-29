import {
  AspectRatio,
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Image } from "./image";

export default function AreaCard({
  href,
  imgSrc,
  title,
  text,
  isAvailable,
  isSold,
  isNew,
  tags = [],
  googleMapsEmbedUrl
}) {
  return (
    <NextLink href={href} passHref>
      <Center
        as={Link}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        cursor="pointer"
        py={6}
      >
        <Box
          maxW="445px"
          w="full"
          bg="gray.50"
          boxShadow="2xl"
          rounded="md"
          p={6}
          overflow="hidden"
        >
          <Box h="300px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
            <Image src={imgSrc} layout="fill" />
          </Box>
          <Stack>
            <Flex>
              {isAvailable ? (
                <Badge variant="solid" colorScheme="green" mr={3}>
                  LEDIG
                </Badge>
              ) : null}
              {isSold ? (
                <Badge variant="solid" colorScheme="red" mr={3}>
                  SOLGT
                </Badge>
              ) : null}
              {isNew ? (
                <Badge variant="solid" colorScheme="purple" mr={3}>
                  NY
                </Badge>
              ) : null}
            </Flex>
            <Heading color="gray.700" fontSize="2xl" fontFamily="body">
              {title}
            </Heading>
            <Text color="gray.500">{text}</Text>
          </Stack>
          {tags?.length > 0 ? (
            <VStack mt={6} spacing={4} alignItems="flex-start">
              {tags.map((tag, index) => (
                <Tag key={index} variant="solid">
                  <TagLabel>
                    <strong>{tag.key} </strong>
                    {tag.value}
                  </TagLabel>
                </Tag>
              ))}
            </VStack>
          ) : null}
          {googleMapsEmbedUrl ? (
            <Box h="250px" bg="gray.100" mt={6} mx={-6} mb={-6} pos="relative">
              <AspectRatio ratio={{ base: 4 / 3, md: 16 / 9 }}>
                <iframe
                  src={googleMapsEmbedUrl}
                  width="400"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </AspectRatio>
            </Box>
          ) : null}
        </Box>
      </Center>
    </NextLink>
  );
}
