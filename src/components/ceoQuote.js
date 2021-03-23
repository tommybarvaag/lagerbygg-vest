import { Avatar, Box, Stack, Text } from "@chakra-ui/react";

export default function CeoQuote() {
  return (
    <Stack bg="gray.100" py={16} px={8} spacing={{ base: 8, md: 10 }} align="center" direction="column">
      <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center" maxW="3xl">
        Lagerseksjonene er perfekt for deg som trenger lagring av campingvogn, bobil, båt, scooter osv. Dette er et konsept som vi tror vil passe for både en
        forbruker og håndverker.
      </Text>
      <Box textAlign="center">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1551224934-2c0b4dd7033d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
          }
          alt="Gaute Helland"
          mb={2}
        />

        <Text fontWeight={600}>Gaute Helland</Text>
        <Text fontSize="sm" color="gray.500">
          Daglig leder
        </Text>
      </Box>
    </Stack>
  );
}
