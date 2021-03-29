import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function FactsGridWithImage() {
  return (
    <Box bg="gray.800" position="relative">
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/images/storage-illustration.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="absolute"
        width="50%"
        insetY={0}
        right={0}
      >
        <Flex bgGradient="linear(to-r, gray.800 10%, transparent)" w="full" h="full" />
      </Flex>
      <Container maxW="7xl" zIndex={10} position="relative">
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color="gray.400"
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily="heading"
                fontWeight={700}
                textTransform="uppercase"
                mb={3}
                fontSize="xl"
                color="gray.500"
              >
                Lagerbygg Vest
              </Text>
              <Heading color="white" mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
                Utsøkte lagerenheter
              </Heading>
              <Text fontSize="xl" color="gray.400">
                Lagerbygg Vest er et nytt og spennende tilbud for næring og private. Topp moderne
                lager bygg på flere sentrale plasser i Hordaland. Flexible løsninger og tilpasninger
                for lagring, garasje, logistikk, produksjon, kontor eller kombinasjonslokaler.
              </Text>
            </Box>
            {stats?.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map(stat => (
                  <Box key={stat.title}>
                    <Text fontFamily="heading" fontSize="3xl" color="white" mb={3}>
                      {stat.title}
                    </Text>
                    <Text fontSize="xl" color="gray.400">
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            ) : null}
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as="span" fontWeight={700} color="white">
    {children}
  </Text>
);

const stats = [];
// const stats = [
//   {
//     title: "10+ år",
//     content: (
//       <>
//         <StatsText>Erfaring</StatsText> hos de involverte partnerne
//       </>
//     )
//   },
//   {
//     title: "24/7",
//     content: (
//       <>
//         <StatsText>Tilgang</StatsText> til lager
//       </>
//     )
//   },
//   {
//     title: "13%",
//     content: (
//       <>
//         <StatsText>Billigere</StatsText> enn tradisjonell lagring
//       </>
//     )
//   },
//   {
//     title: "23+",
//     content: (
//       <>
//         <StatsText>Lagerløsninger</StatsText> planert
//       </>
//     )
//   }
// ];
