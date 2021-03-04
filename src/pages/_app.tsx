import { ThemeProvider } from '../contexts/ThemeContext';

import Main from '../layouts/Main';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default App;
