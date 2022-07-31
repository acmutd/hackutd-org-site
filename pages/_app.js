import { useState, useEffect } from "react";
import Head from "next/head";
import Script from 'next/script';
import GlobalStyle from 'components/GlobalStyle';
import ThemeContext from "context/ThemeContext";

function MyApp({ Component, pageProps }) {
  // https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
  const [dark, setDark] = useState(false);
  const value = { dark, setDark };

  useEffect(() => {
    
    const readValue = localStorage.getItem("dark");
    const userHasPreviouslySelectedDark = JSON.parse(readValue);

    if (userHasPreviouslySelectedDark === null) {
      // handle reading from device settings
      const userUsesDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(userUsesDarkMode);
    } else {
      if (userHasPreviouslySelectedDark === true) {
        setDark(true);
      } else {
        setDark(false);
      }
    }
  }, []);

  return (
    <>
      {/*
        Adding analytics.
        Reference:
        * https://blog.avneesh.tech/add-google-analytics-to-your-nextjs-app
      */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle 
        dark={dark} 
      />
      <ThemeContext.Provider 
        value={value}
      >
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
