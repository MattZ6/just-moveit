import type { AppProps } from 'next/app'

import Main from '../layouts/Main';

function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default App;
