import Document, { Html, Head, Main, NextScript } from 'next/document';

// comments will describe what this file is for:
// font injection : https://nextjs.org/docs/basic-features/font-optimization
// favicon inclusion : https://stackoverflow.com/questions/56213019/how-to-add-a-favicon-to-a-next-js-static-site

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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