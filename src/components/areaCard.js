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
  tags = []
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
          <Box h="250px" bg="gray.100" mt={6} mx={-6} mb={-6} pos="relative">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                alt="demo"
              />
            </AspectRatio>
          </Box>
        </Box>
      </Center>
    </NextLink>
  );
}
