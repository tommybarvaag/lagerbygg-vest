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
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { FiMail } from "react-icons/fi";
import { validateEmail, validateTelephone } from "../utils/formValidationUtils";

function ContactUsForm({ location }) {
  const { handleSubmit, errors, register, formState } = useForm();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [googleReCaptchaVerifyFailure, setGoogleReCaptchaVerifyFailure] = React.useState(false);

  async function onSubmit(values) {
    const result = await executeRecaptcha(location);

    const response = await fetch("/api/googleReCaptchaVerify", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: result
      })
    });

    const googleReCaptchaVerify = await response.json();

    if (googleReCaptchaVerify.success && googleReCaptchaVerify.score > 0.5) {
      await fetch("/api/sendMail", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
    } else {
      setGoogleReCaptchaVerifyFailure(true);
    }
  }

  return (
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
                email: value => validateEmail(value) || "E-post må være gyldig. F.eks. din@epost.no"
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
              <Radio id="email-radio" value="email" ref={register({ required: true })}>
                E-post
              </Radio>
              <Radio id="phone-radio" value="phone" ref={register({ required: true })}>
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
          {googleReCaptchaVerifyFailure ? (
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
                status="error"
              >
                <AlertIcon />
                <Text as="span">
                  Vår antiscam-funksjonalitet har stoppet innsendelsen av kontaktskjema. Dersom
                  dette skulle være en feil, så ber vi deg ta direkte kontakt på{" "}
                  <Link href="tel:90928237" fontWeight="bold">
                    90928237
                  </Link>{" "}
                  <Text as="span">eller </Text>
                  <Link href="mailto:post@lagerbyggvest.no" fontWeight="bold">
                    post@lagerbyggvest.no
                  </Link>
                </Text>
              </Alert>
            </AnimatePresence>
          ) : null}
        </Stack>
      </Stack>
    </Flex>
  );
}

export default function ContactUs({ location = "frontpage" }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_LAGERBYGG_VEST_GOOGLE_RECAPTCHA_V3_SITE_KEY}
    >
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <ContactUsForm location={location} />
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
    </GoogleReCaptchaProvider>
  );
}
