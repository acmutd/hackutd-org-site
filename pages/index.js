import Head from 'next/head';

import Main from 'components/Main';

export default function Home() {
  return (
    <>
    <Head>
      <title>HackUTD</title>
      <meta name="description" content="HackUTD is Texas' largest university-run hackathon." />
      
      {/* Primarily for Apple iMessage previews. OG only works with an absolute path. 
          TODO: use a solution that generates this dynamically instead of requiring a weirdly specific link. */}
      <meta property="og:image" content={"https://hackutd.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdefault.8bf97b58.jpeg&w=1920&q=75"} />
    </Head>
    <Main />
    </>
  )
}
