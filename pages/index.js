import Head from 'next/head';

import Main from 'components/Main';

export default function Home() {
  return (
    <>
    <Head>
      <title>HackUTD</title>
      <meta name="description" content="HackUTD is Texas' largest university-run hackathon." />
    </Head>
    <Main />
    </>
  )
}
