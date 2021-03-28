import { Avatar, Box, Stack, Text } from "@chakra-ui/react";

export default function Quote({ text, name, title }) {
  return (
    <Stack bg="gray.100" py={16} px={8} spacing={{ base: 8, md: 10 }} align="center" direction="column">
      <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center" maxW="3xl">
        {text}
      </Text>
      <Box textAlign="center">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1551224934-2c0b4dd7033d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
          }
          alt={name}
          mb={2}
        />

        <Text fontWeight={600}>{name}</Text>
        <Text fontSize="sm" color="gray.500">
          {title}
        </Text>
      </Box>
    </Stack>
  );
}
