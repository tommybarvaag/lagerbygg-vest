import { Heading } from "@chakra-ui/layout";
import * as React from "react";
import Areas from "../components/areas";
import ContactUs from "../components/contactUs";

export default function Area(props) {
  return (
    <>
      <Heading textAlign="center">Bare ett forslag til hvordan man kan liste ut områder</Heading>
      <Areas />
      <ContactUs />
    </>
  );
}
