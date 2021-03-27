import { AspectRatio, Badge, Box, Center, Flex, Heading, Stack, Tag, TagLabel, TagLeftIcon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FiDollarSign, FiMapPin } from "react-icons/fi";

export default function AreaCard() {
  return (
    <Center py={6}>
      <Box maxW="445px" w="full" bg="gray.50" boxShadow="2xl" rounded="md" p={6} overflow="hidden">
        <Box h="210px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
          <Image src={"/images/storage-illustration.jpg"} layout="fill" />
        </Box>
        <Stack>
          <Flex>
            <Badge variant="solid" colorScheme="green" mr={3}>
              LEDIG
            </Badge>
            <Badge variant="solid" colorScheme="red" mr={3}>
              SOLGT
            </Badge>
            <Badge variant="solid" colorScheme="purple" mr={3}>
              NY
            </Badge>
          </Flex>
          <Heading color="gray.700" fontSize="2xl" fontFamily="body">
            Lager #1
          </Heading>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Text>
        </Stack>
        <VStack mt={6} spacing={4} alignItems="flex-start">
          <Tag variant="solid">
            <TagLeftIcon boxSize="12px" as={FiDollarSign} />
            <TagLabel>1 200 000,-</TagLabel>
          </Tag>
          <Tag variant="solid">
            <TagLeftIcon boxSize="12px" as={FiMapPin} />
            <TagLabel>Adresse, 9999 Posted</TagLabel>
          </Tag>
        </VStack>
        <Box h="210px" bg="gray.100" mt={6} mx={-6} mb={-6} pos="relative">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              alt="demo"
            />
          </AspectRatio>
        </Box>
      </Box>
    </Center>
  );
}
