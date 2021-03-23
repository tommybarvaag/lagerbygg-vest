import { Flex, Heading } from "@chakra-ui/react";
import * as React from "react";

export default function Hero({ title }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Heading fontSize="10vw">{title}</Heading>
    </Flex>
  );
}
