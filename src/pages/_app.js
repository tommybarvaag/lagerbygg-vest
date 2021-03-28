import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: theme.config.useSystemColorMode
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
