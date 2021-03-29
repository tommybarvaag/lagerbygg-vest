import { Box } from "@chakra-ui/layout";
import * as React from "react";
import Footer from "./footer";
import NavBar from "./nav";
import Seo from "./seo";

export default function Layout({ children, ...other }) {
  return (
    <>
      <Seo {...other} />
      <NavBar />
      <Box as="main" minHeight="100vh">
        {children}
      </Box>
      <Footer />
    </>
  );
}
