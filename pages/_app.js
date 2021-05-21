import Head from "next/head";
import React from "react";
import { Reset } from "styled-reset";

const App = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Reset />
      <Head>
        <title>coin revenue!</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
