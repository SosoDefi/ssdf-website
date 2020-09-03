import Head from 'next/head';

import '../styles/globals.css';
import 'react-dropdown/style.css';
import { ViewportProvider } from '../shared/providers/Viewport';
import { LanguageProvider } from '../shared/providers/Language';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ViewportProvider>
        <Head>
          <title>SosoDefi</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ViewportProvider>
    </LanguageProvider>
  );
}

export default MyApp;
