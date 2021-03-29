import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiMail } from "react-icons/fi";
import { validateEmail, validateTelephone } from "../utils/formValidationUtils";

export default function ContactUs({ location = "frontpage" }) {
  const { handleSubmit, errors, register, formState } = useForm();

  async function onSubmit(values) {
    await fetch("/api/sendMail", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
  }

  return (
    <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
      <Flex
        as="form"
        p={8}
        flex={1}
        align="center"
        justify="center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={4} w="full" maxW="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>Ta kontakt</Heading>
          <FormControl id="name" isInvalid={errors.name}>
            <FormLabel htmlFor="name">Navn</FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="Ditt navn"
              ref={register({
                required: true
              })}
            />
            <FormErrorMessage>{errors.name ? "Feltet er påkrevd." : null}</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel htmlFor="email">E-post</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="din@epost.no"
              ref={register({
                required: true,
                validate: {
                  email: value =>
                    validateEmail(value) || "E-post må være gyldig. F.eks. din@epost.no"
                }
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.type === "email"
                ? errors.email.message
                : errors.email
                ? "Feltet er påkrevd."
                : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="phone" isInvalid={errors.phone}>
            <FormLabel htmlFor="phone">Telefonnummer</FormLabel>
            <Input
              name="phone"
              type="text"
              placeholder="97979797"
              ref={register({
                required: true,
                validate: {
                  phone: value =>
                    validateTelephone(value) || "Telefon må være ett gyldig norsk nummer."
                }
              })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.type === "phone"
                ? errors.phone.message
                : errors.phone
                ? "Feltet er påkrevd."
                : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Jeg ønsker å bli kontaktet per</FormLabel>
            <RadioGroup name="contactType" defaultValue="phone">
              <HStack spacing="24px">
                <Radio value="email" ref={register({ required: true })}>
                  E-post
                </Radio>
                <Radio value="phone" ref={register({ required: true })}>
                  Telefon
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl id="message">
            <FormLabel htmlFor="message">Text (valgfritt)</FormLabel>
            <Textarea name="message" placeholder="Mine ønsker..." ref={register} />
          </FormControl>
          <FormControl id="location">
            <Input name="location" type="hidden" value={location} ref={register} />
          </FormControl>
          <Stack spacing={6}>
            <Button
              colorScheme="red"
              bg="red.400"
              variant="solid"
              rightIcon={<FiMail />}
              isLoading={formState.isSubmitting}
              type="submit"
            >
              Send
            </Button>
            {formState.isSubmitSuccessful ? (
              <AnimatePresence>
                <Alert
                  as={motion.div}
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 20
                  }}
                  status="success"
                >
                  <AlertIcon />
                  Vi har mottatt din helvendelse og vil ta kontakt.
                </Alert>
              </AnimatePresence>
            ) : null}
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
