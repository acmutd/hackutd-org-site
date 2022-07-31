import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// comments will describe what this file is for:
// font injection : https://nextjs.org/docs/basic-features/font-optimization
// favicon inclusion : https://stackoverflow.com/questions/56213019/how-to-add-a-favicon-to-a-next-js-static-site

class MyDocument extends Document {

  // https://stackoverflow.com/questions/61378312/wait-for-css-to-load-on-a-nextjs-static-site
  // works to fix the styled-components from being applied late
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Google Site Verification */}
          <meta name="google-site-verification" content="VKp-e5ZWU72xskVNCwCS-6lQoAzYpqu5ZMBJ0_obrkM" />
          {/* Importing the "Inter" font from Google Fonts */}
          <link 
            href= "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
            rel=  "stylesheet" 
          />
          {/* Including the favicons from public */}
          {/* TODO: Think about adding the different-resolution favicons for different purposes */}
          <link rel="shortcut icon" href="favicon/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;