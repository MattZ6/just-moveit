import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext';

function App({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default App;
