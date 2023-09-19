import Head from 'next/head';

import Main from 'components/Main';

export default function Home() {
  return (
    <>
    <Head>
      <title>HackUTD | Texas&apos; Largest University Hackathon</title>
      <meta 
        name="description" 
        content="We plan and host HackUTD, Texas&apos; largest university-run hackathon. We also assist other hackathons as part of our greater endeavor to use hacking to bring people together to learn new things."
      />
      
      {/* Primarily for Apple iMessage previews. OG only works with an absolute path. 
          TODO: use a solution that generates this dynamically instead of requiring a weirdly specific link. */}
      <meta property="og:image" content={"/Logo Color Square.png"} />
    </Head>
    <Main />
    </>
  )
}
