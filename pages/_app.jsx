import Head from 'next/head';

import '../styles/globals.css';
import { ViewportProvider } from '../shared/providers/Viewport';

function MyApp({ Component, pageProps }) {
  return (
    <ViewportProvider>
      <Head>
        <title>SosoDefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ViewportProvider>
  );
}

export default MyApp;
