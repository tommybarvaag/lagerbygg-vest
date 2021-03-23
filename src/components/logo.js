import { Box } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import * as React from "react";

export default function Logo(props) {
  return (
    <Box cursor="pointer" {...props}>
      <NextLink href="/">
        <Image src="/images/logo.png" alt="Logo" width={250} height={81} />
      </NextLink>
    </Box>
  );
}
