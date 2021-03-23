import { Box } from "@chakra-ui/layout";
import * as React from "react";
import Footer from "./footer";
import NavBar from "./nav";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Box as="main" minHeight="100vh">
        {children}
      </Box>
      <Footer />
    </>
  );
}
