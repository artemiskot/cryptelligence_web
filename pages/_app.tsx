import * as React from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@src/createEmotionCache";

import SwiperCore, { Autoplay, Pagination } from "swiper";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Cryptelligence Society</title>
        <link href="/logo.svg" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
