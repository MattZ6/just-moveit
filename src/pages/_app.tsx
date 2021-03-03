import { ThemeProvider } from '../contexts/ThemeContext';

interface IProps {
  Component: any;
  pageProps: any;
  isDarkTheme: boolean;
}

function App({ Component, pageProps }: IProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
