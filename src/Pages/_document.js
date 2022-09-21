import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Poppins&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Poppins&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body
          className="bg"
          style={{
            margin: "0px",
            fontFamily: "Poppins",
            backgroundColor: "#0d0d0d",
            // position:"fixed",
            // minHeight:"100vh",
            // minWidth:"100vh",
            // backgroundSize:"container",
            // backgroundPosition:"center"
            width: "100%",
            height:"100%",
            backgroundImage:
            "url(https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
            // backgroundSize: "contain",
            objectFit: "contain",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
