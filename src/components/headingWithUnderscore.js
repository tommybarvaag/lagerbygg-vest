import { Heading } from "@chakra-ui/react";
import TextWithUnderscore from "./textWithUnderScore";

export default function HeadingWithUnderscore({ children, heading, ...other }) {
  return (
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      mb={8}
      {...other}
    >
      <TextWithUnderscore>{heading}</TextWithUnderscore>
      {children}
    </Heading>
  );
}
