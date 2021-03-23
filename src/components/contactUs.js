import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Radio, RadioGroup, Stack, Textarea } from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4} w="full" maxW="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>Ta kontakt</Heading>
          <FormControl id="email">
            <FormLabel>E-post</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Telefonnummer</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Jeg ønsker å bli kontaktet per</FormLabel>
            <RadioGroup defaultValue="phone">
              <HStack spacing="24px">
                <Radio value="email">E-post</Radio>
                <Radio value="phone">Telefon</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl id="text">
            <FormLabel>Text</FormLabel>
            <Textarea placeholder="Mine øsnker..." />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme="orange" variant="solid" rightIcon={<EmailIcon />}>
              Send
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
