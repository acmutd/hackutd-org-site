import { useState, useEffect } from "react";
import Head from "next/head";
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
