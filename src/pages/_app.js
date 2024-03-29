import "@/styles/globals.css";
import {MantineProvider} from "@mantine/core";

export default function App({Component, pageProps}) {
  return <>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      defaultColorScheme="dark"
    >
      <Component {...pageProps} />
    </MantineProvider>
  </>
}
